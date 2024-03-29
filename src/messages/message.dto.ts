import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString } from 'class-validator';
import { IMessage } from './message.interface';
import { API_DOC } from './message.constants';

export class Message implements IMessage {
  @IsString()
  @ApiProperty(API_DOC.property.messageDto.id)
  id: string;

  @IsDateString()
  @ApiProperty(API_DOC.property.messageDto.timestamp)
  timestamp: Date;
}
