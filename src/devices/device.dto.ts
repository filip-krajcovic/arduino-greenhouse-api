import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IDevice } from './device.interface';
import { API_DOC } from './device.constants';

export class Device implements IDevice {
  @IsString()
  @ApiProperty(API_DOC.property.deviceDto.id)
  id: string;

  @IsString()
  @ApiProperty(API_DOC.property.deviceDto.uuid)
  uuid: string;

  @IsString()
  @ApiProperty(API_DOC.property.deviceDto.name)
  name: string;

  @IsString()
  @ApiProperty(API_DOC.property.deviceDto.description)
  description: string;

  @IsString()
  @ApiProperty(API_DOC.property.deviceDto.type)
  type: string;
}
