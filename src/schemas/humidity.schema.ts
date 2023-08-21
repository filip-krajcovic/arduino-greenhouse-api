import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IHumidity } from '../humidity/humidity.interface';

export type HumidityDocument = Humidity & Document;

@Schema()
export class Humidity implements IHumidity {
  @Prop()
  id: string;

  @Prop({ select: false })
  __v: number;

  @Prop()
  humidity: Number;

  @Prop()
  timestamp: Date;
}

export const HumiditySchema = SchemaFactory.createForClass(Humidity);
