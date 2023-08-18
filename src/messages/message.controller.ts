import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiBody,
} from '@nestjs/swagger';
import { MessageService } from './message.service';
import { API_DOC } from './message.constants';
import { IMessage } from './message.interface';
import { Message } from './message.dto';
import { FilterQuery, ProjectionType } from 'mongoose';

@ApiTags('Messages')
@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @ApiOperation(API_DOC.operation.find)
  @ApiOkResponse({ ...API_DOC.responseOk.find, type: Message })
  @Get()
  find(filter: FilterQuery<IMessage>, projection?: ProjectionType<any>): Promise<Array<IMessage>> {
    return this.messageService.find(filter, projection);
  }

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

  @ApiOperation(API_DOC.operation.delete)
  @ApiOkResponse(API_DOC.responseOk.delete)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<IMessage> {
    return this.messageService.delete(id);
  }
}
