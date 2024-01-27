import { FilterQuery, ProjectionType, SortOrder } from 'mongoose';

export interface IGenericRepository<T> {
  find(
    filter: FilterQuery<T>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<T>>;
  count(filter: FilterQuery<T>): Promise<number>;
  findOne(
    filter: FilterQuery<T>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
  ): Promise<T>;
  findById(id: string, projection?: ProjectionType<any>): Promise<T>;
  create(entity: T): Promise<T>;
  patch(id: string, entity: T): Promise<T>;
  delete(id: string): Promise<T>;
}
