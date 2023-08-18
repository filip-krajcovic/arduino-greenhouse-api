import { HealthIndicatorResult } from '@nestjs/terminus';

export interface IIndicatorService {
  check(): Promise<HealthIndicatorResult>;
}
