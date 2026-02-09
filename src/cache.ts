const cache: Record<string, any> = {};

export async function fetchWithCache(url: string) {
  if (cache[url]) return cache[url];

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);

  const data = await res.json();
  cache[url] = data;
  return data;
}
