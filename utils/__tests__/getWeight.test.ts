import { getWeight } from '../getWeight';

describe('getWeight', () => {
  test('converts weight from pounds to kilograms correctly', () => {
    expect(getWeight(0)).toBe('0.0lbs 0.0kg');
    expect(getWeight(1)).toBe('1.0lbs 0.5kg');
    expect(getWeight(100)).toBe('100.0lbs 45.4kg');
    expect(getWeight(200)).toBe('200.0lbs 90.7kg');
  });

  test('rounds weight to one decimal place', () => {
    expect(getWeight(1.234)).toBe('1.2lbs 0.6kg');
    expect(getWeight(99.999)).toBe('100.0lbs 45.4kg');
  });
});
