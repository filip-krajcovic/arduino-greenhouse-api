export enum PATTERNS {
  find = 'MESSAGE.FIND',
  findById = 'MESSAGE.FIND-BY-ID',
  create = 'MESSAGE.CREATE',
  delete = 'MESSAGE.DELETE',
}

export const SELECT_MESSAGES_PROJECTION = {
  _id: 0,
};

export const API_DOC = {
  operation: {
    getAll: {
      operationId: 'getAllTopics',
      summary: 'Get all subscribed topics',
      description: 'Get all subscribed topics',
    },
    subscribe: {
      operationId: 'subscribeToTopic',
      summary: 'Subscribe to topic',
      description: 'Subscribe to topic',
    },
    unsubscribe: {
      operationId: 'unsubscribeFromTopic',
      summary: 'Unsubscribe from topic',
      description: 'Unsubscribe from topic',
    },
  },
  responseOk: {
    subscribe: {
      description: 'Subscribe',
      status: 200,
    },
    unsubscribe: {
      description: 'Unsubscribe',
      status: 200,
    },
  },
  property: {
    topicDto: {
      name: {
        description: 'Topic name',
        example: 'name/of/topic',
      },
    },
  },
};
