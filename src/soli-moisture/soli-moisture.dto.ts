import { ApiProperty } from '@nestjs/swagger';

import { IsDateString, IsNumber, IsString } from 'class-validator';

import { API_DOC } from './soli-moisture.constants';
import { ISoilMoisture } from './soli-moisture.interface';

export class SoilMoisture implements ISoilMoisture {
  @IsString()
  @ApiProperty(API_DOC.property.soilMoistureDto.id)
  id: string;

  @IsNumber()
  @ApiProperty(API_DOC.property.soilMoistureDto.soilMoisture)
  soilMoisture: number;

  @IsDateString()
  @ApiProperty(API_DOC.property.soilMoistureDto.timestamp)
  timestamp: Date;
}
