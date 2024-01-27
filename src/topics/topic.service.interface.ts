export interface ITopicService {
  getAll(): Promise<string[]>;
  subscribe(topic: string): Promise<boolean>;
  unsubscribe(topic: string): Promise<boolean>;
}
