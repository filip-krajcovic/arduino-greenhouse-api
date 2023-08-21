import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, ProjectionType } from 'mongoose';
import { SELECT_SOIL_MOISTURE_PROJECTION } from './soli-moisture.constants';
import { ISoilMoisture } from './soli-moisture.interface';
import { ISoilMoistureService } from './soli-moisture.service.interface';
import { MongoGenericRepository } from '../data/mongo-generic-repository';

@Injectable()
export class SoilMoistureService implements ISoilMoistureService, OnApplicationBootstrap {
  private repository: MongoGenericRepository<ISoilMoisture>;

  constructor(
    @InjectModel('SoilMoisture')
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

  findById(id: string): Promise<ISoilMoisture> {
    return this.repository.findById(id);
  }

  delete(id: string): Promise<ISoilMoisture> {
    return this.repository.delete(id);
  }
}
