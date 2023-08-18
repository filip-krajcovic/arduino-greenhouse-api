import { Inject, Injectable, Scope } from '@nestjs/common';
import { ITopic } from './topic.interface';
import { ITopicService } from './topic.service.interface';
import { MQTT_CLIENT } from '../mqtt/mqtt.constants';
import { MqttClient } from 'mqtt';

@Injectable()
export class TopicService implements ITopicService {
  constructor(
    @Inject(MQTT_CLIENT)
    private readonly mqttClient: MqttClient,
  ) {}

  private topics: string[] = [];

  getAll(): Promise<string[]> {
    return Promise.resolve(this.topics);
  }

  subscribe(topic: ITopic): Promise<boolean> {
    this.mqttClient.subscribeAsync(topic.name);
    this.topics.push(topic.name);
    return Promise.resolve(true);
  }

  unsubscribe(topic: ITopic): Promise<boolean> {
    this.mqttClient.unsubscribeAsync(topic.name);
    const index = this.topics.indexOf(topic.name);
    if (index != -1) {
      this.topics.splice(index, 1);
    }
    return Promise.resolve(true);
  }
}
