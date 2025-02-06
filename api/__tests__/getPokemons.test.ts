import { PokemonRaw } from '@/types/pokemon';
import axios from 'axios';
import getPokemon200 from '../mocks/getPokemon200.json';
import getPokemons200 from '../mocks/getPokemons200.json';
import { getPokemonsList } from '../getPokemons';
import { mapPokemon } from '@/utils/mapPokemon';

jest.mock('axios');

describe('getPokemonsList', () => {
  it('returns a list of detailed pokemons', async () => {
    const expectedDetailedPokemonResponses: PokemonRaw[] = [
      getPokemon200,
      getPokemon200,
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: getPokemons200 })
    );
    expectedDetailedPokemonResponses.forEach((pokemon) => {
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: pokemon })
      );
    });

    const pokemonsList = await getPokemonsList(0, 10);

    expect(pokemonsList).toEqual(
      {pokemons: expectedDetailedPokemonResponses.map((p) => mapPokemon(p)), nextOffset: 10 }
    );
  });
});
