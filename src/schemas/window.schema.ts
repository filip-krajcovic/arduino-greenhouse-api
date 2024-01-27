import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { IWindow } from '../window/window.interface';

@Schema()
export class Window implements IWindow {
  @Prop()
  id: string;

  @Prop({ select: false })
  __v: number;

  @Prop()
  state: boolean;

  @Prop()
  timestamp: Date;
}

export const WindowSchema = SchemaFactory.createForClass(Window);
