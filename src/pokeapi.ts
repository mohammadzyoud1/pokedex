import { Cache } from "./pokecache.js";

export class PokeAPI {
  constructor(private cache: Cache) {}

  async get<T>(url: string): Promise<T> {
    // Check cache first
    const cached = this.cache.get<T>(url);
    if (cached) return cached;

    // Otherwise fetch
    const res = await fetch(url);
    const data = await res.json();

    // Store in cache
    this.cache.add(url, data);

    return data;
  }
}
