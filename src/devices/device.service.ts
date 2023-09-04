import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, ProjectionType } from 'mongoose';
import { SELECT_DEVICES_PROJECTION } from './device.constants';
import { IDevice } from './device.interface';
import { IDeviceService } from './device.service.interface';
import { Device } from '../schemas/device.schema';
import { MongoGenericRepository } from '../data/mongo-generic-repository';

@Injectable()
export class DeviceService implements IDeviceService, OnApplicationBootstrap {
  private repository: MongoGenericRepository<IDevice>;

  constructor(
    @InjectModel(Device.name)
    private readonly model: Model<IDevice>,
  ) {}

  onApplicationBootstrap() {
    this.repository = new MongoGenericRepository<IDevice>(
      this.model,
      SELECT_DEVICES_PROJECTION,
    );
  }

  async create(dto: IDevice): Promise<IDevice> {
    return this.repository.create(dto);
  }

  find(
    filter: FilterQuery<IDevice>,
    projection?: ProjectionType<any>,
  ): Promise<Array<IDevice>> {
    return this.repository.find(filter, projection);
  }

  findById(id: string): Promise<IDevice> {
    return this.repository.findById(id);
  }

  delete(id: string): Promise<IDevice> {
    return this.repository.delete(id);
  }
}
