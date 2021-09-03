import { Injectable } from '@angular/core';
import { PlatformService } from '../platform/platform.service';
import { IpcChannel } from '@enums/shared/ipc-channel.enum';
import { IReportRequiredFieldsData } from '@interfaces/report-required-fields-data.interface';
import { IModuleSelectionData } from '@interfaces/module-selection-data.interface';
import { LogLevel } from '@enums/shared/log-level.enum';
import { IDicomStudyData } from '@interfaces/dicom-study-data.interface';
import { ICheckExistingImportData } from '@interfaces/check-existing-import-data.interface';
import { ICheckExistingImportResponse } from '@interfaces/check-existing-import-response.interface';

@Injectable({
  providedIn: 'root'
})
export class IpcMessageService {
  constructor(private platformService: PlatformService) {}

  registerStudySelection(listener: (studyData: IDicomStudyData[]) => void): void {
    this.platformService.getElectronRenderer().on(IpcChannel.StudySelection, (_, studyData) => {
      listener(studyData);
      this.sendRendererLog(LogLevel.Debug, 'Study selection requested');
    });
  }

  registerExistingImportCheck(listener: (checkData: ICheckExistingImportData) => void): void {
    this.platformService.getElectronRenderer().on(IpcChannel.ExistingImport, (_, checkData) => {
      listener(checkData);
      this.sendRendererLog(LogLevel.Debug, 'Existing import check requested');
    });
  }

  registerModuleSelection(listener: (moduleSelectionData?: IModuleSelectionData) => void): void {
    this.platformService.getElectronRenderer().on(IpcChannel.ModuleSelection, (_, moduleSelectionData?) => {
      listener(moduleSelectionData);
      this.sendRendererLog(LogLevel.Debug, 'Module selection requested');
    });
  }

  registerReportRequiredFields(listener: (requiredFieldData: IReportRequiredFieldsData) => void): void {
    this.platformService.getElectronRenderer().on(IpcChannel.ReportRequiredFields, (_, requiredFieldData) => {
      listener(requiredFieldData);
      this.sendRendererLog(LogLevel.Debug, 'Required fields requested');
    });
  }

  registerImportReportRequest(listener: (requestString: string) => void): void {
    this.platformService.getElectronRenderer().on(IpcChannel.ImportReportRequest, (_, requestString) => {
      listener(requestString);
      this.sendRendererLog(LogLevel.Debug, 'Import report requested');
    });
  }

  registerToastError(listener: (title: string, message: string) => void): void {
    this.platformService.getElectronRenderer().on(IpcChannel.ToastError, (_, title, message) => listener(title, message));
  }

  sendUserLogin(): void {
    this.platformService.getElectronRenderer().send(IpcChannel.UserLogin);
    this.sendRendererLog(LogLevel.Debug, 'User login answer sent');
  }

  sendExistingImport(data: ICheckExistingImportResponse) {
    this.platformService.getElectronRenderer().send(IpcChannel.ExistingImport, data);
    this.sendRendererLog(LogLevel.Debug, `Check existing import answer sent`);
  }

  sendStudySelection(isCancelled: boolean, data?: IDicomStudyData) {
    this.platformService.getElectronRenderer().send(IpcChannel.StudySelection, isCancelled, data);
    this.sendRendererLog(LogLevel.Debug, 'Study selection answer sent');
  }

  sendModuleSelection(isCancelled: boolean, data?: IModuleSelectionData): void {
    this.platformService.getElectronRenderer().send(IpcChannel.ModuleSelection, isCancelled, data);
    this.sendRendererLog(LogLevel.Debug, 'Module selection answer sent');
  }

  sendReportRequiredFields(isCancelled: boolean, data?: IReportRequiredFieldsData): void {
    this.platformService.getElectronRenderer().send(IpcChannel.ReportRequiredFields, isCancelled, data);
    this.sendRendererLog(LogLevel.Debug, 'Required fields answer sent');
  }

  sendRendererLog(logLevel: LogLevel, payload: any): void {
    this.platformService.getElectronRenderer().send(IpcChannel.RendererLog, logLevel, payload);
  }
}
