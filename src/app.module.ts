import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModuleFactory } from './data/mongoose.module.factory';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './messages/message.module';
import { MqttModule } from './mqtt/mqtt.module';
import { HealthModule } from './health/health.module';
import { TopicModule } from './topics/topic.module';
import { HumidityModule } from './humidity/humidity.module';
import { TemperatureModule } from './temperature/temperature.module';
import { SoilMoistureModule } from './soli-moisture/soli-moisture.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
