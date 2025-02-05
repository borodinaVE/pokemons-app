import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { Spinner } from '../../common/Spinner';
import { render } from '@testing-library/react-native';

describe('Spinner Component', () => {
  it('should render withour errors', () => {
    render(
      <PaperProvider>
        <Spinner />
      </PaperProvider>
    );
  });
});
