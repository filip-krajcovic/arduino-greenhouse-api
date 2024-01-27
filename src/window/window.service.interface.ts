import { FilterQuery, ProjectionType, SortOrder } from 'mongoose';

import { IWindow } from './window.interface';

export interface IWindowService {
  find(
    filter: FilterQuery<IWindowService>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<IWindow>>;
  findOne(
    filter: FilterQuery<IWindow>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
  ): Promise<IWindow>;
  findById(id: string): Promise<IWindow>;
  create(dto: IWindow): Promise<IWindow>;
  delete(id: string): Promise<IWindow>;
}
