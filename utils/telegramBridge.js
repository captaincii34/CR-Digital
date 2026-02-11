const API_BASE = "https://cray-telegram-backend-892080790476.us-west1.run.app";

async function safeJson(r) {
  try {
    return await r.json();
  } catch {
    return null;
  }
}

export async function startTelegramConnectWithForm(formObj) {
  const r = await fetch(`${API_BASE}/api/telegram/connect/start`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ form: formObj, page: window.location.href }),
  });

  const data = await safeJson(r);

  // Backend hata döndürdüyse burada yakala
  if (!r.ok) {
    const msg = data?.error || data?.message || `connect/start failed (${r.status})`;
    throw new Error(msg);
  }

  if (!data?.code || !data?.telegramUrl) {
    throw new Error("connect/start returned missing code or telegramUrl");
  }

  localStorage.setItem("connectCode", data.code);

  // POPUP yerine aynı sekmede yönlendir (about:blank/boş sayfa sorununu çözer)
  window.location.href = data.telegramUrl;

  return data.code;
}

export async function waitUntilConnected(code, timeoutMs = 120000) {
  const started = Date.now();

  while (Date.now() - started < timeoutMs) {
    const s = await fetch(
      `${API_BASE}/api/telegram/connect/status?code=${encodeURIComponent(code)}`
    );

    const st = await safeJson(s);

    if (s.ok && st?.connected) return true;

    await new Promise((res) => setTimeout(res, 1500));
  }

  return false;
}
