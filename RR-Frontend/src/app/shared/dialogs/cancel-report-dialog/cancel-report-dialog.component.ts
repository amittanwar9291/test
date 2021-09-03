import { Component } from '@angular/core';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReportHttpService } from '@services/shared/navigation/report-http.service';
import { ReportStatus } from '@enums/shared/report-status.enum';
import { CancelMode } from '@enums/shared/cancel-mode.enum';

@Component({
  selector: 'rr-cancel-report-dialog',
  templateUrl: './cancel-report-dialog.component.html',
  styleUrls: ['./cancel-report-dialog.component.scss']
})
export class CancelReportDialogComponent extends ResizableBaseComponent {
  constructor(private ref: DynamicDialogRef, private config: DynamicDialogConfig, private reportHttpService: ReportHttpService) {
    super();
  }

  confirmSaveAndClose(): void {
    this.ref.close(CancelMode.SaveAndClose);
  }

  confirmCloseAndCancel(): void {
    this.reportHttpService
      .updateStatus(this.config.data.reportId, this.config.data.examinationType, ReportStatus.Canceled)
      .subscribe(_ => this.ref.close(CancelMode.CloseAndCancel));
  }

  cancel(): void {
    this.ref.close(CancelMode.None);
  }
}
