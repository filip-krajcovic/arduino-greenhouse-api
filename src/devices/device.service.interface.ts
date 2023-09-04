import { FilterQuery, ProjectionType } from 'mongoose';
import { IDevice } from './device.interface';

export interface IDeviceService {
  find(
    filter: FilterQuery<IDevice>,
    projection?: ProjectionType<any>,
  ): Promise<Array<IDevice>>;
  findById(id: string): Promise<IDevice>;
  create(dto: IDevice): Promise<IDevice>;
  delete(id: string): Promise<IDevice>;
}
