import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarInputModule } from '@controls/calendar-input/calendar-input.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    CheckboxModule,
    CalendarInputModule,
    NumberInputModule
  ]
})
export class SummaryModule {}
