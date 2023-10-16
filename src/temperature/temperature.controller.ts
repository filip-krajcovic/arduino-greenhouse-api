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
import { TemperatureService } from './temperature.service';
import { API_DOC } from './temperature.constants';
import { ITemperature } from './temperature.interface';
import { Temperature } from './temperature.dto';
import { FilterQuery, ProjectionType } from 'mongoose';

@ApiTags('Temperature')
@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @ApiOperation(API_DOC.operation.find)
  @ApiOkResponse({ ...API_DOC.responseOk.find, type: Temperature })
  @Get()
  find(
    filter: FilterQuery<ITemperature>,
    projection?: ProjectionType<any>,
  ): Promise<Array<ITemperature>> {
    return this.temperatureService.find(filter, projection);
  }

  @ApiOperation(API_DOC.operation.findLast)
  @ApiOkResponse({ ...API_DOC.responseOk.findLast, type: Temperature })
  @Get('last')
  findLast(
  ): Promise<ITemperature> {
    return this.temperatureService.findOne(null, { temperature: 1, timestamp: 1, _id: 0 }, { timestamp: -1 });
  }

  @ApiOperation({ ...API_DOC.operation.create })
  @ApiBody({ type: Temperature })
  @ApiCreatedResponse({ ...API_DOC.responseOk.create, type: Temperature })
  @HttpCode(201)
  @Post()
  create(@Body() dto: ITemperature): Promise<ITemperature> {
    return this.temperatureService.create(dto);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.delete)
  @ApiOkResponse(API_DOC.responseOk.delete)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<ITemperature> {
    return this.temperatureService.delete(id);
  }
}
