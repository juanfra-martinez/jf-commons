import { executionTime } from '../measure';

describe('executionTime', () => {
  it('mide correctamente el tiempo de ejecución de una función síncrona', async () => {
    const testFn = (x: number) => x * 2;
    const { result, time } = await executionTime(testFn, 5);
    
    expect(result).toBe(10);
    expect(time).toBeGreaterThan(0); // El tiempo de ejecución debe ser mayor a 0 ms
  });

  it('mide correctamente el tiempo de ejecución de una función asíncrona', async () => {
    const asyncFn = (x: number) => new Promise<number>(resolve => setTimeout(() => resolve(x * 2), 500));
    const { result, time } = await executionTime(asyncFn, 5);
    
    expect(result).toBe(10);
    expect(time).toBeGreaterThanOrEqual(500); // Debe tomar al menos 500ms
  });
});
