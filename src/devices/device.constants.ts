export enum PATTERNS {
  find = 'DEVICE.FIND',
  findById = 'DEVICE.FIND-BY-ID',
  create = 'DEVICE.CREATE',
  delete = 'DEVICE.DELETE',
}

export const SELECT_DEVICES_PROJECTION = {
  id: '$_id',
  uuid: '$uuid',
  name: '$name',
  description: '$description',
  type: '$type',
  _id: 0,
};

export const API_DOC = {
  operation: {
    find: {
      operationId: 'findDevices',
      summary: 'Returns devices',
      description: 'Returns the list of devices',
    },
    findById: {
      operationId: 'findDeviceById',
      summary: 'Returns the requested device by id',
      description: 'Returns the requested device by id',
    },
    create: {
      operationId: 'createDevice',
      summary: 'Creates a new device',
      description: 'Creates a new device',
    },
    delete: {
      operationId: 'deleteDevice',
      summary: 'Deletes the device',
      description: 'Deletes the device',
    },
  },
  responseOk: {
    find: {
      description: 'The device records',
      status: 200,
      isArray: true,
    },
    findById: {
      description: 'The device record',
      status: 200,
    },
    create: {
      description: 'Created device',
      status: 201,
    },
    delete: {
      description: 'Deleted device',
      status: 200,
    },
  },
  property: {
    deviceDto: {
      id: {
        description: 'Device ID',
        example: '640717d62bbe359879440207',
      },
      uuid: {
        description: 'Universal unique identifier',
        example: 'ef97dc90-4526-43e3-9497-14ad729fd67e',
      },
      name: {
        description: 'Device name',
        example: 'My Arduino',
      },
      description: {
        description: 'Device description',
        example: '',
      },
      type: {
        description: 'Device type',
        example: 'Arduino Uno R3',
      },
    },
  },
};
