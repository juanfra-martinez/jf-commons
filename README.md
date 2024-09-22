
# Utilidades comunes

**JF COMMONS** es una librería optimizada en TypeScript. Diseñada para desarrolladores que necesitan optimizar el rendimiento en aplicaciones como Angular u otros entornos de desarrollo.

## Características

- Agrupación de arrays por una o más propiedades.
- Ordenación eficiente de objetos en arrays.
- Ordenación eficiente de objetos en arrays por propiedades de tipo `Date`.
- Operaciones comunes como `chunk` y `flatten` para la extracción y manipulación de datos.
- Comparación entre arrays.
- Extracción de elementos duplicados en un array.
- Medición precisa del tiempo de ejecución de funciones, tanto síncronas como asíncronas.
- `Logger` con timestamps para facilitar el debugging.
- Manejo del localStorage o sessionStorage con soporte para objetos.

## Instalación

Instala la librería usando npm:

```bash
npm install @jfmartinez/jf-commons
```

## Uso

### Agrupar un array de objetos

Agrupa un array de objetos por una o varias propiedades. Ideal para manejar grandes volúmenes de datos.

```typescript
import { groupBy } from '@jfmartinez/jf-commons';

const data = [
  { id: 1, category: 'A', value: 10 },
  { id: 2, category: 'B', value: 20 },
  { id: 3, category: 'A', value: 15 }
];

const groupedData = groupBy(data, 'category');
console.log(groupedData);
// {
//   A: [{ id: 1, category: 'A', value: 10 }, { id: 3, category: 'A', value: 15 }],
//   B: [{ id: 2, category: 'B', value: 20 }]
// }
```

### Ordenar por una propiedad de tipo `Date`

Ordena un array de objetos basándose en una propiedad de tipo `Date`.

```typescript
import { sortByDate } from '@jfmartinez/jf-commons';

const events = [
  { id: 1, eventDate: new Date('2024-01-01') },
  { id: 2, eventDate: new Date('2023-12-31') }
];

const sortedEvents = sortByDate(events, 'eventDate');
console.log(sortedEvents);
// [
//   { id: 2, eventDate: new Date('2023-12-31') },
//   { id: 1, eventDate: new Date('2024-01-01') }
// ]

const nestedArray = [1, [2, [3, 4], 5], 6];
const flatArray = flatten(nestedArray); // [1, 2, 3, 4, 5, 6]

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const diff = difference(array1, array2); // [1, 2]

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = unique(numbers); // [1, 2, 3, 4, 5]
```

### Medir tiempos de ejecución

Mide el tiempo que tarda en ejecutarse una función, ya sea síncrona o asíncrona.

```typescript
import { executionTime } from '@jfmartinez/jf-commons';

const sum = (a: number, b: number) => a + b;

async function example() {
  const { result, time } = await executionTime(sum, 5, 10);
  console.log(`Resultado: ${result}, Tiempo: ${time} ms`);
}

example();
// Resultado: 15, Tiempo: X ms
```

### Logger para debug con timestamp

Usa un logger que añade un timestamp ISO y calcula el tiempo transcurrido entre logs.

```typescript
import { debug } from '@jfmartinez/jf-commons';

const logger = debug('App');
logger('Inicializando módulo...');
// [2024-01-01T00:00:00.000Z] [App] [First log] Inicializando módulo...
logger('Cargando datos...');
// [2024-01-01T00:00:01.000Z] [App] [1000.00ms] Cargando datos...
```

## API

### `groupBy(array: any[], ...properties: string[]): object`
Agrupa un array por una o varias propiedades.

### `sortByDate(array: any[], property: string): any[]`
Ordena un array de objetos por una propiedad de tipo `Date`.

### `function flatten<T>(items: any[]): T[]`
Aplana un array con subarrays en un solo nivel.

### `difference<T>(array1: T[], array2: T[]): T[]`
Devuelve los elementos que están en el primer array pero no en el segundo.

### `unique<T>(items: T[]): T[]`
Elimina elementos duplicados de un array.

### `executionTime<T extends (...args: any[]) => any>(fn: T, ...args: Parameters<T>): Promise<{ result: ReturnType<T>, time: number }>`
Mide el tiempo que tarda una función en ejecutarse.

### `debug(namespace: string): (...args: any[]) => void`
Crea un logger con timestamp y mide el tiempo entre las llamadas.

## Storage

### `setItem(key: string, value: any): void`
Establece un objeto en el storage mediante key/value.

### `getItem<T>(key: string): T | null`
Obtiene un objeto del storage a través de su key.

### `removeItem(key: string): void`
Elimina un objeto del storage mediante su key.

### `clear(): void`
Limpia el storage de objetos.



## Tests

Este proyecto está completamente probado utilizando **Jest**. Para ejecutar los tests:

```bash
npm test
```

## Contribuciones

Las contribuciones son bienvenidas. Si tienes una idea o una mejora, por favor abre un issue o un pull request.

## Licencia

MIT © Juan Fra Martínez
