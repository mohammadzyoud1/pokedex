import { initState, type State } from "./state.js";
import { cleanInput } from "./repl.js";


function main() {
  const state: State = initState(); // initialize State
  const { rl, commands } = state;

  rl.prompt();

  rl.on("line",async (line: string) => {
    const words = cleanInput(line);

    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0].toLowerCase();
    const command = commands[commandName];

    if (command) {
      try {
        await command.callback(state, ...words.slice(1));
      } catch (err) {
        console.error("Error running command:", err);
      }
    } else {
      console.log("Unknown command");
    }

    rl.prompt();
  });
}

main();
