import { Pokemon, PokemonRaw } from '@/types/pokemon';

export const mapPokemon = (pokemon: PokemonRaw): Pokemon => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    url: pokemon.sprites.other.home.front_default,
    types: pokemon.types.map(({ type }) => type.name),
    weight: pokemon.weight,
    height: pokemon.height,
    moves: pokemon.moves.map((move) => move.move.name),
    hp: pokemon.stats[0].base_stat,
    attack: pokemon.stats[1].base_stat,
    defense: pokemon.stats[2].base_stat,
    speed: pokemon.stats[5].base_stat,
  };
};
