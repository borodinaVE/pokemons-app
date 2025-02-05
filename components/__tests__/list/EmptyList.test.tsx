import { EmptyList } from '../../list/EmptyList';
import { PaperProvider } from 'react-native-paper';
import React from 'react';
import { render } from '@testing-library/react-native';

describe('EmptyList Component', () => {
  it('renders correctly with the correct text', () => {
    const { getByText } = render(
      <PaperProvider>
        <EmptyList />
      </PaperProvider>
    );

    const textElement = getByText('No pokemon found');
    expect(textElement).toBeTruthy();
  });
});
