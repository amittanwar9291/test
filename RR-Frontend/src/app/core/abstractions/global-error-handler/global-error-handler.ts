import { ErrorHandler, Injectable } from '@angular/core';
import isElectron from 'is-electron';
import { LoggingService } from '@services/shared/logging/logging.service';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private logger: LoggingService) {
    super();
  }

  handleError(error: any): void {
    this.logToElectron(error);

    super.handleError(error);
  }

  private logToElectron(error: any) {
    if (isElectron()) {
      this.logger.error('GLOBAL_ERR_HANDL', error.message);
    }
  }
}
