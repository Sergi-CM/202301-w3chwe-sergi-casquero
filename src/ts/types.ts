export interface PokemonListStructure {
  count: number;
  next: string;
  previous: string;
  results: PokeInfoStructure[];
}

export interface PokeInfoStructure {
  id: number;
  name: string;
  types: Types[];
  sprites: Sprites;
}

interface Types {
  type: Type;
}

interface Type {
  slot: number;
  name: string;
}

interface Sprites {
  other: Other;
}

interface Other {
  "official-artwork": Artwork;
}

interface Artwork {
  front_default: string;
}
