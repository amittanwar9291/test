import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';

import { ImportReportModuleSelectionDialogComponent } from './import-report-module-selection-dialog.component';
import { PresetListModule } from '@sharedPages/preset-list/preset-list.module';

@NgModule({
  declarations: [ImportReportModuleSelectionDialogComponent],
  imports: [CommonModule, FormsModule, DynamicDialogModule, TranslateModule, DropdownModule, PresetListModule],
  exports: [ImportReportModuleSelectionDialogComponent]
})
export class ImportReportModuleSelectionDialogModule {}
