export type Pokemon = {
  id: number;
  name: string;
  url: string;
  types: string[];
  weight: number;
  height: number;
  moves: string[];
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};

export type PokemonRaw = {
  id: number;
  url: string;
  name: string;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
  moves: {
    move: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
  }[];
};
