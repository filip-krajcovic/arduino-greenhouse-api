import { Provider, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MQTT_CLIENT, ENV } from './mqtt.constants';
import { IClientOptions, MqttClient, connect } from "mqtt";
import { Events } from './mqtt.enums';

const mqttClientProvider = (configService: ConfigService): MqttClient => {
  const self = 'MqttServiceProvider';
  const protocol = configService.get(ENV.MQTT_PROTOCOL);
  const host = configService.get(ENV.MQTT_HOST);
  const port = configService.get(ENV.MQTT_PORT);
  const clientId = configService.get(ENV.MQTT_CLIENT_ID);
  const username = configService.get(ENV.MQTT_USERNAME);
  const password = configService.get(ENV.MQTT_PASSWORD);

  const endpoint = `${protocol}://${host}`;

  Logger.log(`MQTT endpoint ${endpoint}`, self);

  const config: IClientOptions = {
    host,
    port,
    protocol,
    username,
    password,
    clientId,
  };

  const client = connect(config);

  client.on(Events.connect, () => Logger.log('MQTT client connected', self));
  
  client.on(Events.error, (error) => Logger.error(error, self));

  return client;
};

export const MqttClientProvider: Provider<MqttClient> = {
  provide: MQTT_CLIENT,
  useFactory: mqttClientProvider,
  inject: [ConfigService],
};
