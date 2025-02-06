import { PokemonRaw } from '@/types/pokemon';
import { URL } from '@/constants/api';
import axios from 'axios';
import { mapPokemon } from '@/utils/mapPokemon';

export const getPokemonsList = async (offset: number, limit: number) => {
  const pokemonResponses = await axios.get<{ results: PokemonRaw[] }>(URL, {
    params: { limit, offset },
  });

  const pokemonData: PokemonRaw[] = pokemonResponses.data.results;

  const detailedPokemonPromises = pokemonData.map(({ url }) =>
    axios.get<PokemonRaw>(url)
  );
  const detailedPokemonResponses = await Promise.all(detailedPokemonPromises);

  return {pokemons: detailedPokemonResponses.map((detailedPokemonData) => {
    return mapPokemon(detailedPokemonData.data);
  }), nextOffset: offset + limit };
};
