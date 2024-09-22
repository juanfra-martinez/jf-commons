import { difference } from '../iterables';

describe('difference', () => {
  it('encuentra los elementos que están en el primer array pero no en el segundo', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 5, 6];
    expect(difference(array1, array2)).toEqual([1, 2]);
  });

  it('devuelve el primer array completo si no hay elementos comunes', () => {
    const array1 = [1, 2];
    const array2 = [3, 4];
    expect(difference(array1, array2)).toEqual([1, 2]);
  });

  it('devuelve un array vacío si el primer array está vacío', () => {
    expect(difference([], [1, 2, 3])).toEqual([]);
  });
});
