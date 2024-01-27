import { FilterQuery, ProjectionType, SortOrder } from 'mongoose';

import { IPump } from './pump.interface';

export interface IPumpService {
  find(
    filter: FilterQuery<IPumpService>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
    skip?: number,
    limit?: number,
  ): Promise<Array<IPump>>;
  findOne(
    filter: FilterQuery<IPump>,
    projection?: ProjectionType<any>,
    sort?:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
  ): Promise<IPump>;
  findById(id: string): Promise<IPump>;
  create(dto: IPump): Promise<IPump>;
  delete(id: string): Promise<IPump>;
}
