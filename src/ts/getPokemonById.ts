import type { PokeInfoStructure } from "./types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonById = async (id: number): Promise<PokeInfoStructure> => {
  const response = await fetch(`${apiUrl}${id}`);
  const pokeInfo = (await response.json()) as PokeInfoStructure;
  return pokeInfo;
};

export default getPokemonById;
