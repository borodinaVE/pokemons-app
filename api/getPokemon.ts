import { PokemonRaw } from '@/types/pokemon';
import { URL } from '@/constants/api';
import axios from 'axios';
import { mapPokemon } from '@/utils/mapPokemon';

export const getPokemon = async (name: string) => {
  const pokemonResponses = await axios.get<PokemonRaw>(`${URL}${name}`);

  const pokemon: PokemonRaw = pokemonResponses.data;

  return mapPokemon(pokemon);
};
