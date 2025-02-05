import { PaperProvider } from 'react-native-paper';
import React from 'react';
import { Type } from '../../common/Type';
import { capitalizeFirstLetter } from '@/utils/capitalize';
import { render } from '@testing-library/react-native';

jest.mock('expo-font');

describe('Type Component', () => {
  it('renders correctly with given type', () => {
    const type = 'fire';
    const { getByText } = render(
      <PaperProvider>
        <Type type={type} />
      </PaperProvider>
    );

    const capitalizedType = capitalizeFirstLetter(type);
    expect(getByText(capitalizedType)).toBeTruthy();
  });
});
