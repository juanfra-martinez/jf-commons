/**
 * Un helper para manejar fácilmente localStorage o sessionStorage con soporte para objetos.
 * @param storage El tipo de almacenamiento (localStorage o sessionStorage).
 */
export class StorageHelper {
  constructor(private storage: Storage) {}

  setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
