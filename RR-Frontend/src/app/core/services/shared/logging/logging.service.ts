import { Injectable } from '@angular/core';

import { LogLevel } from '@enums/shared/log-level.enum';
import { Platform } from '@enums/shared/platform.enum';
import { AppConfig } from '../../../../app.config';
import { PlatformService } from '../platform/platform.service';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor(private platformService: PlatformService) {}

  logNav(msg: string) {
    this.log(LogLevel.Info, 'ROUTE', msg);
  }

  logHttp(msg: string, type: string) {
    this.log(LogLevel.Info, 'HTTP_' + type, msg);
  }

  logHook(msg: string, type: string) {
    this.log(LogLevel.Info, 'HOOK_' + type, msg);
  }

  debug(tag: string, msg: string) {
    this.log(LogLevel.Debug, tag, msg);
  }

  info(tag: string, msg: string) {
    this.log(LogLevel.Info, tag, msg);
  }

  error(tag: string, msg: string) {
    this.log(LogLevel.Error, tag, msg);
  }

  warn(tag: string, msg: string) {
    this.log(LogLevel.Warning, tag, msg);
  }

  critical(tag: string, msg: string) {
    this.log(LogLevel.Critical, tag, msg);
  }

  private log(level: LogLevel, tag: string, msg: string) {
    const timestamp = new Date().getTime();
    const platform = AppConfig.settings && AppConfig.settings.env ? AppConfig.settings.env.platform : Platform.Web;
    switch (platform) {
      case Platform.Web:
        if (level < LogLevel.Warning && !this.platformService.isElectron()) {
          return;
        }

        const msgObj = { level, tag, msg, timestamp };
        console.log(JSON.stringify(msgObj));
        break;
      case Platform.Desktop:
        const message = `${tag} | ${msg}`;
        switch (level) {
          case LogLevel.Debug:
          case LogLevel.Info:
            console.log(message, timestamp);
            break;
          case LogLevel.Warning:
            console.warn(message, timestamp);
            break;
          case LogLevel.Error:
          case LogLevel.Critical:
            console.error(message, timestamp);
            break;
        }
    }
  }
}
