import { FilterQuery, ProjectionType } from 'mongoose';
import { ITemperature } from './temperature.interface';

export interface ITemperatureService {
  find(
    filter: FilterQuery<ITemperature>,
    projection?: ProjectionType<any>,
  ): Promise<Array<ITemperature>>;
  findById(id: string): Promise<ITemperature>;
  create(dto: ITemperature): Promise<ITemperature>;
  delete(id: string): Promise<ITemperature>;
}
