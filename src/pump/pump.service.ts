import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { FilterQuery, Model, ProjectionType, SortOrder } from 'mongoose';

import { MongoGenericRepository } from '../data/mongo-generic-repository';
import { Pump } from '../schemas/pump.schema';

import { SELECT_PUMP_PROJECTION } from './pump.constants';
import { IPump } from './pump.interface';
import { IPumpService } from './pump.service.interface';

@Injectable()
export class PumpService implements IPumpService, OnApplicationBootstrap {
  private repository: MongoGenericRepository<IPump>;

  constructor(
    @InjectModel(Pump.name)
    private readonly model: Model<IPump>,
  ) {}

  onApplicationBootstrap() {
    this.repository = new MongoGenericRepository<IPump>(
      this.model,
      SELECT_PUMP_PROJECTION,
    );
  }

  async create(dto: IPump): Promise<IPump> {
    const timestamp = new Date();
    return this.repository.create({ timestamp, ...dto });
  }

  find(
    filter: FilterQuery<IPump>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<IPump>> {
    return this.repository.find(filter, projection, sort, skip, limit);
  }

  findOne(
    filter: FilterQuery<IPump>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
  ): Promise<IPump> {
    return this.repository.findOne(filter, projection, sort);
  }

  findById(id: string): Promise<IPump> {
    return this.repository.findById(id);
  }

  delete(id: string): Promise<IPump> {
    return this.repository.delete(id);
  }
}
