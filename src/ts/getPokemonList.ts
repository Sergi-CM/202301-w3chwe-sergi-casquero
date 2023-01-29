import type { PokemonListStructure } from "./types";

const getPokemonList = async (url: string): Promise<PokemonListStructure> => {
  const response = await fetch(url);
  const pokeList = (await response.json()) as PokemonListStructure;
  return pokeList;
};

export default getPokemonList;
