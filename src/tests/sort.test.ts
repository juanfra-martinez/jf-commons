import { sortBy, sortByDate } from '../iterables';

describe('sortByDate', () => {
  const events = [
    { id: 1, name: "Event A", startDate: new Date('2023-09-15') },
    { id: 2, name: "Event B", startDate: new Date('2024-01-20') },
    { id: 3, name: "Event C", startDate: new Date('2022-12-05') }
  ];

  it('ordena un array por una propiedad de tipo Date de manera ascendente', () => {
    const sorted = sortByDate(events, 'startDate');
    expect(sorted).toEqual([
      { id: 3, name: "Event C", startDate: new Date('2022-12-05') },
      { id: 1, name: "Event A", startDate: new Date('2023-09-15') },
      { id: 2, name: "Event B", startDate: new Date('2024-01-20') }
    ]);
  });

  it('ordena un array por una propiedad de tipo Date de manera descendente', () => {
    const sorted = sortByDate(events, 'startDate', false);
    expect(sorted).toEqual([
      { id: 2, name: "Event B", startDate: new Date('2024-01-20') },
      { id: 1, name: "Event A", startDate: new Date('2023-09-15') },
      { id: 3, name: "Event C", startDate: new Date('2022-12-05') }
    ]);
  });
});

describe('sortBy', () => {
  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];

  it('ordena un array de objetos por una propiedad numérica en orden ascendente', () => {
    const sorted = sortBy(people, 'age', 'asc');
    expect(sorted).toEqual([
      { name: 'Bob', age: 25 },
      { name: 'Alice', age: 30 },
      { name: 'Charlie', age: 35 }
    ]);
  });

  it('ordena un array de objetos por una propiedad numérica en orden descendente', () => {
    const sorted = sortBy(people, 'age', 'desc');
    expect(sorted).toEqual([
      { name: 'Charlie', age: 35 },
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 }
    ]);
  });

  it('ordena un array de objetos por una propiedad de texto en orden ascendente', () => {
    const sorted = sortBy(people, 'name', 'asc');
    expect(sorted).toEqual([
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 }
    ]);
  });

  it('ordena un array de objetos por una propiedad de texto en orden descendente', () => {
    const sorted = sortBy(people, 'name', 'desc');
    expect(sorted).toEqual([
      { name: 'Charlie', age: 35 },
      { name: 'Bob', age: 25 },
      { name: 'Alice', age: 30 }
    ]);
  });

  it('devuelve el array sin cambios si todos los valores de la propiedad son iguales', () => {
    const sameAges = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 30 }
    ];
    const sorted = sortBy(sameAges, 'age', 'asc');
    expect(sorted).toEqual(sameAges);
  });
});
