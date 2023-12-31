import { Inject, Injectable, Logger } from '@nestjs/common';
import { MQTT_CLIENT } from './mqtt/mqtt.constants';
import { MqttClient } from 'mqtt';
import { Events, Topics } from './mqtt/mqtt.enums';
import { MessageService } from './messages/message.service';
import { IMessage } from './messages/message.interface';
import { ConfigService } from '@nestjs/config';
import { ENV } from './app.constants';
import { HumidityService } from './humidity/humidity.service';
import { TemperatureService } from './temperature/temperature.service';
import { SoilMoistureService } from './soli-moisture/soli-moisture.service';
import { IHumidity } from './humidity/humidity.interface';
import { ITemperature } from './temperature/temperature.interface';
import { ISoilMoisture } from './soli-moisture/soli-moisture.interface';
import { TopicService } from './topics/topic.service';

@Injectable()
export class AppService {
  constructor(
    @Inject(MQTT_CLIENT)
    private readonly mqttClient: MqttClient,
    private readonly configService: ConfigService,
    private readonly topicService: TopicService,
    private readonly messageService: MessageService,
    private readonly humidityService: HumidityService,
    private readonly temperatureService: TemperatureService,
    private readonly soilMoistureService: SoilMoistureService,
  ) {
    this.mqttClient.on(Events.connect, () =>
      Logger.log(
        `AppService created. Mqtt connected ${this.mqttClient.connected}`,
      ),
    );

    this.mqttClient.on(Events.message, (topic: string, message: Buffer) => {
      this.processMessage(topic, message);
    });

    const topics = configService.get(ENV.TOPICS);
    if (topics && typeof topics === 'string') {
      const topicNames: string[] =
        topics.indexOf(',') !== -1 ? topics.split(',') : [topics];
      topicNames.forEach(topic => this.topicService.subscribe(topic));
    }
  }

  processMessage(topic: string, message: Buffer) {
    Logger.log(
      `Topic ${topic}. Received message ${message.toString()}`,
      MqttClient.name,
    );

    const dto = JSON.parse(message.toString());

    switch (topic) {
      case Topics.humidity: {
        const humidity = dto;
        const value: IHumidity = { humidity };
        this.saveHumidity(value);
        this.saveMessage(value);
        break;
      }
      case Topics.temperature: {
        const temperature = dto;
        const value: ITemperature = { temperature };
        this.saveTemperature(value);
        this.saveMessage(value);
        break;
      }
      case Topics.soilMoisture: {
        const soilMoisture = dto;
        const value: ISoilMoisture = { soilMoisture };
        this.saveSoilMoisture(value);
        this.saveMessage(value);
        break;
      }
      case Topics.message: {
        this.saveMessage(dto);
        break;
      }
      default: {
        this.saveMessage(dto);
        break;
      }
    }
  }

  saveMessage(dto: IMessage): Promise<IMessage> {
    return this.messageService.create(dto);
  }

  saveHumidity(dto: IHumidity): Promise<IHumidity> {
    return this.humidityService.create(dto);
  }

  saveTemperature(dto: ITemperature): Promise<ITemperature> {
    return this.temperatureService.create(dto);
  }

  saveSoilMoisture(dto: ISoilMoisture): Promise<ISoilMoisture> {
    return this.soilMoistureService.create(dto);
  }

  getHello(): string {
    return `${this.configService.get(
      ENV.APP_TITLE,
    )} is running... <a href="/docs">Swagger API</a>`;
  }
}
