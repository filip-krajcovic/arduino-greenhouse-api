import { FilterQuery, ProjectionType, SortOrder } from 'mongoose';
import { IMessage } from './message.interface';

export interface IMessageService {
  find(
    filter: FilterQuery<IMessage>,
    projection?: ProjectionType<any>,
    sort?: string | { [key: string]: SortOrder | { $meta: any } } | [string, SortOrder][] | undefined | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<IMessage>>;
  count(
    filter: FilterQuery<IMessage>,
  ): Promise<number>;
  findById(id: string): Promise<IMessage>;
  create(dto: IMessage): Promise<IMessage>;
  delete(id: string): Promise<IMessage>;
}
