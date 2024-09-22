/**
 * Crea un logger personalizado para imprimir mensajes en la consola con timestamp, etiqueta y tiempo entre logs.
 * @param label Etiqueta para identificar el origen de los logs.
 * @param isEnabled Si los logs están habilitados o no (por defecto true).
 * @returns Función de logger.
 */
export function debug(label: string, isEnabled: boolean = true) {
  let lastLogTime: number | null = null;

  return function log(...messages: any[]) {
    if (!isEnabled) return;

    const now = new Date();
    const timestamp = now.toISOString();
    const timeSinceLastLog = lastLogTime ? `${(now.getTime() - lastLogTime).toFixed(2)}ms` : 'First log';
    lastLogTime = now.getTime();

    console.log(`[${timestamp}] [${label}] [${timeSinceLastLog}]`, ...messages);
  };
}
