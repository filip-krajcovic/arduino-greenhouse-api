import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HumidityController } from './humidity.controller';
import { HumidityService } from './humidity.service';
import { Humidity, HumiditySchema } from '../schemas/humidity.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Humidity.name, schema: HumiditySchema }]),
  ],
  controllers: [HumidityController],
  providers: [HumidityService],
  exports: [HumidityService],
})
export class HumidityModule {}
