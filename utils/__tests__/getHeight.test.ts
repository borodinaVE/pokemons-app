import { getHeight } from '../getHeight';

describe('getHeight', () => {
  it('should convert height correctly for 5 feet', () => {
    expect(getHeight(5)).toBe("5'00'  12.7m");
  });

  it('should convert height correctly for 0 feet', () => {
    expect(getHeight(0)).toBe("0'00'  0.0m");
  });
});
