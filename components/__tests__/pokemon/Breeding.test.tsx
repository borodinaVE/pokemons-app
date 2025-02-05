import { Breeding } from '../../pokemon/Breeding';
import { PaperProvider } from 'react-native-paper';
import { render } from '@testing-library/react-native';

jest.mock('expo-font');

jest.mock('@/utils/getHeight', () => ({
  getHeight: jest.fn((height) => `${height} cm`),
}));

jest.mock('@/utils/getWeight', () => ({
  getWeight: jest.fn((weight) => `${weight} kg`),
}));

describe('Breeding Component', () => {
  it('renders correctly with given weight and height', () => {
    const weight = 70;
    const height = 180;
    const { getByText } = render(
      <PaperProvider>
        <Breeding weight={weight} height={height} />
      </PaperProvider>
    );

    expect(getByText('Breeding')).toBeTruthy();
    expect(getByText('weight')).toBeTruthy();
    expect(getByText('height')).toBeTruthy();
    expect(getByText('70 kg')).toBeTruthy();
    expect(getByText('180 cm')).toBeTruthy();
  });
});
