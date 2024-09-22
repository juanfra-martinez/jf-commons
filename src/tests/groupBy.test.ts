import { groupBy } from '../iterables';

describe('groupBy', () => {
  const employees = [
    { id: 1, name: "Alice", department: "Engineering", role: "Developer" },
    { id: 2, name: "Bob", department: "Engineering", role: "Manager" },
    { id: 3, name: "Charlie", department: "HR", role: "Manager" },
    { id: 4, name: "David", department: "Engineering", role: "Developer" }
  ];

  it('agrupa objetos por una propiedad', () => {
    const grouped = groupBy(employees, ['department']);
    expect(grouped).toEqual({
      "Engineering": [
        { id: 1, name: "Alice", department: "Engineering", role: "Developer" },
        { id: 2, name: "Bob", department: "Engineering", role: "Manager" },
        { id: 4, name: "David", department: "Engineering", role: "Developer" }
      ],
      "HR": [
        { id: 3, name: "Charlie", department: "HR", role: "Manager" }
      ]
    });
  });

  it('agrupa objetos por múltiples propiedades', () => {
    const grouped = groupBy(employees, ['department', 'role']);
    expect(grouped).toEqual({
      "Engineering|Developer": [
        { id: 1, name: "Alice", department: "Engineering", role: "Developer" },
        { id: 4, name: "David", department: "Engineering", role: "Developer" }
      ],
      "Engineering|Manager": [
        { id: 2, name: "Bob", department: "Engineering", role: "Manager" }
      ],
      "HR|Manager": [
        { id: 3, name: "Charlie", department: "HR", role: "Manager" }
      ]
    });
  });
});

