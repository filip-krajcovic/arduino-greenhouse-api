import { FilterQuery, ProjectionType } from "mongoose";
import { IMessage } from "./message.interface";

export interface IMessageService {
  find(filter: FilterQuery<IMessage>, projection?: ProjectionType<any>): Promise<Array<IMessage>>;
  findById(id: string): Promise<IMessage>;
  create(dto: IMessage): Promise<IMessage>;
  delete(id: string): Promise<IMessage>;
}