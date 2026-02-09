import { createInterface, type Interface } from "node:readline";
import { getCommands,CLICommand} from "./command.js";
import { PokeAPI } from "./pokeapi.js";
import { Cache } from "./pokecache.js";
export type State = {
  rl: Interface; // readline interface
  commands: Record<string, CLICommand>;
 mapOffset?: number;
 api: PokeAPI;
pokedex: Record<string, Pokemon>;
};

 
export type Pokemon = {
  name: string;
  base_experience: number;
   height: number;
  weight: number;
  stats: Array<{ name: string; base_stat: number }>;
  types: Array<{ type: { name: string } }>;
 
};


export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  
  const commands = getCommands();
  const cache = new Cache(30_000);
  const api = new PokeAPI(cache);


  return { rl, commands, api, pokedex: {}, };
} 
