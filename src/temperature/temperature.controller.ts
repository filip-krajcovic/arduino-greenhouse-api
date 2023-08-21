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

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.findById)
  @ApiOkResponse({ ...API_DOC.responseOk.findById, type: Temperature })
  @Get(':id')
  findById(@Param('id') id: string): Promise<ITemperature> {
    return this.temperatureService.findById(id);
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
