import { fireEvent, render } from '@testing-library/react-native';

import { Header } from '../../pokemon/Header';
import { PaperProvider } from 'react-native-paper';
import React from 'react';
import { useNavigation } from 'expo-router';

jest.mock('expo-font');

jest.mock('expo-router', () => ({
  useNavigation: jest.fn(),
}));

describe('Header Component', () => {
  it('renders correctly and handles navigation', () => {
    const goBackMock = jest.fn();
    useNavigation.mockReturnValue({ goBack: goBackMock });

    const { getByRole } = render(
      <PaperProvider>
        <Header />
      </PaperProvider>
    );

    const button = getByRole('button');
    fireEvent.press(button);
    expect(goBackMock).toHaveBeenCalled();
  });
});
