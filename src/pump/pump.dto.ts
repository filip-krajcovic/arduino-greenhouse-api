import { ApiProperty } from '@nestjs/swagger';

import { IsBoolean, IsDateString, IsString } from 'class-validator';

import { API_DOC } from './pump.constants';
import { IPump } from './pump.interface';

export class Pump implements IPump {
  @IsString()
  @ApiProperty(API_DOC.property.pumpDto.id)
  id: string;

  @IsBoolean()
  @ApiProperty(API_DOC.property.pumpDto.state)
  state: boolean;

  @IsDateString()
  @ApiProperty(API_DOC.property.pumpDto.timestamp)
  timestamp: Date;
}
