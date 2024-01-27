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

import { API_DOC } from './schedule.constants';
import { Schedule } from './schedule.dto';
import { ISchedule } from './schedule.interface';
import { ScheduleService } from './schedule.service';

@ApiTags('Schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @ApiOperation(API_DOC.operation.find)
  @ApiOkResponse({ ...API_DOC.responseOk.find, type: Schedule })
  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @Get()
  find(
    @Query('skip') skip?: number | null,
    @Query('limit') limit?: number | null,
  ): Promise<Array<ISchedule>> {
    return this.scheduleService.find(
      null,
      null,
      { timestamp: -1 },
      skip,
      limit,
    );
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.findLast)
  @ApiOkResponse({ ...API_DOC.responseOk.findLast, type: Schedule })
  @Get('last')
  findLast(): Promise<ISchedule> {
    return this.scheduleService.findOne(
      null,
      { state: 1, timestamp: 1, _id: 0 },
      { timestamp: -1 },
    );
  }

  @ApiOperation({ ...API_DOC.operation.create })
  @ApiBody({ type: Schedule })
  @ApiCreatedResponse({ ...API_DOC.responseOk.create, type: Schedule })
  @HttpCode(201)
  @Post()
  create(@Body() dto: ISchedule): Promise<ISchedule> {
    return this.scheduleService.create(dto);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.delete)
  @ApiOkResponse(API_DOC.responseOk.delete)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<ISchedule> {
    return this.scheduleService.delete(id);
  }
}
