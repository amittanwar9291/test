import { NgModule } from '@angular/core';
import { CancelReportDialogComponent } from './cancel-report-dialog.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [CancelReportDialogComponent]
})
export class CancelReportDialogModule {}
