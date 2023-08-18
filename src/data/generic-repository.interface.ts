import { FilterQuery, ProjectionType } from 'mongoose';

export interface IGenericRepository<T> {
  find(
    filter: FilterQuery<T>,
    projection?: ProjectionType<any>,
  ): Promise<Array<T>>;
  findOne(filter: FilterQuery<T>, projection?: ProjectionType<any>): Promise<T>;
  findById(id: string, projection?: ProjectionType<any>): Promise<T>;
  create(entity: T): Promise<T>;
  patch(id: string, entity: T): Promise<T>;
  delete(id: string): Promise<T>;
}
