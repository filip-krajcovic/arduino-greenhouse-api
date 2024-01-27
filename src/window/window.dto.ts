import { ApiProperty } from '@nestjs/swagger';

import { IsBoolean, IsDateString, IsString } from 'class-validator';

import { API_DOC } from './window.constants';
import { IWindow } from './window.interface';

export class Window implements IWindow {
  @IsString()
  @ApiProperty(API_DOC.property.windowDto.id)
  id: string;

  @IsBoolean()
  @ApiProperty(API_DOC.property.windowDto.state)
  state: boolean;

  @IsDateString()
  @ApiProperty(API_DOC.property.windowDto.timestamp)
  timestamp: Date;
}
