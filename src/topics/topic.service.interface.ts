import { ITopic } from './topic.interface';

export interface ITopicService {
  getAll(): Promise<string[]>;
  subscribe(topic: ITopic): Promise<boolean>;
  unsubscribe(topic: ITopic): Promise<boolean>;
}
