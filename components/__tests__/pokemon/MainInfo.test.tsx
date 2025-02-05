import { MainInfo } from '../../pokemon/MainInfo';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { render } from '@testing-library/react-native';

jest.mock('../../pokemon/Features', () => ({
  Features: '',
}));

jest.mock('@/utils/capitalize', () => ({
  capitalizeFirstLetter: jest.fn(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  ),
}));

jest.mock('@/utils/formatPokemonId', () => ({
  formatPokemonId: jest.fn((id) => `#${id.toString().padStart(3, '0')}`),
}));

describe('MainInfo Component', () => {
  it('renders Pokemon details correctly', () => {
    const mockPokemon = {
      id: 1,
      name: 'bulbasaur',
      types: ['grass', 'poison'],
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45,
      url: 'https://example.com/bulbasaur.png',
      height: 3,
      weight: 4,
      moves: ['1', '2', '3'],
    };

    const { getByText } = render(
      <PaperProvider>
        <MainInfo pokemon={mockPokemon} />
      </PaperProvider>
    );

    expect(getByText('#001')).toBeTruthy();

    expect(getByText('Bulbasaur')).toBeTruthy();

    expect(getByText('Grass')).toBeTruthy();
    expect(getByText('Poison')).toBeTruthy();
  });
});
