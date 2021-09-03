import { Injectable, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';

import { ImportReportModuleSelectionDialogComponent } from '../../../../shared/dialogs/import-report-module-selection-dialog/import-report-module-selection-dialog.component';
import { ImportReportStudySelectionDialogComponent } from '../../../../shared/dialogs/import-report-study-selection-dialog/import-report-study-selection-dialog.component';
import { ReportRequiredFieldsDialogComponent } from '../../../../shared/dialogs/report-required-fields-dialog/report-required-fields-dialog.component';
import { ToastMessageService } from '../ToastMessage/toast-message.service';
import { ImportReportHttpService } from './import-report-http.service';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { IImportReportRequest } from '@interfaces/import-report-request.interface';
import { IDicomStudyData } from '@interfaces/dicom-study-data.interface';
import { IReportRequiredFieldsData } from '@interfaces/report-required-fields-data.interface';
import { ImportMode } from '@enums/shared/import-mode.enum';
import { LoadingScreenService } from '@services/shared/loading-screen/loading-screen.service';
import { ICheckExistingImportData } from '@interfaces/check-existing-import-data.interface';
import { IModuleSelectionData } from '@interfaces/module-selection-data.interface';
import { IpcMessageService } from '@services/shared/ipc-message/ipc-message.service';
import { LoggingService } from '@services/shared';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ImportReportService {
  constructor(
    private importReportHttpService: ImportReportHttpService,
    private toastMessageService: ToastMessageService,
    private ngZone: NgZone,
    private translate: TranslateService,
    private dialogService: DialogService,
    private navigationService: NavigationService,
    private loadingScreenService: LoadingScreenService,
    private ipcMessageService: IpcMessageService,
    private logger: LoggingService
  ) {}

  handleStudySelection(data: IDicomStudyData[]): void {
    this.ngZone.run(() => {
      this.dialogService.open(ImportReportStudySelectionDialogComponent, {
        data,
        showHeader: false
      });
    });
  }

  handleExistingImportCheck(data: ICheckExistingImportData): void {
    this.importReportHttpService.checkExistingImport(data).subscribe(
      response => {
        response.isNoImportNeeded = response.isExisting && !response.isDuplicateAllowed && !!response.reportId && !!response.moduleName;
        if (response.isNoImportNeeded) {
          this.navigationService.navigateToLastSaved(response.reportId, response.moduleName);
        }
        this.ipcMessageService.sendExistingImport(response);
      },
      __ => this.ipcMessageService.sendExistingImport({ isNoImportNeeded: true })
    );
  }

  handleModuleSelection(data?: IModuleSelectionData): void {
    this.ngZone.run(() => {
      if (!data?.moduleName) {
        this.dialogService
          .open(ImportReportModuleSelectionDialogComponent, {
            showHeader: false
          })
          .onClose.subscribe((moduleData?: IModuleSelectionData) => {
            if (moduleData) {
              this.fetchAndMessageDicomMap(moduleData.moduleName, moduleData.importMode);
            }
          });
      } else {
        this.fetchAndMessageDicomMap(data.moduleName, ImportMode.ImportAndOpen);
      }
    });
  }

  handleReportRequiredFields(data: IReportRequiredFieldsData): void {
    this.loadingScreenService.stopLoading();
    this.ngZone.run(() => {
      this.dialogService.open(ReportRequiredFieldsDialogComponent, {
        data,
        showHeader: false
      });
    });
  }

  handleImportReportRequest(requestString: string): void {
    const importRequest = JSON.parse(requestString) as IImportReportRequest;
    this.importReportHttpService.importReport(importRequest).subscribe(
      response => {
        if (response.isSuccess) {
          this.handleSuccessfullImport(importRequest, response.payload);
        } else {
          this.handleFailedImport(response.reason);
        }
      },
      error => this.handleFailedImport(JSON.stringify(error))
    );
  }

  fetchAndMessageDicomMap(moduleName: string, importMode: ImportMode): void {
    this.importReportHttpService.getDicomMap(moduleName).subscribe(
      response => {
        if (response.isSuccess) {
          const data: IModuleSelectionData = {
            moduleName,
            dicomMap: JSON.parse(response.payload),
            importMode
          };
          this.ipcMessageService.sendModuleSelection(false, data);
          if (importMode === ImportMode.ImportAndOpen) {
            this.navigationService.close().then(() => this.loadingScreenService.startLoading());
          }
        } else {
          this.handleFailedModuleSelection(response.reason);
        }
      },
      error => this.handleFailedModuleSelection(JSON.stringify(error))
    );
  }

  private handleSuccessfullImport(importRequest: IImportReportRequest, reportId: string): void {
    this.ngZone.run(() => {
      if (importRequest.importMode === ImportMode.ImportAndOpen) {
        this.navigationService.navigate(reportId, _.upperFirst(importRequest.moduleName)).then(() => {
          this.loadingScreenService.stopLoading();
          this.toastMessageService.showSuccessToast(this.translate.instant('import.messageSuccess'));
        });
      } else {
        this.toastMessageService.showSuccessToast(this.translate.instant('import.messageSuccess'));
      }
    });
  }

  private handleFailedImport(error: string): void {
    console.error(error);
    this.loadingScreenService.stopLoading();
    this.ngZone.run(() =>
      this.toastMessageService.showErrorToast(this.translate.instant('import.messageFailed'), this.translate.instant('import.titleFailed'))
    );
  }

  private handleFailedModuleSelection(message: string) {
    this.ipcMessageService.sendModuleSelection(true);
    this.logger.error('IMPORT_REPORT', message);
    this.loadingScreenService.stopLoading();
    this.toastMessageService.showErrorToast(
      this.translate.instant('layout.importReportModuleSelectionDialog.errorDicomMap'),
      this.translate.instant('import.titleFailed')
    );
  }
}
