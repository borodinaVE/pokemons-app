import { fireEvent, render } from '@testing-library/react-native';

import { Error } from '../../common/Error';
import { PaperProvider } from 'react-native-paper';
import React from 'react';

jest.mock('expo-font');

describe('Error Component', () => {
  it('renders correctly when visible', () => {
    const { getByText } = render(
      <PaperProvider>
        <Error visible={true} />
      </PaperProvider>
    );

    expect(getByText('Something went wrong')).toBeTruthy();
    expect(getByText('Retry')).toBeTruthy();
  });

  it('does not render when not visible', () => {
    const { queryByText } = render(
      <PaperProvider>
        <Error visible={false} />
      </PaperProvider>
    );

    expect(queryByText('Something went wrong')).toBeNull();
    expect(queryByText('Retry')).toBeNull();
  });

  it('calls handleDismiss when action is pressed', () => {
    const mockHandleDismiss = jest.fn();
    const { getByText } = render(
      <PaperProvider>
        <Error visible={true} handleDismiss={mockHandleDismiss} />
      </PaperProvider>
    );

    fireEvent.press(getByText('Retry'));
    expect(mockHandleDismiss).toHaveBeenCalled();
  });
});
