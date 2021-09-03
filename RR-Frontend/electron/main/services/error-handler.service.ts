import { IpcMessageService } from './ipc-message.service';
import { Logger } from './logger.service';
import { CancelError } from '../models/errors/cancel-error.model';
import { NoParserDataError } from '../models/errors/no-parser-data-error.model';
import { ErrorMessage } from '../enums/error-message.enum';
import { CmoveWithoutStudyIdError } from '../models/errors/cmove-without-study-id-error.model';
import { InvalidPacsConfigurationError } from '../models/errors/invalid-pacs-configuration-error.model';

// app scoped
export class ErrorHandler {
  constructor(private ipcMessageService: IpcMessageService) {}

  handleError(error: any, ...optionalParams: any[]): void {
    this.logError(error, ...optionalParams);
    if (error instanceof CancelError) {
      return;
    } else if (error instanceof NoParserDataError) {
      this.ipcMessageService.sendErrorToast(ErrorMessage.IMPORT_FAILED_TITLE, ErrorMessage.NO_PARSER_DATA_MESSAGE);
    } else if (error instanceof CmoveWithoutStudyIdError) {
      this.ipcMessageService.sendErrorToast(ErrorMessage.IMPORT_FAILED_TITLE, ErrorMessage.CMOVE_WITHOUT_STUDYID_MESSAGE);
    } else if (error instanceof InvalidPacsConfigurationError) {
      this.ipcMessageService.sendErrorToast(ErrorMessage.IMPORT_FAILED_TITLE, ErrorMessage.INVALID_PACS_CONFIG_MESSAGE);
    } else {
      this.ipcMessageService.sendErrorToast(ErrorMessage.IMPORT_FAILED_TITLE, ErrorMessage.IMPORT_FAILED_MESSAGE);
    }
  }

  logError(error: any, ...optionalParams: any[]): void {
    let realError;
    if (error instanceof CancelError) {
      Logger.logger.info(error.message);
      return;
    } else if (error instanceof Error) {
      realError = error;
    } else if (typeof error === 'string') {
      realError = new Error(error);
    } else {
      realError = new Error(JSON.stringify(error));
    }

    Logger.logger.error(realError, ...optionalParams);
  }
}
