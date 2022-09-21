export enum StorageEnum {
  TOKEN_KEY = 'TOKEN_KEY',
  APP_CONFIG = 'APP_CONFIG',
}

export type BaseStorage = keyof typeof StorageEnum;
