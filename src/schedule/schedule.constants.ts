export enum PATTERNS {
  find = 'SCHEDULE.FIND',
  findById = 'SCHEDULE.FIND-BY-ID',
  create = 'SCHEDULE.CREATE',
  delete = 'SCHEDULE.DELETE',
}

export const SELECT_SCHEDULE_PROJECTION = {
  _id: 0,
  id: '$_id',
  hourOn: '$hourOn',
  minuteOn: '$minuteOn',
  hourOff: '$hourOff',
  minuteOff: '$minuteOff',
  timestamp: '$timestamp',
};

export const API_DOC = {
  operation: {
    find: {
      operationId: 'findScheduleRecords',
      summary: 'Returns schedule records',
      description: 'Returns the list of schedule records',
    },
    findById: {
      operationId: 'findScheduleById',
      summary: 'Returns the requested schedule recors by id',
      description: 'Returns the requested schedule record by id',
    },
    findLast: {
      operationId: 'findLastScheduleRecord',
      summary: 'Returns the last schedule record',
      description: 'Returns the last schedule record',
    },
    create: {
      operationId: 'createScheduleRecord',
      summary: 'Creates a new schedule record',
      description: 'Creates a new schedule record',
    },
    delete: {
      operationId: 'deleteScheduleRecord',
      summary: 'Deletes the schedule record',
      description: 'Deletes the schedule record',
    },
  },
  responseOk: {
    find: {
      description: 'The schedule records',
      status: 200,
      isArray: true,
    },
    findById: {
      description: 'The schedule record',
      status: 200,
    },
    findLast: {
      description: 'The last schedule record',
      status: 200,
    },
    create: {
      description: 'Created schedule record',
      status: 201,
    },
    delete: {
      description: 'Deleted schedule record',
      status: 200,
    },
  },
  property: {
    scheduleDto: {
      id: {
        description: 'Schedule record ID',
        example: '640717d62bbe359879440207',
      },
      timestamp: {
        description: 'Timestamp',
        example: '2023-08-18T08:00:00.000Z',
      },
      hourOn: {
        description: 'Hour On',
        example: '10',
      },
      minuteOn: {
        description: 'Minute On',
        example: '00',
      },
      hourOff: {
        description: 'Hour Off',
        example: '22',
      },
      minuteOff: {
        description: 'Minute Off',
        example: '00',
      },
    },
  },
};
