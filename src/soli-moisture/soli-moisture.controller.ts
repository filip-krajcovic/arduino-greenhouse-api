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
import { SoilMoistureService } from './soli-moisture.service';
import { API_DOC } from './soli-moisture.constants';
import { ISoilMoisture } from './soli-moisture.interface';
import { SoilMoisture } from './soli-moisture.dto';
import { FilterQuery, ProjectionType } from 'mongoose';

@ApiTags('Soil moisture')
@Controller('soilmoisture')
export class SoilMoistureController {
  constructor(private readonly soilMoistureService: SoilMoistureService) {}

  @ApiOperation(API_DOC.operation.find)
  @ApiOkResponse({ ...API_DOC.responseOk.find, type: SoilMoisture })
  @Get()
  find(
    filter: FilterQuery<ISoilMoisture>,
    projection?: ProjectionType<any>,
  ): Promise<Array<ISoilMoisture>> {
    return this.soilMoistureService.find(filter, projection);
  }

  @ApiOperation(API_DOC.operation.findLast)
  @ApiOkResponse({ ...API_DOC.responseOk.findLast, type: SoilMoisture })
  @Get('last')
  findLast(
  ): Promise<ISoilMoisture> {
    return this.soilMoistureService.findOne(null, { soilMoisture: 1, _id: 0 }, { timestamp: -1 });
  }

  @ApiOperation({ ...API_DOC.operation.create })
  @ApiBody({ type: SoilMoisture })
  @ApiCreatedResponse({ ...API_DOC.responseOk.create, type: SoilMoisture })
  @HttpCode(201)
  @Post()
  create(@Body() dto: ISoilMoisture): Promise<ISoilMoisture> {
    return this.soilMoistureService.create(dto);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.delete)
  @ApiOkResponse(API_DOC.responseOk.delete)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<ISoilMoisture> {
    return this.soilMoistureService.delete(id);
  }
}
