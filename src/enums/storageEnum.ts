export enum StorageEnum {
  TOKEN_KEY = 'TOKEN_KEY',
  THEME_KEY = 'THEME_KEY',
}

export type BaseStorage = keyof typeof StorageEnum;
