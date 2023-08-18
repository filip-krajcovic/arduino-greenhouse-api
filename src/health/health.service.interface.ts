import { HealthCheckResult } from '@nestjs/terminus';

export interface IHealthService {
  empty(): Promise<HealthCheckResult>;
  live(): Promise<HealthCheckResult>;
  ready(): Promise<HealthCheckResult>;
}
