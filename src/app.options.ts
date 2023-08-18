import {
  DEFAULT_SCHEME,
  DEFAULT_APP_TITLE,
  DEFAULT_APP_DESCRIPTION,
  DEFAULT_APP_VERSION,
  DEFAULT_HOST,
  DEFAULT_PORT,
  IAppOptions,
} from './app.constants';

const scheme = process.env.APP_SCHEME || DEFAULT_SCHEME;
const host = process.env.APP_HOST || DEFAULT_HOST;
const port = process.env.APP_PORT || DEFAULT_PORT;

const appVersion = process.env.APP_VERSION || DEFAULT_APP_VERSION;
const appTitle = process.env.APP_TITLE || DEFAULT_APP_TITLE;
const appDescription = process.env.APP_DESCRIPTION || DEFAULT_APP_DESCRIPTION;

export const appOptions: IAppOptions = {
  scheme,
  host,
  port,
  appVersion,
  appTitle,
  appDescription,
};
