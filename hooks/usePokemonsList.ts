import { Pokemon } from '@/types/pokemon';
import { getPokemonsList } from '@/api/getPokemons';
import { useState } from 'react';

const LIMIT = 20;

export const usePokemonsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [offset, setOffset] = useState(0);

  const fetchPokemons = async () => {
    try {
      setIsLoading(true);
      const data = await getPokemonsList(offset, LIMIT);

      setOffset((prevOffset) => prevOffset + LIMIT);
      setPokemons((prevPokemons) => [
        ...(prevPokemons ? prevPokemons : []),
        ...data,
      ]);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, fetchPokemons, pokemons };
};
