import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, ProjectionType, SortOrder } from 'mongoose';
import { SELECT_MESSAGES_PROJECTION } from './message.constants';
import { IMessage } from './message.interface';
import { IMessageService } from './message.service.interface';
import { Message } from '../schemas/message.schema';
import { MongoGenericRepository } from '../data/mongo-generic-repository';

@Injectable()
export class MessageService implements IMessageService, OnApplicationBootstrap {
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
    const timestamp = new Date();
    return this.repository.create({ timestamp, ...dto });
  }

  find(
    filter: FilterQuery<IMessage>,
    projection?: ProjectionType<any>,
    sort?: string | { [key: string]: SortOrder | { $meta: any } } | [string, SortOrder][] | undefined | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<IMessage>> {
    return this.repository.find(filter, projection, sort, skip, limit);
  }

  count(filter: FilterQuery<IMessage>): Promise<number> {
    return this.repository.count(filter);
  }

  findById(id: string): Promise<IMessage> {
    return this.repository.findById(id);
  }

  delete(id: string): Promise<IMessage> {
    return this.repository.delete(id);
  }
}
