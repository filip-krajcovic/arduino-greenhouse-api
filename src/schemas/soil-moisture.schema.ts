import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ISoilMoisture } from '../soli-moisture/soli-moisture.interface';

@Schema()
export class SoilMoisture implements ISoilMoisture {
  @Prop()
  id: string;

  @Prop({ select: false })
  __v: number;

  @Prop()
  soilMoisture: number;

  @Prop()
  timestamp: Date;
}

export const SoilMoistureSchema = SchemaFactory.createForClass(SoilMoisture);
