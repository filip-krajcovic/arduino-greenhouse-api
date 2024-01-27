import { ApiProperty } from '@nestjs/swagger';

import { IsBoolean, IsDateString, IsString } from 'class-validator';

import { API_DOC } from './light.constants';
import { ILight } from './light.interface';

export class Light implements ILight {
  @IsString()
  @ApiProperty(API_DOC.property.lightDto.id)
  id: string;

  @IsBoolean()
  @ApiProperty(API_DOC.property.lightDto.state)
  state: boolean;

  @IsDateString()
  @ApiProperty(API_DOC.property.lightDto.timestamp)
  timestamp: Date;
}
