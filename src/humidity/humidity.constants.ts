export enum PATTERNS {
  find = 'HUMIDITY.FIND',
  findById = 'HUMIDITY.FIND-BY-ID',
  create = 'HUMIDITY.CREATE',
  delete = 'HUMIDITY.DELETE',
}

export const SELECT_HUMIDITY_PROJECTION = {
  _id: 0,
};

export const API_DOC = {
  operation: {
    find: {
      operationId: 'findHumidities',
      summary: 'Returns humidities',
      description: 'Returns the list of humidities',
    },
    findById: {
      operationId: 'findHumidityById',
      summary: 'Returns the requested humidity by id',
      description: 'Returns the requested humidity by id',
    },
    findLast: {
      operationId: 'findLastHumidity',
      summary: 'Returns the last humidity',
      description: 'Returns the last humidity',
    },
    create: {
      operationId: 'createHumidity',
      summary: 'Creates a new humidity',
      description: 'Creates a new humidity',
    },
    delete: {
      operationId: 'deleteHumidity',
      summary: 'Deletes the humidity',
      description: 'Deletes the humidity',
    },
  },
  responseOk: {
    find: {
      description: 'The humidity records',
      status: 200,
      isArray: true,
    },
    findById: {
      description: 'The humidity record',
      status: 200,
    },
    findLast: {
      description: 'The last humidity record',
      status: 200,
    },
    create: {
      description: 'Created humidity',
      status: 201,
    },
    delete: {
      description: 'Deleted humidity',
      status: 200,
    },
  },
  property: {
    humidityDto: {
      id: {
        description: 'Humidity ID',
        example: '640717d62bbe359879440207',
      },
      timestamp: {
        description: 'Timestamp',
        example: '2023-08-18T08:00:00.000Z',
      },
      humidity: {
        description: 'Humidity',
        example: 60,
      },
    },
  },
};
