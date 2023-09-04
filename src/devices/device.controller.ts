import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiBody,
  ApiExcludeEndpoint,
} from '@nestjs/swagger';
import { DeviceService } from './device.service';
import { API_DOC } from './device.constants';
import { IDevice } from './device.interface';
import { Device } from './device.dto';
import { FilterQuery, ProjectionType } from 'mongoose';

@ApiTags('Devices')
@Controller('devices')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @ApiOperation(API_DOC.operation.find)
  @ApiOkResponse({ ...API_DOC.responseOk.find, type: Device })
  @Get()
  find(
    filter: FilterQuery<IDevice>,
    projection?: ProjectionType<any>,
  ): Promise<Array<IDevice>> {
    return this.deviceService.find(filter, projection);
  }

  @ApiOperation(API_DOC.operation.findById)
  @ApiOkResponse({ ...API_DOC.responseOk.findById, type: Device })
  @Get(':id')
  findById(@Param('id') id: string): Promise<IDevice> {
    return this.deviceService.findById(id);
  }

  @ApiOperation({ ...API_DOC.operation.create })
  @ApiBody({ type: Device })
  @ApiCreatedResponse({ ...API_DOC.responseOk.create, type: Device })
  @HttpCode(201)
  @Post()
  create(@Body() dto: IDevice): Promise<IDevice> {
    return this.deviceService.create(dto);
  }

  @ApiOperation(API_DOC.operation.delete)
  @ApiOkResponse(API_DOC.responseOk.delete)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<IDevice> {
    return this.deviceService.delete(id);
  }
}
