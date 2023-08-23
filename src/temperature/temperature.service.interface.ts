import { FilterQuery, ProjectionType, SortOrder } from 'mongoose';
import { ITemperature } from './temperature.interface';

export interface ITemperatureService {
  find(
    filter: FilterQuery<ITemperature>,
    projection?: ProjectionType<any>,
  ): Promise<Array<ITemperature>>;
  findOne(
    filter: FilterQuery<ITemperature>,
    projection?: ProjectionType<any>,
    sort?: string | { [key: string]: SortOrder | { $meta: any } } | [string, SortOrder][] | undefined | null,
  ): Promise<ITemperature>;
  findById(id: string): Promise<ITemperature>;
  create(dto: ITemperature): Promise<ITemperature>;
  delete(id: string): Promise<ITemperature>;
}
