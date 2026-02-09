// src/command_map.ts
import type { State } from "./state.js";

const cache: Record<string, any> = {}; // cache all location areas

export async function commandMap(state: State) {
  try {
    // fetch all areas if not in cache
    if (!cache["location_areas"]) {
      const res = await fetch("https://pokeapi.co/api/v2/location-area?limit=1000"); // large limit
      if (!res.ok) throw new Error("Failed to fetch location areas");
      const data = await res.json();
      cache["location_areas"] = data.results.map((area: any) => area.name);
    }

    const areas: string[] = cache["location_areas"];
    const offset = state.mapOffset ?? 0; // current position
    const nextOffset = offset + 20;

    // slice next 20 areas
    const page = areas.slice(offset, nextOffset);

    if (page.length === 0) {
      console.log("No more locations to display.");
      return;
    }

    page.forEach((area) => console.log(area));

    // update offset for next call
    state.mapOffset = nextOffset;
  } catch (err: unknown) {
    if (err instanceof Error) console.error("Error fetching map:", err.message);
    else console.error("Error fetching map:", err);
  }
}
