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

import { API_DOC } from './light.constants';
import { Light } from './light.dto';
import { ILight } from './light.interface';
import { LightService } from './light.service';

@ApiTags('Light')
@Controller('light')
export class LightController {
  constructor(private readonly lightService: LightService) {}

  @ApiOperation(API_DOC.operation.find)
  @ApiOkResponse({ ...API_DOC.responseOk.find, type: Light })
  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @Get()
  find(
    @Query('skip') skip?: number | null,
    @Query('limit') limit?: number | null,
  ): Promise<Array<ILight>> {
    return this.lightService.find(null, null, { timestamp: -1 }, skip, limit);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.findLast)
  @ApiOkResponse({ ...API_DOC.responseOk.findLast, type: Light })
  @Get('last')
  findLast(): Promise<ILight> {
    return this.lightService.findOne(
      null,
      { state: 1, timestamp: 1, _id: 0 },
      { timestamp: -1 },
    );
  }

  @ApiOperation({ ...API_DOC.operation.create })
  @ApiBody({ type: Light })
  @ApiCreatedResponse({ ...API_DOC.responseOk.create, type: Light })
  @HttpCode(201)
  @Post()
  create(@Body() dto: ILight): Promise<ILight> {
    return this.lightService.create(dto);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.delete)
  @ApiOkResponse(API_DOC.responseOk.delete)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<ILight> {
    return this.lightService.delete(id);
  }
}
