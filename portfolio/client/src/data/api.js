export const API_BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") ||
  "https://portfolio-innofaso.onrender.com/api";

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Erreur API (${res.status})`);
  }
  return res.json();
}

async function uploadRequest(path, formData) {
  const res = await fetch(`${API_BASE_URL}${path}`, { method: "POST", body: formData });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Erreur API (${res.status})`);
  }
  return res.json();
}

export const api = {
  getAll: () => request("/portfolio/all"),
  sendContact: (data) =>
    request("/contact", { method: "POST", body: JSON.stringify(data) }),
};