import { Controller, Get } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HealthCheck, HealthCheckResult } from '@nestjs/terminus';
import { HealthService } from './health.service';
import { API_DOC } from './health.constants';

@ApiTags('Health check')
@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get('/')
  @HealthCheck()
  @ApiExcludeEndpoint()
  empty(): Promise<HealthCheckResult> {
    return this.healthService.empty();
  }

  @Get('/live')
  @HealthCheck()
  @ApiOperation(API_DOC.operation.live)
  live(): Promise<HealthCheckResult> {
    return this.healthService.live();
  }

  @Get('/ready')
  @HealthCheck()
  @ApiOperation(API_DOC.operation.ready)
  ready(): Promise<HealthCheckResult> {
    return this.healthService.ready();
  }
}
