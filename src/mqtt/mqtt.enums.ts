export enum Events {
  connect = 'connect',
  error = 'error',
  message = 'message',
}

export enum Topics {
  humidity = 'arduino/humidity',
  temperature = 'arduino/temperature',
  soilMoisture = 'arduino/soil-moisture',
  pump = 'arduino/pump',
  window = 'arduino/window',
  light = 'arduino/light',
  timer = 'arduino/timer',
  message = 'message',
}
