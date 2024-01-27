import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SoilMoistureController } from './soli-moisture.controller';
import { SoilMoistureService } from './soli-moisture.service';
import {
  SoilMoisture,
  SoilMoistureSchema,
} from '../schemas/soil-moisture.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SoilMoisture.name, schema: SoilMoistureSchema },
    ]),
  ],
  controllers: [SoilMoistureController],
  providers: [SoilMoistureService],
  exports: [SoilMoistureService],
})
export class SoilMoistureModule {}
