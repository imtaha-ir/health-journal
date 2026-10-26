export async function apiGet(endpoint: string) {
  const url: string = import.meta.env.VITE_API_BASE_URL + endpoint;
  const token = import.meta.env.VITE_API_TOKEN;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const jsonRes = await res.json();
  if (jsonRes.success) {
    return jsonRes.data;
  } else {
    throw new Error(jsonRes.error.message);
  }
}
