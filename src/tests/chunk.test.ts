import { chunk } from '../iterables';

describe('chunk', () => {
  it('divide un array en subarrays del tamaño especificado', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    expect(chunk(numbers, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  it('devuelve un solo subarray si el tamaño es mayor que el array original', () => {
    const numbers = [1, 2, 3];
    expect(chunk(numbers, 5)).toEqual([[1, 2, 3]]);
  });

  it('devuelve un array vacío si el array original está vacío', () => {
    expect(chunk([], 2)).toEqual([]);
  });
});
