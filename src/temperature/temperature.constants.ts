export enum PATTERNS {
  find = 'TEMPERATURE.FIND',
  findById = 'TEMPERATURE.FIND-BY-ID',
  create = 'TEMPERATURE.CREATE',
  delete = 'TEMPERATURE.DELETE',
}

export const SELECT_TEMPERATURE_PROJECTION = {
  _id: 0,
};

export const API_DOC = {
  operation: {
    find: {
      operationId: 'findTemperatures',
      summary: 'Returns temperatures',
      description: 'Returns the list of temperatures',
    },
    findById: {
      operationId: 'findTemperatureById',
      summary: 'Returns the requested temperature by id',
      description: 'Returns the requested temperature by id',
    },
    findLast: {
      operationId: 'findLastTemperature',
      summary: 'Returns the last temperature',
      description: 'Returns the last temperature',
    },
    create: {
      operationId: 'createTemperature',
      summary: 'Creates a new temperature',
      description: 'Creates a new temperature',
    },
    delete: {
      operationId: 'deleteTemperature',
      summary: 'Deletes the temperature',
      description: 'Deletes the temperature',
    },
  },
  responseOk: {
    find: {
      description: 'The temperature records',
      status: 200,
      isArray: true,
    },
    findById: {
      description: 'The temperature record',
      status: 200,
    },
    findLast: {
      description: 'The last temperature record',
      status: 200,
    },
    create: {
      description: 'Created temperature',
      status: 201,
    },
    delete: {
      description: 'Deleted temperature',
      status: 200,
    },
  },
  property: {
    humidityDto: {
      id: {
        description: 'Temperature ID',
        example: '640717d62bbe359879440207',
      },
      timestamp: {
        description: 'Timestamp',
        example: '2023-08-18T08:00:00.000Z',
      },
      temperature: {
        description: 'Temperature',
        example: 25,
      },
    },
  },
};
