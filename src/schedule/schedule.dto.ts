import { ApiProperty } from '@nestjs/swagger';

import { IsDateString, IsString } from 'class-validator';

import { API_DOC } from './schedule.constants';
import { ISchedule } from './schedule.interface';

export class Schedule implements ISchedule {
  @IsString()
  @ApiProperty(API_DOC.property.scheduleDto.id)
  id: string;

  @IsString()
  @ApiProperty(API_DOC.property.scheduleDto.hourOn)
  hourOn: string;

  @IsString()
  @ApiProperty(API_DOC.property.scheduleDto.minuteOn)
  minuteOn: string;

  @IsString()
  @ApiProperty(API_DOC.property.scheduleDto.hourOff)
  hourOff: string;

  @IsString()
  @ApiProperty(API_DOC.property.scheduleDto.minuteOff)
  minuteOff: string;

  @IsDateString()
  @ApiProperty(API_DOC.property.scheduleDto.timestamp)
  timestamp: Date;
}
