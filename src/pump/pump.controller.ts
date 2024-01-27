import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiBody,
  ApiExcludeEndpoint,
  ApiQuery,
} from '@nestjs/swagger';

import { API_DOC } from './pump.constants';
import { Pump } from './pump.dto';
import { IPump } from './pump.interface';
import { PumpService } from './pump.service';

@ApiTags('Pump')
@Controller('pump')
export class PumpController {
  constructor(private readonly pumpService: PumpService) {}

  @ApiOperation(API_DOC.operation.find)
  @ApiOkResponse({ ...API_DOC.responseOk.find, type: Pump })
  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @Get()
  find(
    @Query('skip') skip?: number | null,
    @Query('limit') limit?: number | null,
  ): Promise<Array<IPump>> {
    return this.pumpService.find(null, null, { timestamp: -1 }, skip, limit);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.findLast)
  @ApiOkResponse({ ...API_DOC.responseOk.findLast, type: Pump })
  @Get('last')
  findLast(): Promise<IPump> {
    return this.pumpService.findOne(
      null,
      { state: 1, timestamp: 1, _id: 0 },
      { timestamp: -1 },
    );
  }

  @ApiOperation({ ...API_DOC.operation.create })
  @ApiBody({ type: Pump })
  @ApiCreatedResponse({ ...API_DOC.responseOk.create, type: Pump })
  @HttpCode(201)
  @Post()
  create(@Body() dto: IPump): Promise<IPump> {
    return this.pumpService.create(dto);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.delete)
  @ApiOkResponse(API_DOC.responseOk.delete)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<IPump> {
    return this.pumpService.delete(id);
  }
}
