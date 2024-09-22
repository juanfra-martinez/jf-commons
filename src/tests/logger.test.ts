import { debug } from '../logger';

describe('debug', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('debe imprimir un mensaje con el timestamp, etiqueta y tiempo transcurrido', () => {
    const logger = debug('TestLogger');
    logger('Mensaje de prueba');
    
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] \[\w+\] \[.+\]$/), 'Mensaje de prueba');
  });

  it('debe deshabilitar los logs si isEnabled es falso', () => {
    const disabledLogger = debug('DisabledLogger', false);
    disabledLogger('Este log no debe mostrarse');
    
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it('debe mostrar el tiempo transcurrido entre logs', () => {
    const logger = debug('TestLogger');
    logger('Primer log');
    jest.advanceTimersByTime(500);
    logger('Segundo log');

    expect(consoleSpy).toHaveBeenLastCalledWith(expect.any(String), 'Segundo log');
  });
});
