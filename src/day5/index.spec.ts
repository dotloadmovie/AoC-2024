import { solution1, solution2 } from './index';

describe('tests', () => {
  test('test solution1', () => {
    const output = solution1();
    expect(output).toEqual(143);
  });

  test('test solution2', () => {
    const output = solution2();
    expect(output).toEqual(123);
  });
});