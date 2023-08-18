import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IMessage } from '../messages/message.interface';

export type MessageDocument = Message & Document;

@Schema()
export class Message implements IMessage {
  @Prop()
  id: string;

  @Prop({ select: false })
  __v: number;

  @Prop()
  timestamp: Date;

  @Prop({ type: Object })
  data: any;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
