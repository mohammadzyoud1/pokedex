import type { State } from "./state.js";

export function commandInspect(state: State, pokemonName?: string) {
  if (!pokemonName) {
    console.log("Please specify a Pokemon name.");
    state.rl.prompt(); 
    return;
  }

  const pokemon = state.pokedex[pokemonName.toLowerCase()];
  if (!pokemon) {
    console.log("you have not caught that pokemon");
    state.rl.prompt();
    return;
  }

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  pokemon.stats.forEach((s) => {
    console.log(`  -${s.name}: ${s.base_stat}`);
  });
  console.log("Types:");
  pokemon.types.forEach((t) => {
    console.log(`  - ${t.type.name}`);
  });

  state.rl.prompt();
}

