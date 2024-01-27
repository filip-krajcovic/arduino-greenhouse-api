import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ILight } from '../light/light.interface';

@Schema()
export class Light implements ILight {
  @Prop()
  id: string;

  @Prop({ select: false })
  __v: number;

  @Prop()
  state: boolean;

  @Prop()
  timestamp: Date;
}

export const LightSchema = SchemaFactory.createForClass(Light);
