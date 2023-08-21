import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HumidityController } from './humidity.controller';
import { HumidityService } from './humidity.service';
import { HumiditySchema } from 'src/schemas/humidity.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Humidity', schema: HumiditySchema }]),
  ],
  controllers: [HumidityController],
  providers: [HumidityService],
  exports: [HumidityService],
})
export class HumidityModule {}
