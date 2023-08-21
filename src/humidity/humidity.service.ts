import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, ProjectionType } from 'mongoose';
import { SELECT_HUMIDITY_PROJECTION } from './humidity.constants';
import { IHumidity } from './humidity.interface';
import { IHumidityService } from './humidity.service.interface';
import { MongoGenericRepository } from '../data/mongo-generic-repository';

@Injectable()
export class HumidityService
  implements IHumidityService, OnApplicationBootstrap
{
  private repository: MongoGenericRepository<IHumidity>;

  constructor(
    @InjectModel('Humidity')
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
  ): Promise<Array<IHumidity>> {
    return this.repository.find(filter, projection);
  }

  findById(id: string): Promise<IHumidity> {
    return this.repository.findById(id);
  }

  delete(id: string): Promise<IHumidity> {
    return this.repository.delete(id);
  }
}
