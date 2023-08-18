import {
  CallHandler,
  ExecutionContext,
  INestApplication,
  Injectable,
  Logger,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, tap, timeout } from 'rxjs/operators';
import { LOG_SEPARATOR } from './app.constants';

@Injectable()
export class NoContentResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const response = context.switchToHttp().getResponse();
    return next.handle().pipe(
      tap(data => {
        if (!data) {
          response.status(204);
        }
      }),
    );
  }
}

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ms = +process.env.REQUEST_TIMEOUT || 5000;
    return next.handle().pipe(
      timeout(ms),
      catchError(err => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => err);
      }),
    );
  }
}

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const self = LoggingInterceptor.name;
    const {
      body,
      method,
      originalUrl: url,
    } = context.switchToHttp().getRequest();
    Logger.log(LOG_SEPARATOR, self);
    Logger.log(
      'Request Data',
      JSON.stringify({
        method,
        url,
        body,
      }),
      self,
    );
    const now = Date.now();
    return next.handle().pipe(
      tap(response => {
        Logger.log(`Response Data: ${JSON.stringify(response)}`, self);
        Logger.log(`Response Time...${Date.now() - now}ms`, self);
      }),
    );
  }
}

export function useInterceptors(app: INestApplication) {
  app.useGlobalInterceptors(
    new NoContentResponseInterceptor(),
    new TimeoutInterceptor(),
    new LoggingInterceptor(),
  );
}
