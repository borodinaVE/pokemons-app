import { formatPokemonId } from '../formatPokemonId';

describe('formatPokemonId', () => {
  it('should format single digit IDs correctly', () => {
    expect(formatPokemonId(5)).toBe('#005');
  });

  it('should format double digit IDs correctly', () => {
    expect(formatPokemonId(14)).toBe('#014');
  });

  it('should format triple digit IDs correctly', () => {
    expect(formatPokemonId(999)).toBe('#999');
  });

  it('should handle zero as a special case', () => {
    expect(formatPokemonId(0)).toBe('#000');
  });
});
