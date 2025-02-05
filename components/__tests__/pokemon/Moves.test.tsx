import { fireEvent, render } from '@testing-library/react-native';

import { Moves } from '../../pokemon/Moves';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';

describe('Moves Component', () => {
  it('renders the initial set of moves and toggles on button press', () => {
    const mockMoves = ['Move1', 'Move2', 'Move3', 'Move4', 'Move5'];

    const { getByText, queryByText } = render(
      <PaperProvider>
        <Moves moves={mockMoves} />
      </PaperProvider>
    );

    expect(getByText('Move1')).toBeTruthy();
    expect(getByText('Move2')).toBeTruthy();
    expect(getByText('Move3')).toBeTruthy();
    expect(queryByText('Move4')).toBeNull();
    expect(queryByText('Move5')).toBeNull();

    const button = getByText('See all');
    fireEvent.press(button);

    expect(getByText('Move4')).toBeTruthy();
    expect(getByText('Move5')).toBeTruthy();

    fireEvent.press(getByText('Hide'));

    expect(queryByText('Move4')).toBeNull();
    expect(queryByText('Move5')).toBeNull();
  });
});
