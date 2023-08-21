import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';
import { API_DOC } from './humidity.constants';
import { IHumidity } from './humidity.interface';

export class Humidity implements IHumidity {
  @IsString()
  @ApiProperty(API_DOC.property.humidityDto.id)
  id: string;

  @IsNumber()
  @ApiProperty(API_DOC.property.humidityDto.humidity)
  humidity: Number;

  @IsDateString()
  @ApiProperty(API_DOC.property.humidityDto.timestamp)
  timestamp: Date;
}
