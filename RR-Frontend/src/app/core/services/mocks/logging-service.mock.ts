import { LoggingService } from '../shared';

export class LoggingServiceMock extends LoggingService {
  constructor() {
    super(null);
  }

  logNav(msg: string) {}

  logHttp(msg: string, type: string) {}

  logHook(msg: string, type: string) {}

  debug(tag: string, msg: string) {}

  info(tag: string, msg: string) {}

  error(tag: string, msg: string) {}

  warn(tag: string, msg: string) {}

  critical(tag: string, msg: string) {}
}
