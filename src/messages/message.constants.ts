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
    find: {
      operationId: 'findMessages',
      summary: 'Returns messages',
      description: 'Returns the list of messages',
    },
    findById: {
      operationId: 'findMessageById',
      summary: 'Returns the requested message by id',
      description: 'Returns the requested message by id',
    },
    create: {
      operationId: 'createMessage',
      summary: 'Creates a new message',
      description: 'Creates a new message',
    },
    delete: {
      operationId: 'deleteMessage',
      summary: 'Deletes the message',
      description: 'Deletes the message',
    },
  },
  responseOk: {
    find: {
      description: 'The message records',
      status: 200,
      isArray: true,
    },
    findById: {
      description: 'The message record',
      status: 200,
    },
    create: {
      description: 'Created message',
      status: 201,
    },
    delete: {
      description: 'Deleted message',
      status: 200,
    },
  },
  property: {
    messageDto: {
      id: {
        description: 'Message ID',
        example: '640717d62bbe359879440207',
      },
      timestamp: {
        description: 'Timestamp',
        example: '2023-08-18T08:00:00.000Z',
      },
      data: {
        description: 'Message data',
      },
    },
  },
};