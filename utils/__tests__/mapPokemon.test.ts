import { PokemonRaw } from '@/types/pokemon';
import { mapPokemon } from '../mapPokemon';
import pokemon from './mocks/pokemon.json';

describe('mapPokemon', () => {
  it('should map pokemon correctly', () => {
    const pokemonRaw = {
      id: 1,
      name: 'Pikachu',
      sprites: {
        other: {
          home: {
            front_default: 'https://example.com/pikachu.png',
          },
        },
      },
      types: [{ type: { name: 'Electric' } }, { type: { name: 'Poison' } }],
      weight: 60,
      height: 10,
      moves: [
        { move: { name: 'Thunder Shock' } },
        { move: { name: 'Thunder Wave' } },
      ],
      stats: [
        { base_stat: 1 },
        { base_stat: 2 },
        { base_stat: 3 },
        { base_stat: 4 },
        { base_stat: 5 },
        { base_stat: 6 },
      ],
    };

    const expectedPokemon = {
      id: 1,
      name: 'Pikachu',
      url: 'https://example.com/pikachu.png',
      types: ['Electric', 'Poison'],
      weight: 60,
      height: 10,
      moves: ['Thunder Shock', 'Thunder Wave'],
      hp: 1,
      attack: 2,
      defense: 3,
      speed: 6,
    };

    expect(mapPokemon(pokemonRaw)).toEqual(expectedPokemon);
  });

  it('should handle empty types', () => {
    const pokemonRaw = {
      id: 1,
      name: 'Pikachu',
      sprites: {
        other: {
          home: {
            front_default: 'https://example.com/pikachu.png',
          },
        },
      },
      types: [],
      weight: 60,
      height: 10,
      moves: [
        { move: { name: 'Thunder Shock' } },
        { move: { name: 'Thunder Wave' } },
      ],
      stats: [
        { base_stat: 65 },
        { base_stat: 49 },
        { base_stat: 49 },
        { base_stat: 49 },
        { base_stat: 49 },
        { base_stat: 45 },
      ],
    };

    const expectedPokemon = {
      id: 1,
      name: 'Pikachu',
      url: 'https://example.com/pikachu.png',
      types: [],
      weight: 60,
      height: 10,
      moves: ['Thunder Shock', 'Thunder Wave'],
      hp: 65,
      attack: 49,
      defense: 49,
      speed: 45,
    };

    expect(mapPokemon(pokemonRaw)).toEqual(expectedPokemon);
  });

  it('should handle empty moves', () => {
    const pokemonRaw = {
      id: 1,
      name: 'Pikachu',
      sprites: {
        other: {
          home: {
            front_default: 'https://example.com/pikachu.png',
          },
        },
      },
      types: [{ type: { name: 'Electric' } }, { type: { name: 'Poison' } }],
      weight: 60,
      height: 10,
      moves: [],
      stats: [
        { base_stat: 65 },
        { base_stat: 49 },
        { base_stat: 49 },
        { base_stat: 49 },
        { base_stat: 49 },
        { base_stat: 45 },
      ],
    };

    const expectedPokemon = {
      id: 1,
      name: 'Pikachu',
      url: 'https://example.com/pikachu.png',
      types: ['Electric', 'Poison'],
      weight: 60,
      height: 10,
      moves: [],
      hp: 65,
      attack: 49,
      defense: 49,
      speed: 45,
    };

    expect(mapPokemon(pokemonRaw)).toEqual(expectedPokemon);
  });

  it('should handle missing stats', () => {
    const pokemonRaw = {
      id: 1,
      name: 'Pikachu',
      sprites: {
        other: {
          home: {
            front_default: 'https://example.com/pikachu.png',
          },
        },
      },
      types: [{ type: { name: 'Electric' } }, { type: { name: 'Poison' } }],
      weight: 60,
      height: 10,
      moves: [
        { move: { name: 'Thunder Shock' } },
        { move: { name: 'Thunder Wave' } },
      ],
      stats: [],
    };

    expect(() => mapPokemon(pokemonRaw)).toThrowError();
  });
});
