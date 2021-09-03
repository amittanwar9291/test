import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningReportDialogComponent } from './warning-report-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [WarningReportDialogComponent],
  imports: [CommonModule, TranslateModule]
})
export class WarningReportDialogModule {}
