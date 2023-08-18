import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, ProjectionType } from 'mongoose';
import { SELECT_MESSAGES_PROJECTION } from './message.constants';
import { IMessage } from './message.interface';
import { IMessageService } from './message.service.interface';
import { Message } from '../schemas/message.schema';
import { MongoGenericRepository } from '../data/mongo-generic-repository';

@Injectable()
export class MessageService
  implements IMessageService, OnApplicationBootstrap
{
  private repository: MongoGenericRepository<IMessage>;

  constructor(
    @InjectModel(Message.name)
    private readonly model: Model<IMessage>,
  ) {}

  onApplicationBootstrap() {
    this.repository = new MongoGenericRepository<IMessage>(
      this.model,
      SELECT_MESSAGES_PROJECTION,
    );
  }

  async create(dto: IMessage): Promise<IMessage> {
    return this.repository.create(dto);
  }

  find(
    filter: FilterQuery<IMessage>,
    projection?: ProjectionType<any>,
  ): Promise<Array<IMessage>> {
    return this.repository.find(filter, projection);
  }

  findById(id: string): Promise<IMessage> {
    return this.repository.findById(id, SELECT_MESSAGES_PROJECTION);
  }

  delete(id: string): Promise<IMessage> {
    return this.repository.delete(id);
  }
}
