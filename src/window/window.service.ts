import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { FilterQuery, Model, ProjectionType, SortOrder } from 'mongoose';

import { MongoGenericRepository } from '../data/mongo-generic-repository';
import { Window } from '../schemas/window.schema';

import { SELECT_WINDOW_PROJECTION } from './window.constants';
import { IWindow } from './window.interface';
import { IWindowService } from './window.service.interface';

@Injectable()
export class WindowService implements IWindowService, OnApplicationBootstrap {
  private repository: MongoGenericRepository<IWindow>;

  constructor(
    @InjectModel(Window.name)
    private readonly model: Model<IWindow>,
  ) {}

  onApplicationBootstrap() {
    this.repository = new MongoGenericRepository<IWindow>(
      this.model,
      SELECT_WINDOW_PROJECTION,
    );
  }

  async create(dto: IWindow): Promise<IWindow> {
    const timestamp = new Date();
    return this.repository.create({ timestamp, ...dto });
  }

  find(
    filter: FilterQuery<IWindow>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<IWindow>> {
    return this.repository.find(filter, projection, sort, skip, limit);
  }

  findOne(
    filter: FilterQuery<IWindow>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
  ): Promise<IWindow> {
    return this.repository.findOne(filter, projection, sort);
  }

  findById(id: string): Promise<IWindow> {
    return this.repository.findById(id);
  }

  delete(id: string): Promise<IWindow> {
    return this.repository.delete(id);
  }
}
