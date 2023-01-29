import type { PokeInfoStructure } from "./types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonById = async (
  url: string,
  id: number
): Promise<PokeInfoStructure> => {
  const response = await fetch(`${url}${id}`);
  const pokeInfo = (await response.json()) as PokeInfoStructure;
  return pokeInfo;
};

export default getPokemonById;
