import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LightController } from './light.controller';
import { LightService } from './light.service';
import { Light, LightSchema } from '../schemas/light.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Light.name, schema: LightSchema }]),
  ],
  controllers: [LightController],
  providers: [LightService],
  exports: [LightService],
})
export class LightModule {}
