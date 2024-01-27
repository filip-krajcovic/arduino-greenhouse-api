import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModuleFactory } from './data/mongoose.module.factory';
import { DeviceModule } from './devices/device.module';
import { HealthModule } from './health/health.module';
import { HumidityModule } from './humidity/humidity.module';
import { LightModule } from './light/light.module';
import { MessageModule } from './messages/message.module';
import { MqttModule } from './mqtt/mqtt.module';
import { PumpModule } from './pump/pump.module';
import { SoilMoistureModule } from './soli-moisture/soli-moisture.module';
import { TemperatureModule } from './temperature/temperature.module';
import { TopicModule } from './topics/topic.module';
import { WindowModule } from './window/window.module';
import { ScheduleModule } from './schedule/schedule.module';

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
    TopicModule,
    HumidityModule,
    TemperatureModule,
    SoilMoistureModule,
    DeviceModule,
    PumpModule,
    WindowModule,
    LightModule,
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
