import { unique } from '../iterables';

describe('unique', () => {
  it('elimina elementos duplicados en un array de números', () => {
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    expect(unique(numbers)).toEqual([1, 2, 3, 4, 5]);
  });

  it('elimina duplicados en un array de strings', () => {
    const strings = ['a', 'b', 'a', 'c', 'b'];
    expect(unique(strings)).toEqual(['a', 'b', 'c']);
  });

  it('devuelve un array vacío si el array original está vacío', () => {
    expect(unique([])).toEqual([]);
  });
});