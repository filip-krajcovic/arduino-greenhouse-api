import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, ProjectionType, SortOrder } from 'mongoose';
import { SELECT_HUMIDITY_PROJECTION } from './humidity.constants';
import { IHumidity } from './humidity.interface';
import { IHumidityService } from './humidity.service.interface';
import { MongoGenericRepository } from '../data/mongo-generic-repository';
import { Humidity } from '../schemas/humidity.schema';

@Injectable()
export class HumidityService
  implements IHumidityService, OnApplicationBootstrap
{
  private repository: MongoGenericRepository<IHumidity>;

  constructor(
    @InjectModel(Humidity.name)
    private readonly model: Model<IHumidity>,
  ) {}

  onApplicationBootstrap() {
    this.repository = new MongoGenericRepository<IHumidity>(
      this.model,
      SELECT_HUMIDITY_PROJECTION,
    );
  }

  async create(dto: IHumidity): Promise<IHumidity> {
    const timestamp = new Date();
    return this.repository.create({ timestamp, ...dto });
  }

  find(
    filter: FilterQuery<IHumidity>,
    projection?: ProjectionType<any>,
    sort?: string | { [key: string]: SortOrder | { $meta: any } } | [string, SortOrder][] | undefined | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<IHumidity>> {
    return this.repository.find(filter, projection, sort, skip, limit);
  }

  findOne(
    filter: FilterQuery<IHumidity>,
    projection?: ProjectionType<any>,
    sort?: string | { [key: string]: SortOrder | { $meta: any } } | [string, SortOrder][] | undefined | null,
  ): Promise<IHumidity> {
    return this.repository.findOne(filter, projection, sort);
  }

  findById(id: string): Promise<IHumidity> {
    return this.repository.findById(id);
  }

  delete(id: string): Promise<IHumidity> {
    return this.repository.delete(id);
  }
}
