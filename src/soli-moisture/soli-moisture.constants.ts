export enum PATTERNS {
  find = 'SOIL-MOISTURE.FIND',
  findById = 'SOIL-MOISTURE.FIND-BY-ID',
  create = 'SOIL-MOISTURE.CREATE',
  delete = 'SOIL-MOISTURE.DELETE',
}

export const SELECT_SOIL_MOISTURE_PROJECTION = {
  _id: 0,
};

export const API_DOC = {
  operation: {
    find: {
      operationId: 'findSoilMoistures',
      summary: 'Returns soil moistures',
      description: 'Returns the list of soil moistures',
    },
    findById: {
      operationId: 'findTSoilMoistureById',
      summary: 'Returns the requested soil moisture by id',
      description: 'Returns the requested soil moisture by id',
    },
    findLast: {
      operationId: 'findLastSoilMoisture',
      summary: 'Returns the last soil moisture',
      description: 'Returns the last soil moisture',
    },
    create: {
      operationId: 'createSoilMoisture',
      summary: 'Creates a new soil moisture',
      description: 'Creates a new soil moisture',
    },
    delete: {
      operationId: 'deleteSoilMoisture',
      summary: 'Deletes the soil moisture',
      description: 'Deletes the soil moisture',
    },
  },
  responseOk: {
    find: {
      description: 'The soil moisture records',
      status: 200,
      isArray: true,
    },
    findById: {
      description: 'The soil moisture record',
      status: 200,
    },
    findLast: {
      description: 'The last soil moisture record',
      status: 200,
    },
    create: {
      description: 'Created soil moisture',
      status: 201,
    },
    delete: {
      description: 'Deleted soil moisture',
      status: 200,
    },
  },
  property: {
    soilMoistureDto: {
      id: {
        description: 'Soil moisture ID',
        example: '640717d62bbe359879440207',
      },
      timestamp: {
        description: 'Timestamp',
        example: '2023-08-18T08:00:00.000Z',
      },
      soilMoisture: {
        description: 'Soil moisture',
        example: 60,
      },
    },
  },
};
