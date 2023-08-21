import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemperatureController } from './temperature.controller';
import { TemperatureService } from './temperature.service';
import { TemperatureSchema } from 'src/schemas/temperature.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Temperature', schema: TemperatureSchema }]),
  ],
  controllers: [TemperatureController],
  providers: [TemperatureService],
  exports: [TemperatureService],
})
export class TemperatureModule {}
