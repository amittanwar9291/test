import { Injectable } from '@angular/core';
import { IpcMessageService } from '@services/shared/ipc-message/ipc-message.service';
import { LogLevel } from '@enums/shared/log-level.enum';
import { serializeError } from 'serialize-error';

@Injectable({
  providedIn: 'root'
})
export class IpcLoggingService {
  private logKey = 'log';
  private warnKey = 'warn';
  private errorKey = 'error';
  private hookedMethods = [this.logKey, this.warnKey, this.errorKey];
  private consoleBackup = {};
  private isHooked: boolean;

  constructor(private ipcMessageService: IpcMessageService) {}

  hookConsole(): void {
    for (const method of this.hookedMethods) {
      this.consoleBackup[method] = console[method];
      console[method] = this[method].bind(this);
    }
    this.isHooked = true;
  }

  unhookConsole(): void {
    if (!this.isHooked) {
      return;
    }

    for (const method of this.hookedMethods) {
      console[method] = this.consoleBackup[method];
      delete this.consoleBackup[method];
    }
    this.isHooked = false;
  }

  log(message?: any, ...optionalParams: any[]): void {
    this.logInternal(this.logKey, console.log, LogLevel.Info, message, ...optionalParams);
  }

  warn(message?: any, ...optionalParams: any[]): void {
    this.logInternal(this.warnKey, console.warn, LogLevel.Warning, message, ...optionalParams);
  }

  error(message?: any, ...optionalParams: any[]): void {
    this.logInternal(this.errorKey, console.error, LogLevel.Error, message, ...optionalParams);
  }

  private logInternal(
    methodKey: string,
    logMethod: (message?: any, ...optionalParams: any[]) => void,
    logLevel: LogLevel,
    message?: any,
    ...optionalParams: any[]
  ): void {
    if (this.isHooked) {
      this.consoleBackup[methodKey](message, ...optionalParams);
    } else {
      logMethod(message, ...optionalParams);
    }

    // enable info level when less noisy
    if ((message || optionalParams?.length) && logLevel > LogLevel.Info) {
      let messageString = this.stringifyParameter(message);
      if (optionalParams?.length) {
        messageString += ` | ${optionalParams.map(p => this.stringifyParameter(p)).join(' | ')}`;
      }

      this.ipcMessageService.sendRendererLog(logLevel, messageString);
    }
  }

  private stringifyParameter(parameter?: any): string {
    return parameter ? JSON.stringify(serializeError(parameter)) : '';
  }
}
