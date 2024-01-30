export enum Events {
  connect = 'connect',
  error = 'error',
  message = 'message',
}

export enum Topics {
  humidity = 'arduino/humidity/v2',
  temperature = 'arduino/temperature/v2',
  soilMoisture = 'arduino/soil-moisture/v2',
  pump = 'arduino/pump/v2',
  window = 'arduino/window/v2',
  light = 'arduino/light/v2',
  timer = 'arduino/timer/v2',
  message = 'message',
}
