import { FilterQuery, ProjectionType, SortOrder } from 'mongoose';

import { ILight } from './light.interface';

export interface ILightService {
  find(
    filter: FilterQuery<ILightService>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<ILight>>;
  findOne(
    filter: FilterQuery<ILight>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
  ): Promise<ILight>;
  findById(id: string): Promise<ILight>;
  create(dto: ILight): Promise<ILight>;
  delete(id: string): Promise<ILight>;
}
