// server.js
import express from "express";
import crypto from "crypto";

const app = express();
app.use(express.json());

// ====== ENV ======
const BOT_TOKEN = process.env.BOT_TOKEN; // BotFather token
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID; // 5176387300
const BOT_USERNAME = process.env.BOT_USERNAME; // CrayUpBot (t.me linki için)
const PUBLIC_BASE_URL = process.env.PUBLIC_BASE_URL; // https://xxxxx.run.app

if (!BOT_TOKEN || !ADMIN_CHAT_ID || !BOT_USERNAME || !PUBLIC_BASE_URL) {
  console.warn(
    "Missing env vars. Required: BOT_TOKEN, ADMIN_CHAT_ID, BOT_USERNAME, PUBLIC_BASE_URL"
  );
}

// ====== In-memory storage (prod için DB kullan: Firestore/Redis) ======
// connectCode -> { status: 'pending'|'connected', userChatId, userInfo, createdAt }
const connectMap = new Map();

// userChatId -> last form payload (opsiyonel)
const userLastForm = new Map();

// admin "reply routing": admin en son hangi kullanıcıyla konuştu?
let adminLastUserChatId = null;

// ====== Telegram API helper ======
async function tg(method, payload) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/${method}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!data.ok) {
    throw new Error(`${method} failed: ${data.error_code} ${data.description}`);
  }
  return data.result;
}

function newCode() {
  return crypto.randomBytes(16).toString("hex"); // 32 char
}

function safeText(v) {
  if (v === null || v === undefined) return "";
  return String(v);
}

// ====== API: connect start ======
app.post("/api/telegram/connect/start", (req, res) => {
  const code = newCode();
  connectMap.set(code, {
    status: "pending",
    createdAt: Date.now(),
  });

  const telegramUrl = `https://t.me/${BOT_USERNAME}?start=${code}`;
  res.json({ code, telegramUrl });
});

// ====== API: connect status ======
app.get("/api/telegram/connect/status", (req, res) => {
  const code = req.query.code;
  if (!code || !connectMap.has(code)) return res.status(404).json({ connected: false });

  const entry = connectMap.get(code);
  res.json({
    connected: entry.status === "connected",
    userChatId: entry.userChatId ?? null,
    userInfo: entry.userInfo ?? null,
  });
});

// ====== API: form submit ======
app.post("/api/form/submit", async (req, res) => {
  try {
    const { code, form } = req.body || {};
    if (!code || !connectMap.has(code)) {
      return res.status(401).json({ ok: false, error: "NOT_CONNECTED" });
    }

    const entry = connectMap.get(code);
    if (entry.status !== "connected" || !entry.userChatId) {
      return res.status(401).json({ ok: false, error: "NOT_CONNECTED" });
    }

    const userChatId = entry.userChatId;
    const userInfo = entry.userInfo || {};

    // Admin’e mesaj
    const textToAdmin =
      `🆕 Yeni Form Geldi\n` +
      `User: ${safeText(userInfo.first_name)} ${safeText(userInfo.last_name)} (@${safeText(
        userInfo.username
      )})\n` +
      `UserChatId: ${userChatId}\n` +
      `ConnectCode: ${code}\n\n` +
      `📩 Form İçeriği:\n` +
      `${JSON.stringify(form, null, 2)}`;

    await tg("sendMessage", {
      chat_id: ADMIN_CHAT_ID,
      text: textToAdmin,
    });

    // Kullanıcıya bilgilendirme (opsiyonel)
    await tg("sendMessage", {
      chat_id: userChatId,
      text: "✅ Formunu aldım. Buradan yazışmaya devam edebiliriz.",
    });

    // Routing: admin son kullanıcı = bu
    adminLastUserChatId = userChatId;
    userLastForm.set(userChatId, form);

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: "SERVER_ERROR" });
  }
});

// ====== Telegram Webhook ======
app.post("/webhook/telegram", async (req, res) => {
  // Telegram’a hızlı 200 dönmek iyi olur
  res.status(200).send("OK");

  try {
    const update = req.body;

    // Mesaj geldiyse:
    const msg = update.message || update.edited_message;
    if (!msg || !msg.chat) return;

    const chatId = msg.chat.id;
    const text = msg.text || "";

    // 1) Kullanıcı /start CODE ile bağlanıyorsa
    if (text.startsWith("/start")) {
      const parts = text.trim().split(/\s+/);
      const code = parts[1];

      if (code && connectMap.has(code)) {
        const entry = connectMap.get(code);
        entry.status = "connected";
        entry.userChatId = chatId;
        entry.userInfo = msg.from || {};
        connectMap.set(code, entry);

        await tg("sendMessage", {
          chat_id: chatId,
          text: "✅ Telegram bağlantın tamamlandı. Şimdi siteye geri dönüp formu gönderebilirsin.",
        });

        // Admin’e bilgi
        await tg("sendMessage", {
          chat_id: ADMIN_CHAT_ID,
          text:
            `🔗 Yeni Telegram bağlantısı\n` +
            `User: ${safeText(msg.from?.first_name)} ${safeText(msg.from?.last_name)} (@${safeText(
              msg.from?.username
            )})\n` +
            `UserChatId: ${chatId}\n` +
            `ConnectCode: ${code}`,
        });

        // admin routing’i buna çekelim (istersen)
        adminLastUserChatId = chatId;
      } else {
        // code yoksa da normal karşılama
        await tg("sendMessage", {
          chat_id: chatId,
          text: "Merhaba! Site üzerinden bağlanıp form gönderdiğinde buradan konuşabiliriz.",
        });
      }
      return;
    }

    // 2) Admin, bota DM’den mesaj atıyorsa → kullanıcıya ilet
    // Admin chat id kontrolü:
    if (String(chatId) === String(ADMIN_CHAT_ID)) {
      // İstersen güvenli cevap formatı kullanalım:
      // /r <userChatId> mesaj
      if (text.startsWith("/r")) {
        const m = text.match(/^\/r\s+(-?\d+)\s+([\s\S]+)/);
        if (m) {
          const targetUserChatId = m[1];
          const body = m[2];
          await tg("sendMessage", { chat_id: targetUserChatId, text: body });
          adminLastUserChatId = Number(targetUserChatId);
          return;
        }
      }

      // /r kullanmadıysa: en son kullanıcıya gönder
      if (adminLastUserChatId) {
        await tg("sendMessage", { chat_id: adminLastUserChatId, text });
      } else {
        await tg("sendMessage", {
          chat_id: ADMIN_CHAT_ID,
          text:
            "⚠️ Henüz hedef kullanıcı yok. Şu formatla cevapla:\n/r <userChatId> mesaj",
        });
      }
      return;
    }

    // 3) Kullanıcı, bota mesaj atıyorsa → admin’e forward et + routing güncelle
    adminLastUserChatId = chatId;
    await tg("sendMessage", {
      chat_id: ADMIN_CHAT_ID,
      text:
        `💬 Kullanıcı mesajı\nUserChatId: ${chatId}\n` +
        `User: ${safeText(msg.from?.first_name)} ${safeText(msg.from?.last_name)} (@${safeText(
          msg.from?.username
        )})\n\n` +
        `${text}`,
    });
  } catch (e) {
    console.error("webhook error:", e);
  }
});

// Health check
app.get("/", (req, res) => res.send("ok"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Listening on", port));
