const API_BASE = "https://cray-telegram-backend-892080790476.us-west1.run.app";

export async function startTelegramConnectWithForm(formObj) {
  const r = await fetch(`${API_BASE}/api/telegram/connect/start`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ form: formObj }),
  });

  const data = await r.json(); // { code, telegramUrl }
  localStorage.setItem("connectCode", data.code);

  window.open(data.telegramUrl, "_blank", "noopener,noreferrer");
  return data.code;
}

export async function waitUntilConnected(code, timeoutMs = 120000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    const s = await fetch(`${API_BASE}/api/telegram/connect/status?code=${encodeURIComponent(code)}`);
    const st = await s.json(); // { connected: boolean }
    if (st.connected) return true;
    await new Promise((res) => setTimeout(res, 1500));
  }
  return false;
}
