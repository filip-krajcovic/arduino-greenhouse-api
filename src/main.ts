import { Logger, RequestMethod, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appOptions } from './app.options';
import { useSwagger } from './swagger';
import { useInterceptors } from './app.interceptors';
import { ENV } from './app.constants';

async function bootstrap() {
  const self = 'Main';
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const apiPrefix =
    `${configService.get(ENV.API_PREFIX)}${configService.get(
      ENV.API_VERSION,
    )}` || '';

  app.setGlobalPrefix(apiPrefix, {
    exclude: [
      { path: '/', method: RequestMethod.GET },
      { path: '/health', method: RequestMethod.GET },
      { path: '/health/live', method: RequestMethod.GET },
      { path: '/health/ready', method: RequestMethod.GET },
    ],
  });

  useSwagger(app);
  useInterceptors(app);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.enableCors();

  await app.listen(appOptions.port).then(() => {
    Logger.log(
      `Nest application ${appOptions.appTitle} version ${appOptions.appVersion} is running on ${appOptions.host}:${appOptions.port}`,
      self,
    );
  });
}
bootstrap();
