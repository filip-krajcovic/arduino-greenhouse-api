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

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.findById)
  @ApiOkResponse({ ...API_DOC.responseOk.findById, type: SoilMoisture })
  @Get(':id')
  findById(@Param('id') id: string): Promise<ISoilMoisture> {
    return this.soilMoistureService.findById(id);
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
