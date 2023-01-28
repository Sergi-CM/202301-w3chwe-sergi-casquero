export interface PokemonListStructure {
  count: number;
  next: string;
  previous: string;
  results: PokeInfoStructure[];
}

export interface PokeInfoStructure {
  name: string;
  url: string;
}
