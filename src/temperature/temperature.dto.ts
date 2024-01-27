import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';
import { API_DOC } from './temperature.constants';
import { ITemperature } from './temperature.interface';

export class Temperature implements ITemperature {
  @IsString()
  @ApiProperty(API_DOC.property.temperatureDto.id)
  id: string;

  @IsNumber()
  @ApiProperty(API_DOC.property.temperatureDto.temperature)
  temperature: number;

  @IsDateString()
  @ApiProperty(API_DOC.property.temperatureDto.timestamp)
  timestamp: Date;
}
