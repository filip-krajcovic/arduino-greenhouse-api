import { FilterQuery, ProjectionType } from 'mongoose';
import { ISoilMoisture } from './soli-moisture.interface';

export interface ISoilMoistureService {
  find(
    filter: FilterQuery<ISoilMoisture>,
    projection?: ProjectionType<any>,
  ): Promise<Array<ISoilMoisture>>;
  findById(id: string): Promise<ISoilMoisture>;
  create(dto: ISoilMoisture): Promise<ISoilMoisture>;
  delete(id: string): Promise<ISoilMoisture>;
}
