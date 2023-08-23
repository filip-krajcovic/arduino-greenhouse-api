import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemperatureController } from './temperature.controller';
import { TemperatureService } from './temperature.service';
import { Temperature, TemperatureSchema } from '../schemas/temperature.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Temperature.name, schema: TemperatureSchema },
    ]),
  ],
  controllers: [TemperatureController],
  providers: [TemperatureService],
  exports: [TemperatureService],
})
export class TemperatureModule {}
