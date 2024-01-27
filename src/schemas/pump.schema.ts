import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { IPump } from '../pump/pump.interface';

@Schema()
export class Pump implements IPump {
  @Prop()
  id: string;

  @Prop({ select: false })
  __v: number;

  @Prop()
  state: boolean;

  @Prop()
  timestamp: Date;
}

export const PumpSchema = SchemaFactory.createForClass(Pump);
