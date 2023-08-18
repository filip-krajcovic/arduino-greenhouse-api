import { Module } from '@nestjs/common';
import { MqttClientProvider } from './mqtt.client.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [MqttClientProvider],
  exports: [MqttClientProvider],
})
export class MqttModule {}