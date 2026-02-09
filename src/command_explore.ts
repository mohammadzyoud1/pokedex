
import type { State } from "./state.js";


const cache: Record<string, any> = {};

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length === 0) {
    console.log("Please provide a location area to explore.");
    return;
  }

  const areaName = args.join("-").toLowerCase();
  console.log(`Exploring ${areaName}...`);

  try {
    let data;

    if (cache[areaName]) {
      data = cache[areaName];
    } else {
      const res = await fetch(`https://pokeapi.co/api/v2/location-area/${areaName}`);
      if (!res.ok) throw new Error(`Failed to fetch ${areaName}`);
      data = await res.json();
      cache[areaName] = data; // store in cache
    }

    if (!data.pokemon_encounters || data.pokemon_encounters.length === 0) {
      console.log("No Pokemon found in this area.");
      return;
    }

    console.log("Found Pokemon:");
    data.pokemon_encounters.forEach((encounter: any) => {
      console.log(` - ${encounter.pokemon.name}`);
    });
  } catch (err: unknown) {
    if (err instanceof Error) console.error("Error exploring area:", err.message);
    else console.error("Error exploring area:", err);
  }
}

