type Key = string | number | symbol;

/**
 * Agrupa un array de objetos por una o varias propiedades.
 * @param items Array de objetos a agrupar.
 * @param keys Propiedades por las cuales se debe agrupar.
 * @returns Objeto con los grupos.
 */
export function groupBy<T extends Record<Key, any>>(items: T[], keys: (keyof T)[]): Record<string, T[]> {
  return items.reduce((acc, item) => {
    // Crear una clave única para cada combinación de propiedades
    const groupKey = keys.map(key => item[key]).join('|');

    // Si la clave no existe, la inicializamos
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    // Añadimos el objeto al grupo correspondiente
    acc[groupKey].push(item);

    return acc;
  }, {} as Record<string, T[]>);
}

/**
 * Ordena un array de objetos por una propiedad específica.
 * @param items Array de objetos a ordenar.
 * @param key Propiedad del objeto por la cual se ordenará.
 * @param order Orden ascendente ('asc') o descendente ('desc'). Por defecto es 'asc'.
 * @returns El array ordenado.
 */
export function sortBy<T>(items: T[], key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] {
  return items.sort((a, b) => {
    if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

/**
 * Ordena un array de objetos por una propiedad de tipo Date.
 * @param items Array de objetos a ordenar.
 * @param key Propiedad de tipo Date por la cual se debe ordenar.
 * @param ascending Booleano que indica si la ordenación es ascendente (true) o descendente (false).
 * @returns El array ordenado (in-place).
 */
export function sortByDate<T extends Record<string, any>>(items: T[], key: keyof T, ascending: boolean = true): T[] {
  return items.sort((a, b) => {
    const dateA = new Date(a[key]).getTime();
    const dateB = new Date(b[key]).getTime();
    
    if (ascending) {
      return dateA - dateB; // Orden ascendente
    } else {
      return dateB - dateA; // Orden descendente
    }
  });
}


/**
 * Elimina duplicados de un array
 * @param arr Array de elementos
 */
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/**
 * Aplana un array con subarrays en un solo nivel.
 * @param items Array con posibles subarrays anidados.
 * @returns Un array aplanado.
 */
export function flatten<T>(items: any[]): T[] {
  return items.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}

/**
 * Divide un array en grupos de un tamaño específico.
 * @param items Array a dividir.
 * @param size Tamaño de cada grupo.
 * @returns Un array de arrays, cada uno con el tamaño especificado.
 */
export function chunk<T>(items: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}

/**
 * Devuelve los elementos que están en el primer array pero no en el segundo.
 * @param array1 Primer array.
 * @param array2 Segundo array.
 * @returns Un array con los elementos que están solo en el primer array.
 */
export function difference<T>(array1: T[], array2: T[]): T[] {
  const set2 = new Set(array2);
  return array1.filter(item => !set2.has(item));
}
