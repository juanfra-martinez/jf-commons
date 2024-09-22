import { StorageHelper } from '../storage';

describe('StorageHelper', () => {
  let storageHelper: StorageHelper;
  let mockStorage: Storage;

  beforeEach(() => {
    mockStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn()
    } as any;
    storageHelper = new StorageHelper(mockStorage);
  });

  it('guarda un objeto en el storage', () => {
    const user = { name: 'Alice', age: 30 };
    storageHelper.setItem('user', user);
    expect(mockStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(user));
  });

  it('recupera un objeto del storage', () => {
    const user = { name: 'Alice', age: 30 };
    (mockStorage.getItem as jest.Mock).mockReturnValue(JSON.stringify(user));
    const result = storageHelper.getItem('user');
    expect(result).toEqual(user);
  });

  it('devuelve null si no existe el item en el storage', () => {
    (mockStorage.getItem as jest.Mock).mockReturnValue(null);
    const result = storageHelper.getItem('user');
    expect(result).toBeNull();
  });

  it('elimina un objeto del storage', () => {
    const user = { name: 'Alice', age: 30 };
    storageHelper.setItem('user', user);
    expect(mockStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(user));
    storageHelper.removeItem('user');
    const result = storageHelper.getItem('user');
    expect(result).toBeNull();
  });

  it('limpia el storage', () => {
    const user = { name: 'Alice', age: 30 };
    storageHelper.setItem('user', user);
    expect(mockStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(user));
    storageHelper.clear();
    const result = storageHelper.getItem('user');
    expect(result).toBeNull();
  });
});
