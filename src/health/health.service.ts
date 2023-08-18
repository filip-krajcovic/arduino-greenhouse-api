import { Injectable } from '@nestjs/common';
import { HealthCheckResult, HealthCheckService } from '@nestjs/terminus';
import { IHealthService } from './health.service.interface';

@Injectable()
export class HealthService implements IHealthService {
  constructor(
    private health: HealthCheckService,
  ) {}

  empty(): Promise<HealthCheckResult> {
    return this.health.check([]);
  }

  live(): Promise<HealthCheckResult> {
    return this.health.check([]);
  }

  ready(): Promise<HealthCheckResult> {
    return this.health.check([]);
  }
}
