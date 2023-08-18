import { Inject, Injectable, Logger } from '@nestjs/common';
import { MQTT_CLIENT } from './mqtt/mqtt.constants';
import { MqttClient } from 'mqtt';
import { Events } from './mqtt/mqtt.enums';

@Injectable()
export class AppService {

  constructor(
    @Inject(MQTT_CLIENT)
    private readonly mqttClient: MqttClient
  ) {
    //Logger.log(`AppService created ${mqtt.connected}`);

    this.mqttClient.on(Events.connect, () => Logger.log(`AppService created. Mqtt connected ${this.mqttClient.connected}`))

    this.mqttClient.on(Events.message, (topic, message) => {
      Logger.log(`Topic ${topic}. Received message ${message.toString()}`, MqttClient.name);
    });

    //this.mqttClient.subscribe(['temperature']);
  }
  
  getHello(): string {
    return 'Hello World!';
  }
}
