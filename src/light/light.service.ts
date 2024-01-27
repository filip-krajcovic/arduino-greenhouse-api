import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { FilterQuery, Model, ProjectionType, SortOrder } from 'mongoose';

import { MongoGenericRepository } from '../data/mongo-generic-repository';
import { Light } from '../schemas/light.schema';

import { SELECT_LIGHT_PROJECTION } from './light.constants';
import { ILight } from './light.interface';
import { ILightService } from './light.service.interface';

@Injectable()
export class LightService implements ILightService, OnApplicationBootstrap {
  private repository: MongoGenericRepository<ILight>;

  constructor(
    @InjectModel(Light.name)
    private readonly model: Model<ILight>,
  ) {}

  onApplicationBootstrap() {
    this.repository = new MongoGenericRepository<ILight>(
      this.model,
      SELECT_LIGHT_PROJECTION,
    );
  }

  async create(dto: ILight): Promise<ILight> {
    const timestamp = new Date();
    return this.repository.create({ timestamp, ...dto });
  }

  find(
    filter: FilterQuery<ILight>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<ILight>> {
    return this.repository.find(filter, projection, sort, skip, limit);
  }

  findOne(
    filter: FilterQuery<ILight>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
  ): Promise<ILight> {
    return this.repository.findOne(filter, projection, sort);
  }

  findById(id: string): Promise<ILight> {
    return this.repository.findById(id);
  }

  delete(id: string): Promise<ILight> {
    return this.repository.delete(id);
  }
}
