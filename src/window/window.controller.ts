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

import { API_DOC } from './window.constants';
import { Window } from './window.dto';
import { IWindow } from './window.interface';
import { WindowService } from './window.service';

@ApiTags('Window')
@Controller('window')
export class WindowController {
  constructor(private readonly windowService: WindowService) {}

  @ApiOperation(API_DOC.operation.find)
  @ApiOkResponse({ ...API_DOC.responseOk.find, type: Window })
  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @Get()
  find(
    @Query('skip') skip?: number | null,
    @Query('limit') limit?: number | null,
  ): Promise<Array<IWindow>> {
    return this.windowService.find(null, null, { timestamp: -1 }, skip, limit);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.findLast)
  @ApiOkResponse({ ...API_DOC.responseOk.findLast, type: Window })
  @Get('last')
  findLast(): Promise<IWindow> {
    return this.windowService.findOne(
      null,
      { state: 1, timestamp: 1, _id: 0 },
      { timestamp: -1 },
    );
  }

  @ApiOperation({ ...API_DOC.operation.create })
  @ApiBody({ type: Window })
  @ApiCreatedResponse({ ...API_DOC.responseOk.create, type: Window })
  @HttpCode(201)
  @Post()
  create(@Body() dto: IWindow): Promise<IWindow> {
    return this.windowService.create(dto);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.delete)
  @ApiOkResponse(API_DOC.responseOk.delete)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<IWindow> {
    return this.windowService.delete(id);
  }
}
