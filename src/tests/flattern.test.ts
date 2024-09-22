import { flatten } from '../iterables';

describe('flatten', () => {
  it('aplana un array de múltiples niveles', () => {
    const nestedArray = [1, [2, [3, 4], 5], 6];
    expect(flatten(nestedArray)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('no cambia un array que ya es plano', () => {
    const flatArray = [1, 2, 3, 4, 5];
    expect(flatten(flatArray)).toEqual([1, 2, 3, 4, 5]);
  });

  it('devuelve un array vacío si el array original está vacío', () => {
    expect(flatten([])).toEqual([]);
  });
});
