import { Provider as PaperProvider } from 'react-native-paper';
import { PokemonCard } from '../../list/PokemonCard';
import React from 'react';
import { render } from '@testing-library/react-native';

jest.mock('expo-font');

describe('PokemonCard Component', () => {
  const mockPokemon = {
    name: 'pikachu',
    url: 'https://example.com/pikachu.png',
    id: 25,
    types: ['electric'],
  };

  it('renders correctly with given props', () => {
    const { getByText } = render(
      <PaperProvider>
        <PokemonCard
          weight={0}
          height={0}
          moves={[]}
          hp={0}
          attack={0}
          defense={0}
          speed={0}
          {...mockPokemon}
        />
      </PaperProvider>
    );

    expect(getByText('Pikachu')).toBeOnTheScreen();
    expect(getByText('#025')).toBeOnTheScreen();
    expect(getByText('Electric')).toBeOnTheScreen();
  });
});
