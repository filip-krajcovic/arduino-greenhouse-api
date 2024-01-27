export enum PATTERNS {
  find = 'WINDOW.FIND',
  findById = 'WINDOW.FIND-BY-ID',
  create = 'WINDOW.CREATE',
  delete = 'WINDOW.DELETE',
}

export const SELECT_WINDOW_PROJECTION = {
  _id: 0,
};

export const API_DOC = {
  operation: {
    find: {
      operationId: 'findWindowRecords',
      summary: 'Returns window records',
      description: 'Returns the list of window records',
    },
    findById: {
      operationId: 'findWindowById',
      summary: 'Returns the requested window recors by id',
      description: 'Returns the requested window record by id',
    },
    findLast: {
      operationId: 'findLastWindowRecord',
      summary: 'Returns the last window record',
      description: 'Returns the last window record',
    },
    create: {
      operationId: 'createWindowRecord',
      summary: 'Creates a new window record',
      description: 'Creates a new window record',
    },
    delete: {
      operationId: 'deleteWindowRecord',
      summary: 'Deletes the window record',
      description: 'Deletes the window record',
    },
  },
  responseOk: {
    find: {
      description: 'The window records',
      status: 200,
      isArray: true,
    },
    findById: {
      description: 'The window record',
      status: 200,
    },
    findLast: {
      description: 'The last window record',
      status: 200,
    },
    create: {
      description: 'Created window record',
      status: 201,
    },
    delete: {
      description: 'Deleted window record',
      status: 200,
    },
  },
  property: {
    windowDto: {
      id: {
        description: 'Window record ID',
        example: '640717d62bbe359879440207',
      },
      timestamp: {
        description: 'Timestamp',
        example: '2023-08-18T08:00:00.000Z',
      },
      state: {
        description: 'State',
        example: true,
      },
    },
  },
};
