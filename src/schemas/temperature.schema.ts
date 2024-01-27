import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ITemperature } from '../temperature/temperature.interface';

@Schema()
export class Temperature implements ITemperature {
  @Prop()
  id: string;

  @Prop({ select: false })
  __v: number;

  @Prop()
  temperature: number;

  @Prop()
  timestamp: Date;
}

export const TemperatureSchema = SchemaFactory.createForClass(Temperature);
