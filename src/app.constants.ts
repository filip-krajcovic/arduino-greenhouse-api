export const DEFAULT_SCHEME = 'http';
export const DEFAULT_HOST = '127.0.0.1';
export const DEFAULT_PORT = 5000;
export const DEFAULT_APP_VERSION = '0.0.1';
export const DEFAULT_APP_TITLE = 'Receipts API';
export const DEFAULT_APP_DESCRIPTION = 'Receipts API';
export const DEFAULT_TIMEOUT = 5000;
export const API_DOCS_PATH = 'docs';

export enum ENV {
  APP_SCHEME = 'APP_SCHEME',
  APP_HOST = 'APP_HOST',
  APP_PORT = 'APP_PORT',
  APP_TITLE = 'APP_TITLE',
  APP_DESCRIPTION = 'APP_DESCRIPTION',
  APP_TAGS = 'APP_TAGS',
  APP_VERSION = 'APP_VERSION',
  API_VERSION = 'API_VERSION',
  API_PREFIX = 'API_PREFIX',
  API_DOCS_PATH = 'API_DOCS_PATH',
  REMOTE_API_URL = 'REMOTE_API_URL',
  TOPICS = 'TOPICS',
}

export const LOG_SEPARATOR = '------------------------------------------------';

export interface IAppOptions {
  scheme: string;
  host: string;
  port: string | number;
  appTitle: string;
  appDescription?: string;
  appVersion: string;
}
