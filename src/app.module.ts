import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { MqttClientProvider } from './mqtt/mqtt.client.provider';
import { MongooseModuleFactory } from './data/mongoose.module.factory';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './messages/message.module';
import { MqttModule } from './mqtt/mqtt.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: MongooseModuleFactory,
      inject: [ConfigService],
    }),
    HealthModule,
    MessageModule,
    MqttModule,
  ],
  controllers: [AppController],
  providers: [
    //MqttClientProvider,
    AppService
  ],
})
export class AppModule { }
