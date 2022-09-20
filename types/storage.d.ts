declare enum StorageEnum {
  TOKEN_KEY = 'TOKEN_KEY',
}

declare type BaseStorage = keyof typeof StorageEnum;
