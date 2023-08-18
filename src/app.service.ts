import { Inject, Injectable, Logger } from '@nestjs/common';
import { MQTT_CLIENT } from './mqtt/mqtt.constants';
import { MqttClient } from 'mqtt';
import { Events } from './mqtt/mqtt.enums';
import { MessageService } from './messages/message.service';
import { IMessage } from './messages/message.interface';
import { ConfigService } from '@nestjs/config';
import { ENV } from './app.constants';

@Injectable()
export class AppService {
  constructor(
    @Inject(MQTT_CLIENT)
    private readonly mqttClient: MqttClient,
    private readonly messageService: MessageService,
    private readonly configService: ConfigService,
  ) {

    this.mqttClient.on(Events.connect, () =>
      Logger.log(
        `AppService created. Mqtt connected ${this.mqttClient.connected}`,
      ),
    );

    this.mqttClient.on(Events.message, (topic, message) => {
      Logger.log(
        `Topic ${topic}. Received message ${message.toString()}`,
        MqttClient.name,
      );

      const messageData = JSON.parse(message.toString());

      this.saveMessage(messageData);
    });

  }

  saveMessage(message: IMessage): Promise<IMessage> {
    return this.messageService.create(message);
  }

  getHello(): string {
    return `${this.configService.get(
      ENV.APP_TITLE,
    )} is running... <a href="/docs">Swagger API</a>`;
  }
}
