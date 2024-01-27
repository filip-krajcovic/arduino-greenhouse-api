export enum PATTERNS {
  find = 'PUMP.FIND',
  findById = 'PUMP.FIND-BY-ID',
  create = 'PUMP.CREATE',
  delete = 'PUMP.DELETE',
}

export const SELECT_PUMP_PROJECTION = {
  _id: 0,
};

export const API_DOC = {
  operation: {
    find: {
      operationId: 'findPumps',
      summary: 'Returns pump records',
      description: 'Returns the list of pump records',
    },
    findById: {
      operationId: 'findPumpById',
      summary: 'Returns the requested pump recors by id',
      description: 'Returns the requested pump record by id',
    },
    findLast: {
      operationId: 'findLastPumpRecord',
      summary: 'Returns the last pump record',
      description: 'Returns the last pump record',
    },
    create: {
      operationId: 'createPumpRecord',
      summary: 'Creates a new pump record',
      description: 'Creates a new pump record',
    },
    delete: {
      operationId: 'deletePumpRecord',
      summary: 'Deletes the pump record',
      description: 'Deletes the pump record',
    },
  },
  responseOk: {
    find: {
      description: 'The pump records',
      status: 200,
      isArray: true,
    },
    findById: {
      description: 'The pump record',
      status: 200,
    },
    findLast: {
      description: 'The last pump record',
      status: 200,
    },
    create: {
      description: 'Created pump record',
      status: 201,
    },
    delete: {
      description: 'Deleted pump record',
      status: 200,
    },
  },
  property: {
    pumpDto: {
      id: {
        description: 'Pump record ID',
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
