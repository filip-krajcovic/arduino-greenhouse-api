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
import { HumidityService } from './humidity.service';
import { API_DOC } from './humidity.constants';
import { IHumidity } from './humidity.interface';
import { Humidity } from './humidity.dto';
import { FilterQuery, ProjectionType } from 'mongoose';

@ApiTags('Humidity')
@Controller('humidity')
export class HumidityController {
  constructor(private readonly humidityService: HumidityService) {}

  @ApiOperation(API_DOC.operation.find)
  @ApiOkResponse({ ...API_DOC.responseOk.find, type: Humidity })
  @Get()
  find(
    filter: FilterQuery<IHumidity>,
    projection?: ProjectionType<any>,
  ): Promise<Array<IHumidity>> {
    return this.humidityService.find(filter, projection);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.findById)
  @ApiOkResponse({ ...API_DOC.responseOk.findById, type: Humidity })
  @Get(':id')
  findById(@Param('id') id: string): Promise<IHumidity> {
    return this.humidityService.findById(id);
  }

  @ApiOperation({ ...API_DOC.operation.create })
  @ApiBody({ type: Humidity })
  @ApiCreatedResponse({ ...API_DOC.responseOk.create, type: Humidity })
  @HttpCode(201)
  @Post()
  create(@Body() dto: IHumidity): Promise<IHumidity> {
    return this.humidityService.create(dto);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.delete)
  @ApiOkResponse(API_DOC.responseOk.delete)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<IHumidity> {
    return this.humidityService.delete(id);
  }
}
