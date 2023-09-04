import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IDevice } from '../devices/device.interface';

export type DeviceDocument = Device & Document;

@Schema({ strict: false })
export class Device implements IDevice {
  @Prop()
  id: string;

  @Prop({ select: false })
  __v: number;

  @Prop()
  uuid: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  type: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
