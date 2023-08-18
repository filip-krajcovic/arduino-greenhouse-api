import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ITopic } from './topic.interface';
import { API_DOC } from './topic.constants';

export class Topic implements ITopic {
  @IsString()
  @ApiProperty(API_DOC.property.topicDto.name)
  name: string;
}
