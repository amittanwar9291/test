import { ipcMain } from 'electron';
import { ErrorMessage } from '../enums/error-message.enum';
import { IpcChannel } from '../enums/ipc-channel.enum';
import { ImportReportRequest } from '../models/import-report-request.model';
import { IModuleSelectionDataDto } from '../interfaces/dtos/module-selection-data-dto.interface';
import { ReportRequiredFieldsData } from '../models/report-required-fields-data.model';
import { CancelError } from '../models/errors/cancel-error.model';
import { Logger } from './logger.service';
import { TraceMessage } from '../enums/trace-message.enum';
import { LogLevel } from '../enums/log-level.enum';
import { TraceTag } from '../enums/trace-tag.enum';
import { IStudySelectionDataDto } from '../interfaces/dtos/study-selection-data-dto.interface';
import { StudyData } from '../models/study-data.model';
import { CheckExistingImportData } from '../models/check-existing-import-data.model';
import { ICheckExistingImportDataDto } from '../interfaces/dtos/check-existing-import-data-dto.interface';
import { PromiseFactory } from './promise-factory.service';
import { ModuleSelectionData } from '../models/module-selection-data.model';

// app scoped
export class IpcMessageService {
  private webContents: Electron.WebContents;

  set mainWebContents(value: Electron.WebContents) {
    this.webContents = value;
  }

  registerUserLogin(listener: () => void): void {
    ipcMain.on(IpcChannel.UserLogin, () => listener());
  }

  registerRendererLog(listener: (logLevel: LogLevel, payload: any) => void): void {
    ipcMain.on(IpcChannel.RendererLog, (_, logLevel: LogLevel, payload: any) => listener(logLevel, payload));
  }

  sendImportReportRequest(importRequest: ImportReportRequest): void {
    Logger.logger.trace(TraceTag.Custom, TraceMessage.IMPORT_REPORT_REQUESTED);
    this.webContents?.send(IpcChannel.ImportReportRequest, JSON.stringify(importRequest));
  }

  promptStudySelection(studyData: StudyData[]): Promise<IStudySelectionDataDto> {
    return PromiseFactory.createErrorHandlingPromise<IStudySelectionDataDto>((resolve, reject) => {
      Logger.logger.trace(TraceTag.Custom, TraceMessage.STUDY_SELECTION_REQUESTED);
      ipcMain.once(IpcChannel.StudySelection, (_, isCancelled, responseData) => {
        Logger.logger.trace(TraceTag.Custom, TraceMessage.STUDY_SELECTION_ANSWERED);
        if (isCancelled) {
          reject(new CancelError(ErrorMessage.STUDY_SELECTION_CANCELLED));
        } else {
          resolve(responseData);
        }
      });
      this.webContents.send(IpcChannel.StudySelection, studyData);
    });
  }

  checkExistingImport(checkData: CheckExistingImportData): Promise<ICheckExistingImportDataDto> {
    return PromiseFactory.createErrorHandlingPromise<ICheckExistingImportDataDto>((resolve, _) => {
      Logger.logger.trace(TraceTag.Custom, TraceMessage.CHECK_EXISTING_IMPORT_REQUESTED);
      ipcMain.once(IpcChannel.ExistingImport, (__, data) => {
        Logger.logger.trace(TraceTag.Custom, TraceMessage.CHECK_EXISTING_IMPORT_ANSWERED);
        resolve(data);
      });
      this.webContents.send(IpcChannel.ExistingImport, checkData);
    });
  }

  promptModuleSelection(data?: ModuleSelectionData): Promise<IModuleSelectionDataDto> {
    return PromiseFactory.createErrorHandlingPromise<IModuleSelectionDataDto>((resolve, reject) => {
      Logger.logger.trace(TraceTag.Custom, TraceMessage.MODULE_SELECTION_REQUESTED);
      ipcMain.once(IpcChannel.ModuleSelection, (_, isCancelled, responseData) => {
        Logger.logger.trace(TraceTag.Custom, TraceMessage.MODULE_SELECTION_ANSWERED);
        if (isCancelled) {
          reject(new CancelError(ErrorMessage.MODULE_SELECTION_CANCELLED));
        } else {
          resolve(responseData);
        }
      });
      this.webContents.send(IpcChannel.ModuleSelection, data);
    });
  }

  promptRequiredFields(data: ReportRequiredFieldsData): Promise<ReportRequiredFieldsData> {
    return PromiseFactory.createErrorHandlingPromise<ReportRequiredFieldsData>((resolve, reject) => {
      Logger.logger.trace(TraceTag.Custom, TraceMessage.REQUIRED_FIELDS_REQUESTED);
      ipcMain.once(IpcChannel.ReportRequiredFields, (_, isCancelled, responseData) => {
        Logger.logger.trace(TraceTag.Custom, TraceMessage.REQUIRED_FIELDS_ANSWERED);
        if (isCancelled) {
          reject(new CancelError(ErrorMessage.REQUIRED_FIELDS_CANCELLED));
        } else {
          resolve(responseData);
        }
      });
      this.webContents?.send(IpcChannel.ReportRequiredFields, data);
    });
  }

  sendErrorToast(title: string, message: string): void {
    this.webContents?.send(IpcChannel.ToastError, title, message);
  }
}
