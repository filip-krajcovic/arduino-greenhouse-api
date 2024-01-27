export enum PATTERNS {
  find = 'LIGHT.FIND',
  findById = 'LIGHT.FIND-BY-ID',
  create = 'LIGHT.CREATE',
  delete = 'LIGHT.DELETE',
}

export const SELECT_LIGHT_PROJECTION = {
  _id: 0,
};

export const API_DOC = {
  operation: {
    find: {
      operationId: 'findLightRecords',
      summary: 'Returns light records',
      description: 'Returns the list of light records',
    },
    findById: {
      operationId: 'findLightById',
      summary: 'Returns the requested light recors by id',
      description: 'Returns the requested light record by id',
    },
    findLast: {
      operationId: 'findLastLightRecord',
      summary: 'Returns the last light record',
      description: 'Returns the last light record',
    },
    create: {
      operationId: 'createLightRecord',
      summary: 'Creates a new light record',
      description: 'Creates a new light record',
    },
    delete: {
      operationId: 'deleteLightRecord',
      summary: 'Deletes the light record',
      description: 'Deletes the light record',
    },
  },
  responseOk: {
    find: {
      description: 'The light records',
      status: 200,
      isArray: true,
    },
    findById: {
      description: 'The light record',
      status: 200,
    },
    findLast: {
      description: 'The last light record',
      status: 200,
    },
    create: {
      description: 'Created light record',
      status: 201,
    },
    delete: {
      description: 'Deleted light record',
      status: 200,
    },
  },
  property: {
    lightDto: {
      id: {
        description: 'Light record ID',
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
