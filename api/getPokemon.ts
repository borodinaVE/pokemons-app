import { PokemonRaw } from '@/types/pokemon';
import { URL } from '@/constants/api';
import axios from 'axios';
import { mapPokemon } from '@/utils/mapPokemon';

export const getPokemon = async (name: string) => {
  if(!name) return null

  const pokemonResponses = await axios.get<PokemonRaw>(`${URL}/${name.toLowerCase()}`);

  const pokemon: PokemonRaw = pokemonResponses.data;

  return mapPokemon(pokemon);
};
