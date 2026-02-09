import type { State } from "./state.js";

export function commandPokedex(state: State) {
  const caught = Object.keys(state.pokedex);

  if (caught.length === 0) {
    console.log("Your Pokedex is empty!");
  } else {
    console.log("Your Pokedex:");
    caught.forEach((name) => {
      console.log(` - ${name}`);
    });
  }

  state.rl.prompt();
}
