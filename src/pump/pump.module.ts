import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PumpController } from './pump.controller';
import { PumpService } from './pump.service';
import { Pump, PumpSchema } from '../schemas/pump.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pump.name, schema: PumpSchema }]),
  ],
  controllers: [PumpController],
  providers: [PumpService],
  exports: [PumpService],
})
export class PumpModule {}
