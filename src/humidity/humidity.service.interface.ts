import { FilterQuery, ProjectionType } from 'mongoose';
import { IHumidity } from './humidity.interface';

export interface IHumidityService {
  find(
    filter: FilterQuery<IHumidity>,
    projection?: ProjectionType<any>,
  ): Promise<Array<IHumidity>>;
  findById(id: string): Promise<IHumidity>;
  create(dto: IHumidity): Promise<IHumidity>;
  delete(id: string): Promise<IHumidity>;
}
