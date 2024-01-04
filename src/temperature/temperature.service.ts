import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { FilterQuery, Model, ProjectionType, SortOrder } from 'mongoose';

import { MongoGenericRepository } from '../data/mongo-generic-repository';
import { Temperature } from '../schemas/temperature.schema';

import { SELECT_TEMPERATURE_PROJECTION } from './temperature.constants';
import { ITemperature } from './temperature.interface';
import { ITemperatureService } from './temperature.service.interface';

@Injectable()
export class TemperatureService
  implements ITemperatureService, OnApplicationBootstrap
{
  private repository: MongoGenericRepository<ITemperature>;

  constructor(
    @InjectModel(Temperature.name)
    private readonly model: Model<ITemperature>,
  ) {}

  onApplicationBootstrap() {
    this.repository = new MongoGenericRepository<ITemperature>(
      this.model,
      SELECT_TEMPERATURE_PROJECTION,
    );
  }

  async create(dto: ITemperature): Promise<ITemperature> {
    const timestamp = new Date();
    return this.repository.create({ timestamp, ...dto });
  }

  find(
    filter: FilterQuery<ITemperature>,
    projection?: ProjectionType<any>,
    sort?: string | { [key: string]: SortOrder | { $meta: any } } | [string, SortOrder][] | undefined | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<ITemperature>> {
    return this.repository.find(filter, projection, sort, skip, limit);
  }

  findOne(
    filter: FilterQuery<ITemperature>,
    projection?: ProjectionType<any>,
    sort?: string | { [key: string]: SortOrder | { $meta: any } } | [string, SortOrder][] | undefined | null,
  ): Promise<ITemperature> {
    return this.repository.findOne(filter, projection, sort);
  }

  findById(id: string): Promise<ITemperature> {
    return this.repository.findById(id);
  }

  delete(id: string): Promise<ITemperature> {
    return this.repository.delete(id);
  }
}
