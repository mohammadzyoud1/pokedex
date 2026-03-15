# Pokédex CLI

A command-line Pokédex REPL built in TypeScript. Explore Pokémon locations, catch Pokémon, and inspect their stats — all from your terminal.

## Features

- Interactive REPL (Read-Eval-Print Loop) interface
- Browse location areas from the PokéAPI
- Explore areas to find wild Pokémon
- Attempt to catch Pokémon (based on their base experience)
- Inspect caught Pokémon stats

## Requirements

- [Node.js](https://nodejs.org/) v18+



## Usage
```
npm run start
```

## Commands

| Command             | Description                                    |
|---------------------|------------------------------------------------|
| `help`              | Display available commands                     |
| `map`               | Show the next page of location areas           |
| `mapb`              | Show the previous page of location areas       |
| `explore <area>`    | List Pokémon found in a location area          |
| `catch <pokemon>`   | Attempt to catch a Pokémon                     |
| `inspect <pokemon>` | View stats of a caught Pokémon                 |
| `pokedex`           | List all Pokémon you've caught                 |
| `exit`              | Exit the program                               |

## Example Session
```
Pokedex > map
- canalave-city-area
- eterna-city-area
- pastoria-city-area
...

Pokedex > explore pastoria-city-area
Exploring pastoria-city-area...
- tentacool
- tentacruel
- shellos
...

Pokedex > catch tentacool
Throwing a Pokeball at tentacool...
tentacool was caught!

Pokedex > inspect tentacool
Name: tentacool
Height: 9
Weight: 455
Stats:
  - hp: 40
  - attack: 40
  - defense: 35
  ...
Types:
  - water
  - poison
```


