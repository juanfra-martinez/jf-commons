/**
 * Mide el tiempo de ejecución de una función síncrona o asíncrona.
 * @param fn La función cuya ejecución se va a medir.
 * @param args Los argumentos que se pasarán a la función.
 * @returns Un objeto con el resultado de la función y el tiempo en milisegundos.
 */
export async function executionTime<T extends (...args: any[]) => any>(
  fn: T,
  ...args: Parameters<T>
): Promise<{ result: ReturnType<T> | Promise<ReturnType<T>>, time: number }> {
  const start = performance.now();
  const result = await fn(...args);
  const end = performance.now();
  return {
    result,
    time: end - start
  };
}
