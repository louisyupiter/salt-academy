import Common from './common';

describe('SUM Only positive number', () => {
  it('should be return null when first number less than 0', () => {
    expect(Common.sumPositiveNumber(-10, 10)).toBeNull();
  })

  it('should be return sum number', () => {
    expect(Common.sumPositiveNumber(5, 5)).toEqual(10);
  })
})