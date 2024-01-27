import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ISchedule } from '../schedule/schedule.interface';

@Schema()
export class Schedule implements ISchedule {
  @Prop()
  id: string;

  @Prop({ select: false })
  __v: number;

  @Prop()
  hourOn: string;

  @Prop()
  minuteOn: string;

  @Prop()
  hourOff: string;

  @Prop()
  minuteOff: string;

  @Prop()
  timestamp: Date;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
