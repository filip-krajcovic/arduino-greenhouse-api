import { FilterQuery, ProjectionType, SortOrder } from 'mongoose';

import { ISchedule } from './schedule.interface';

export interface IScheduleService {
  find(
    filter: FilterQuery<IScheduleService>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<ISchedule>>;
  findOne(
    filter: FilterQuery<ISchedule>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
  ): Promise<ISchedule>;
  findById(id: string): Promise<ISchedule>;
  create(dto: ISchedule): Promise<ISchedule>;
  delete(id: string): Promise<ISchedule>;
}
