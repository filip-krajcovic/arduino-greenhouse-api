import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { FilterQuery, Model, ProjectionType, SortOrder } from 'mongoose';

import { MongoGenericRepository } from '../data/mongo-generic-repository';

import { SELECT_SCHEDULE_PROJECTION } from './schedule.constants';
import { ISchedule } from './schedule.interface';
import { IScheduleService } from './schedule.service.interface';
import { Schedule } from '../schemas/schedule.schema';

@Injectable()
export class ScheduleService
  implements IScheduleService, OnApplicationBootstrap
{
  private repository: MongoGenericRepository<ISchedule>;

  constructor(
    @InjectModel(Schedule.name)
    private readonly model: Model<ISchedule>,
  ) {}

  onApplicationBootstrap() {
    this.repository = new MongoGenericRepository<ISchedule>(
      this.model,
      SELECT_SCHEDULE_PROJECTION,
    );
  }

  async create(dto: ISchedule): Promise<ISchedule> {
    const timestamp = new Date();
    return this.repository.create({ timestamp, ...dto });
  }

  find(
    filter: FilterQuery<ISchedule>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<ISchedule>> {
    return this.repository.find(filter, projection, sort, skip, limit);
  }

  findOne(
    filter: FilterQuery<ISchedule>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
  ): Promise<ISchedule> {
    return this.repository.findOne(filter, projection, sort);
  }

  findById(id: string): Promise<ISchedule> {
    return this.repository.findById(id);
  }

  patch(dto: ISchedule): Promise<ISchedule> {
    return this.repository.patch(dto.id, dto);
  }

  delete(id: string): Promise<ISchedule> {
    return this.repository.delete(id);
  }
}
