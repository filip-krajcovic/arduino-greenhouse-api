import { FilterQuery, Model, ProjectionType } from 'mongoose';
import { IGenericRepository } from './generic-repository.interface';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _model: Model<T>;
  private _projection: ProjectionType<any>;

  constructor(model: Model<T>, projection: ProjectionType<any> = null) {
    this._model = model;
    this._projection = projection;
  }

  find(
    filter: FilterQuery<T>,
    projection: ProjectionType<any> = null,
  ): Promise<T[]> {
    return this._model.find(filter, projection || this._projection).exec();
  }

  findOne(
    filter: FilterQuery<T>,
    projection: ProjectionType<any> = null,
  ): Promise<T> {
    return this._model.findOne(filter, projection || this._projection).exec();
  }

  findById(id: any, projection: ProjectionType<any> = null): Promise<T> {
    return this._model.findById(id, projection || this._projection).exec();
  }

  async create(entity: T): Promise<T> {
    const newEntity = await this._model.create(entity);
    return this.findById(newEntity._id);
  }

  async patch(id: string, entity: T): Promise<T> {
    const patchedEntity = await this._model
      .findByIdAndUpdate<T>(id, entity)
      .setOptions({ new: true })
      .exec();
    if (!patchedEntity) {
      return null;
    }
    return this.findById(id);
  }

  async delete(id: string): Promise<T> {
    const deletedEntity = await this.findById(id);
    if (deletedEntity) {
      await this._model.findByIdAndDelete(id).exec();
    }
    return deletedEntity;
  }
}
