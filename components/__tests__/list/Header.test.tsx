import { fireEvent, render } from '@testing-library/react-native';

import { Header } from '../../list/Header';
import { PaperProvider } from 'react-native-paper';
import React from 'react';

jest.mock('expo-font');

describe('Header Component', () => {
  const mockHandleSearchSubmit = jest.fn();

  it('renders correctly with initial state', () => {
    const { getByText, getByPlaceholderText } = render(
      <PaperProvider>
        <Header
          handleSearchSubmit={mockHandleSearchSubmit}
          isSearchSubmited={false}
        />
      </PaperProvider>
    );

    expect(getByPlaceholderText('E.g. Pikachu')).toBeTruthy();
    expect(getByText('Who are you looking for?')).toBeTruthy();
    expect(getByText('GO')).toBeTruthy();
  });

  it('changes button text when search is submitted', () => {
    const { getByText } = render(
      <PaperProvider>
        <Header
          handleSearchSubmit={mockHandleSearchSubmit}
          isSearchSubmited={true}
        />
      </PaperProvider>
    );

    expect(getByText('CLEAR')).toBeTruthy();
  });

  it('calls handleSearchSubmit with the correct query on submit', () => {
    const { getByPlaceholderText, getByText } = render(
      <PaperProvider>
        <Header
          handleSearchSubmit={mockHandleSearchSubmit}
          isSearchSubmited={false}
        />
      </PaperProvider>
    );

    const searchInput = getByPlaceholderText('E.g. Pikachu');
    const goButton = getByText('GO');

    fireEvent.changeText(searchInput, 'Pikachu');
    fireEvent.press(goButton);

    expect(mockHandleSearchSubmit).toHaveBeenCalledWith('Pikachu');
  });

  it('clears the search query when CLEAR is pressed', () => {
    const { getByPlaceholderText, getByText } = render(
      <PaperProvider>
        <Header
          handleSearchSubmit={mockHandleSearchSubmit}
          isSearchSubmited={true}
        />
      </PaperProvider>
    );

    const searchInput = getByPlaceholderText('E.g. Pikachu');
    const clearButton = getByText('CLEAR');

    fireEvent.press(clearButton);

    expect(mockHandleSearchSubmit).toHaveBeenCalledWith('');
    expect(searchInput.props.value).toBe('');
  });
});
