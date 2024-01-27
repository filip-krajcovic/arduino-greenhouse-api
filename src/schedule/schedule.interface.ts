export interface ISchedule {
  id?: string;
  hourOn: string;
  minuteOn: string;
  hourOff: string;
  minuteOff: string;
  timestamp?: Date;
}
