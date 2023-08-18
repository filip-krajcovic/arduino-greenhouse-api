import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [HealthService, ConfigService],
})
export class HealthModule {}
