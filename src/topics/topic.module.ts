import { Module } from '@nestjs/common';
import { TopicController } from './topic.controller';
import { TopicService } from './topic.service';
import { MqttClientProvider } from '../mqtt/mqtt.client.provider';
import { MqttModule } from '../mqtt/mqtt.module';

@Module({
  imports: [MqttModule],
  controllers: [TopicController],
  providers: [TopicService],
})
export class TopicModule {}
