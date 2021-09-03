import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { RadioButtonModule } from 'primeng/radiobutton';

import { CalendarInputModule } from '../../controls/calendar-input/calendar-input.module';
import { ReportRequiredFieldsDialogComponent } from './report-required-fields-dialog.component';

@NgModule({
  declarations: [ReportRequiredFieldsDialogComponent],
  imports: [CommonModule, FormsModule, DynamicDialogModule, TranslateModule, CalendarInputModule, RadioButtonModule],
  exports: [ReportRequiredFieldsDialogComponent]
})
export class ReportRequiredFieldsDialogModule {}
