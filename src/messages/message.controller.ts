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
import { MessageService } from './message.service';
import { API_DOC } from './message.constants';
import { IMessage } from './message.interface';
import { Message } from './message.dto';

@ApiTags('Messages')
@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @ApiOperation(API_DOC.operation.find)
  @ApiOkResponse({ ...API_DOC.responseOk.find, type: Message })
  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @Get()
  find(
    @Query('skip') skip?: number | null,
    @Query('limit') limit?: number | null,
  ): Promise<Array<IMessage>> {
    return this.messageService.find(null, null, { timestamp: -1 }, skip, limit);
  }

  @ApiOperation(API_DOC.operation.count)
  @ApiOkResponse({ ...API_DOC.responseOk.count, type: Number })
  @Get('count')
  count(
  ): Promise<number> {
    return this.messageService.count(null);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.findById)
  @ApiOkResponse({ ...API_DOC.responseOk.findById, type: Message })
  @Get(':id')
  findById(@Param('id') id: string): Promise<IMessage> {
    return this.messageService.findById(id);
  }

  @ApiOperation({ ...API_DOC.operation.create })
  @ApiBody({ type: Message })
  @ApiCreatedResponse({ ...API_DOC.responseOk.create, type: Message })
  @HttpCode(201)
  @Post()
  create(@Body() dto: IMessage): Promise<IMessage> {
    return this.messageService.create(dto);
  }

  @ApiExcludeEndpoint()
  @ApiOperation(API_DOC.operation.delete)
  @ApiOkResponse(API_DOC.responseOk.delete)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<IMessage> {
    return this.messageService.delete(id);
  }
}
