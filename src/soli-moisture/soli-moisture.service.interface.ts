import { FilterQuery, ProjectionType, SortOrder } from 'mongoose';
import { ISoilMoisture } from './soli-moisture.interface';

export interface ISoilMoistureService {
  find(
    filter: FilterQuery<ISoilMoisture>,
    projection?: ProjectionType<any>,
  ): Promise<Array<ISoilMoisture>>;
  findOne(
    filter: FilterQuery<ISoilMoisture>,
    projection?: ProjectionType<any>,
    sort?: string | { [key: string]: SortOrder | { $meta: any } } | [string, SortOrder][] | undefined | null,
  ): Promise<ISoilMoisture>
  findById(id: string): Promise<ISoilMoisture>;
  create(dto: ISoilMoisture): Promise<ISoilMoisture>;
  delete(id: string): Promise<ISoilMoisture>;
}
