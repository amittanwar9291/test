import { ErrorHandler } from './error-handler.service';
import { IpcMessageService } from './ipc-message.service';
import { LogLevel } from '../enums/log-level.enum';
import { Logger } from './logger.service';
import { TraceTag } from '../enums/trace-tag.enum';
import { TraceMessage } from '../enums/trace-message.enum';
import { ServiceProvider } from './service-provider.service';

// app scoped
export class IpcEventHandler {
  constructor(private errorHandler: ErrorHandler, private ipcMessageService: IpcMessageService) {}

  registerIpcEvents(serviceProvider: ServiceProvider): void {
    this.ipcMessageService.registerUserLogin(() => this.onUserLoggedIn(serviceProvider));
    this.ipcMessageService.registerRendererLog((logLevel: LogLevel, payload: any) => this.onRendererLog(logLevel, payload));
  }

  private async onUserLoggedIn(serviceProvider: ServiceProvider): Promise<void> {
    Logger.logger.trace(TraceTag.Custom, TraceMessage.USER_LOGGED_IN);
    if (serviceProvider.importScope.cliManager.isImportRequested) {
      Logger.logger.trace(TraceTag.Custom, TraceMessage.IMPORT_REQUEST_AFTER_LOGIN);
      await serviceProvider.importScope.reportImporter.startImport();
    }
  }

  private onRendererLog(logLevel: LogLevel, payload: any): void {
    if (typeof payload === 'string') {
      payload = `RENDERER: ${payload}`;
    }

    switch (logLevel) {
      case LogLevel.Debug:
        Logger.logger.trace(TraceTag.Custom, payload);
        break;
      case LogLevel.Info:
        Logger.logger.info(payload);
        break;
      case LogLevel.Warning:
        Logger.logger.warning(payload);
        break;
      case LogLevel.Error:
        Logger.logger.error(payload);
        break;
    }
  }
}
