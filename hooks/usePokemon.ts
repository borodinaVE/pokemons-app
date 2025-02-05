import { Pokemon } from '@/types/pokemon';
import { getPokemon } from '@/api/getPokemon';
import { useState } from 'react';

export const usePokemon = () => {
  const [isPokemonLoading, setIsLoading] = useState(false);
  const [pokemonError, setPokemonError] = useState(false);

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const fetchPokemon = async (name: string) => {
    try {
      setIsLoading(true);
      setPokemon(null);
      const data = await getPokemon(name.toLowerCase());
      setPokemon(data);
    } catch (e) {
      setPokemonError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { isPokemonLoading, pokemonError, pokemon, fetchPokemon };
};
