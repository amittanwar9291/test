import { NgModule } from '@angular/core';
import { ImportReportStudySelectionDialogComponent } from './import-report-study-selection-dialog.component';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ImportReportStudySelectionDialogComponent],
  imports: [CommonModule, FormsModule, TranslateModule, ListboxModule],
  exports: [ImportReportStudySelectionDialogComponent],
  providers: [DatePipe]
})
export class ImportReportStudySelectionDialogModule {}
