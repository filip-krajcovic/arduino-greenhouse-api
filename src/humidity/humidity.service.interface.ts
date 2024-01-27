import { FilterQuery, ProjectionType, SortOrder } from 'mongoose';
import { IHumidity } from './humidity.interface';

export interface IHumidityService {
  find(
    filter: FilterQuery<IHumidity>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<IHumidity>>;
  findOne(
    filter: FilterQuery<IHumidity>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
  ): Promise<IHumidity>;
  findById(id: string): Promise<IHumidity>;
  create(dto: IHumidity): Promise<IHumidity>;
  delete(id: string): Promise<IHumidity>;
}
