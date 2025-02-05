import axios from 'axios';
import { getPokemon } from '../getPokemon';
import getPokemon200 from '../mocks/getPokemon200.json';

jest.mock('axios');

describe('getPokemon', () => {
  it('should fetch and map a Pokemon by name', async () => {
    const pokemonName = 'zubat';

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: getPokemon200 })
    );

    const result = await getPokemon(pokemonName);

    expect(result).toEqual({
      attack: 45,
      defense: 35,
      height: 8,
      hp: 40,
      id: 41,
      moves: ['razor-wind', 'gust'],
      name: 'zubat',
      speed: 55,
      types: ['poison', 'flying'],
      url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/41.png',
      weight: 75,
    });
  });
});
