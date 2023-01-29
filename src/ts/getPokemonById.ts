import type { PokeInfoStructure } from "./types";

const getPokemonById = async (
  url: string,
  id: number
): Promise<PokeInfoStructure> => {
  const response = await fetch(`${url}${id}`);
  const pokeInfo = (await response.json()) as PokeInfoStructure;
  return pokeInfo;
};

export default getPokemonById;
