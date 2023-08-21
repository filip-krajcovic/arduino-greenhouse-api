import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, ProjectionType } from 'mongoose';
import { SELECT_TEMPERATURE_PROJECTION } from './temperature.constants';
import { ITemperature } from './temperature.interface';
import { ITemperatureService } from './temperature.service.interface';
import { MongoGenericRepository } from '../data/mongo-generic-repository';

@Injectable()
export class TemperatureService implements ITemperatureService, OnApplicationBootstrap {
  private repository: MongoGenericRepository<ITemperature>;

  constructor(
    @InjectModel('Temperature')
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
  ): Promise<Array<ITemperature>> {
    return this.repository.find(filter, projection);
  }

  findById(id: string): Promise<ITemperature> {
    return this.repository.findById(id);
  }

  delete(id: string): Promise<ITemperature> {
    return this.repository.delete(id);
  }
}
