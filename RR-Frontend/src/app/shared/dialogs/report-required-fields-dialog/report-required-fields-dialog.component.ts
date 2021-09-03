import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { IpcMessageService } from '@services/shared/ipc-message/ipc-message.service';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { IReportRequiredFieldsData } from '@interfaces/report-required-fields-data.interface';
import { LoadingScreenService } from '@services/shared/loading-screen/loading-screen.service';

@Component({
  selector: 'rr-report-required-fields-dialog',
  templateUrl: './report-required-fields-dialog.component.html',
  styleUrls: ['./report-required-fields-dialog.component.scss']
})
export class ReportRequiredFieldsDialogComponent extends ResizableBaseComponent {
  data: IReportRequiredFieldsData;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public translate: TranslateService,
    private toastMessageService: ToastMessageService,
    private ipcMessageService: IpcMessageService,
    private loadingScreenService: LoadingScreenService
  ) {
    super();
    this.data = config.data;
  }

  confirm(): void {
    if (Object.values(this.data).some(v => !v)) {
      this.toastMessageService.showErrorToast(this.translate.instant('layout.reportRequiredFieldsDialog.inputIncompleteError'));
    } else {
      this.ref.close(true);
      this.loadingScreenService.startLoading();
      this.ipcMessageService.sendReportRequiredFields(false, this.data);
    }
  }

  cancel(): void {
    this.ref.close();
    this.ipcMessageService.sendReportRequiredFields(true);
  }
}
