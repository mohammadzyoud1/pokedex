import type { State, Pokemon } from "./state.js";

export async function commandCatch(
  state: State,
  pokemonName?: string
): Promise<void> {
  if (!pokemonName) {
    console.log("Please specify a Pokemon name.");
    return;
  }

  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const data = await state.api.get<any>(url);

    const baseExp = data.base_experience;


    const chance = Math.max(0.1, 1 - baseExp / 400);
    const roll = Math.random();

    if (roll < chance) {
      console.log(`${pokemonName} was caught!`);

      const pokemon: Pokemon = {
        name: data.name,
        base_experience: baseExp,
      height: data.height,
      weight: data.weight,
      stats: data.stats.map((s: any) => ({
    name: s.stat.name, // stat name is nested under stat
    base_stat: s.base_stat,
  })),
  types: data.types.map((t: any) => ({
    type: { name: t.type.name },
  })),
    };
state.pokedex[pokemonName.toLowerCase()] = pokemon;

    } else {
      console.log(`${pokemonName} escaped!`);
    }
  } catch (err) {
    console.log("Pokemon not found.");
  }
}
