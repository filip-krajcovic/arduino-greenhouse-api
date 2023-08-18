import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { ENV } from '../app.constants';

export function useSwagger(app: INestApplication) {
  const configService = app.get(ConfigService);

  const scheme = configService.get(ENV.APP_SCHEME);
  const host = configService.get(ENV.APP_HOST);
  const port = configService.get(ENV.APP_PORT);

  const appVersion = configService.get(ENV.APP_VERSION);
  const appTitle = configService.get(ENV.APP_TITLE);
  const appDescription = configService.get(ENV.APP_DESCRIPTION);
  const appTag = configService.get(ENV.APP_TAGS);

  const builder = new DocumentBuilder()
    .setVersion(appVersion)
    .setTitle(appTitle)
    .setDescription(appDescription)
    .addTag(appTag)
    .addServer(`${scheme}://${host}:${port}`);

  const remoteApiUrl = configService.get(ENV.REMOTE_API_URL) || '';
  if (remoteApiUrl) {
    builder.addServer(remoteApiUrl);
  }

  const config = builder.build();

  const configUi = {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: (a: any, b: any) => {
        const order = {
          get: '0',
          post: '1',
          patch: '2',
          put: '3',
          delete: '4',
        };
        return order[a._root.entries[1][1]].localeCompare(
          order[b._root.entries[1][1]],
        );
      },
    },
  } as SwaggerCustomOptions;

  const document = SwaggerModule.createDocument(app, config);
  const docsPath = configService.get(ENV.API_DOCS_PATH) || '';
  SwaggerModule.setup(docsPath, app, document, configUi);
}
