import { Logger } from '@nestjs/common/services';
import { ConfigService } from '@nestjs/config';
import { ENV } from './mongo.constants';

export const MongooseModuleFactory = (configService: ConfigService) => {
  let uri = configService.get(ENV.MONGO_CONNECTION_STRING);
  let dbName = '';
  if (!uri) {
    const formatPrefix =
      configService.get(ENV.MONGO_FORMAT_PREFIX) || 'mongodb';
    const username = configService.get(ENV.MONGO_USERNAME);
    const password = configService.get(ENV.MONGO_PASSWORD);
    const host = configService.get(ENV.MONGO_HOST);
    dbName = configService.get(ENV.MONGO_DATABASE);
    uri = `${formatPrefix}://${username}:${password}@${host}`;
  }
  Logger.log(`MongoDb Connection String: ${uri}`, MongooseModuleFactory.name);
  return {
    uri,
    dbName,
  };
};
