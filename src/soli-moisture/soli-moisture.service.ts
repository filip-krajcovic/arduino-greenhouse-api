import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, ProjectionType, SortOrder } from 'mongoose';
import { SELECT_SOIL_MOISTURE_PROJECTION } from './soli-moisture.constants';
import { ISoilMoisture } from './soli-moisture.interface';
import { ISoilMoistureService } from './soli-moisture.service.interface';
import { MongoGenericRepository } from '../data/mongo-generic-repository';
import { SoilMoisture } from '../schemas/soil-moisture.schema';

@Injectable()
export class SoilMoistureService
  implements ISoilMoistureService, OnApplicationBootstrap
{
  private repository: MongoGenericRepository<ISoilMoisture>;

  constructor(
    @InjectModel(SoilMoisture.name)
    private readonly model: Model<ISoilMoisture>,
  ) {}

  onApplicationBootstrap() {
    this.repository = new MongoGenericRepository<ISoilMoisture>(
      this.model,
      SELECT_SOIL_MOISTURE_PROJECTION,
    );
  }

  async create(dto: ISoilMoisture): Promise<ISoilMoisture> {
    const timestamp = new Date();
    return this.repository.create({ timestamp, ...dto });
  }

  find(
    filter: FilterQuery<ISoilMoisture>,
    projection?: ProjectionType<any>,
  ): Promise<Array<ISoilMoisture>> {
    return this.repository.find(filter, projection);
  }

  findOne(
    filter: FilterQuery<ISoilMoisture>,
    projection?: ProjectionType<any>,
    sort?: string | { [key: string]: SortOrder | { $meta: any } } | [string, SortOrder][] | undefined | null,
  ): Promise<ISoilMoisture> {
    return this.repository.findOne(filter, projection, sort);
  }

  findById(id: string): Promise<ISoilMoisture> {
    return this.repository.findById(id);
  }

  delete(id: string): Promise<ISoilMoisture> {
    return this.repository.delete(id);
  }
}
