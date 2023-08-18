import {
  Body,
  Controller,
  Post,
  Get,
  HttpCode,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiBody,
} from '@nestjs/swagger';
import { TopicService } from './topic.service';
import { API_DOC } from './topic.constants';
import { ITopic } from './topic.interface';
import { Topic } from './topic.dto';

@ApiTags('Topics')
@Controller('topics')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @ApiOperation({ ...API_DOC.operation.getAll })
  @ApiOkResponse({ ...API_DOC.responseOk.subscribe })
  @Get()
  @HttpCode(200)
  getAll(): Promise<string[]> {
    return this.topicService.getAll();
  }

  @ApiOperation({ ...API_DOC.operation.subscribe })
  @ApiBody({ type: Topic })
  @ApiOkResponse({ ...API_DOC.responseOk.subscribe, type: Topic })
  @Post('subscribe')
  @HttpCode(200)
  subscribe(@Body() dto: ITopic): Promise<boolean> {
    return this.topicService.subscribe(dto);
  }

  @ApiOperation({ ...API_DOC.operation.unsubscribe })
  @ApiBody({ type: Topic })
  @ApiOkResponse({ ...API_DOC.responseOk.unsubscribe, type: Topic })
  @Post('unsubscribe')
  @HttpCode(200)
  unsubscribe(@Body() dto: ITopic): Promise<boolean> {
    return this.topicService.unsubscribe(dto);
  }
}
