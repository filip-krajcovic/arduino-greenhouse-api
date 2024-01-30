import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { MqttClient } from 'mqtt';

import { ENV } from './app.constants';

import { IHumidity } from './humidity/humidity.interface';
import { HumidityService } from './humidity/humidity.service';
import { ILight } from './light/light.interface';
import { LightService } from './light/light.service';
import { IMessage } from './messages/message.interface';
import { MessageService } from './messages/message.service';
import { MQTT_CLIENT } from './mqtt/mqtt.constants';
import { Events, Topics } from './mqtt/mqtt.enums';
import { IPump } from './pump/pump.interface';
import { PumpService } from './pump/pump.service';
import { ISchedule } from './schedule/schedule.interface';
import { ScheduleService } from './schedule/schedule.service';
import { ISoilMoisture } from './soli-moisture/soli-moisture.interface';
import { SoilMoistureService } from './soli-moisture/soli-moisture.service';
import { ITemperature } from './temperature/temperature.interface';
import { TemperatureService } from './temperature/temperature.service';
import { TopicService } from './topics/topic.service';
import { IWindow } from './window/window.interface';
import { WindowService } from './window/window.service';

@Injectable()
export class AppService {
  private lastTopic: string;
  private lastMessage: string;

  constructor(
    @Inject(MQTT_CLIENT)
    private readonly mqttClient: MqttClient,
    private readonly configService: ConfigService,
    private readonly topicService: TopicService,
    private readonly messageService: MessageService,
    private readonly humidityService: HumidityService,
    private readonly temperatureService: TemperatureService,
    private readonly soilMoistureService: SoilMoistureService,
    private readonly pumpService: PumpService,
    private readonly windowService: WindowService,
    private readonly lightService: LightService,
    private readonly scheduleService: ScheduleService,
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

  processMessage(topic: string, buffer: Buffer) {
    const message = buffer.toString();

    if (topic === this.lastTopic && message === this.lastMessage) {
      return;
    }

    Logger.log(`Topic ${topic}. Received message ${message}`, MqttClient.name);

    this.lastTopic = topic;
    this.lastMessage = message;

    const dto = JSON.parse(message);

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
      case Topics.pump: {
        const value: IWindow = { state: dto };
        this.savePump(value);
        break;
      }
      case Topics.window: {
        const value: IWindow = { state: dto };
        this.saveWindow(value);
        break;
      }
      case Topics.light: {
        const value: ILight = { state: dto };
        this.saveLight(value);
        break;
      }
      case Topics.timer: {
        const value: ISchedule = {
          hourOn: dto.hourOn,
          minuteOn: dto.minuteOn,
          hourOff: dto.hourOff,
          minuteOff: dto.minuteOff,
        };
        this.saveSchedule(value);
        break;
      }
      case Topics.message: {
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

  savePump(dto: IPump): Promise<IPump> {
    return this.pumpService.create(dto);
  }

  saveWindow(dto: IWindow): Promise<IWindow> {
    return this.windowService.create(dto);
  }

  saveLight(dto: ILight): Promise<ILight> {
    return this.lightService.create(dto);
  }

  async saveSchedule(dto: ISchedule): Promise<ISchedule> {
    const schedule = await this.scheduleService.find(
      null,
      null,
      { timestamp: -1 },
      0,
      1,
    );
    if (schedule?.length > 0 && schedule[0]?.id) {
      const updatedValue = {
        id: schedule[0]?.id,
        ...dto,
      };
      return this.scheduleService.patch(updatedValue);
    } else {
      return this.scheduleService.create(dto);
    }
  }

  getHello(): string {
    return `${this.configService.get(
      ENV.APP_TITLE,
    )} is running... <a href="/docs">Swagger API</a>`;
  }
}
