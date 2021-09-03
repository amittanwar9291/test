import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportSummaryEditComponent } from './report-summary-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from '../../common-imports/common-imports.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ReportSummaryEditComponent],
  imports: [CommonModule, FormsModule, CommonImportsModule, TranslateModule],
  exports: [ReportSummaryEditComponent]
})
export class ReportSummaryEditModule {}
