import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IMessage } from '../messages/message.interface';

export type MessageDocument = Message & Document;

@Schema({ strict: false })
export class Message implements IMessage {
  @Prop()
  id: string;

  @Prop({ select: false })
  __v: number;

  @Prop()
  timestamp: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
