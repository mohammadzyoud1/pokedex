import { State } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js"
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandMap } from "./command_map.js";

import { commandPokedex } from "./command_pokedex.js";
import { commandInspect } from "./command_inspect.js";
export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void> | void;
};

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the Pokedex",
      callback: commandExit, // callback function
    },
	
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
     explore: {
      name: "explore",
      description: "Explore a location area and see all Pokemon",
      callback: commandExplore,
    },

    map: {
      name: "map",
      description: "Displays location areas (20 per call)",
      callback: commandMap,
    },
	catch: {
  name: "catch",
  description: "Catch a Pokemon",
  callback: commandCatch,
},

    inspect: {
      name: "inspect",
      description: "Inspect a caught Pokemon",
      callback: commandInspect,
    },

	 pokedex: { name: "pokedex", 
	description: "Lists all caught Pokemon", 
 	callback: commandPokedex },
    // You can add more commands here later
  };
}
