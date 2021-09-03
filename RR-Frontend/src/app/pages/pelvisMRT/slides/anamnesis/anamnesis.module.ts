import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnamnesisComponent } from './anamnesis.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AnamnesisClinicComponent } from './anamnesis-clinic/anamnesis-clinic.component';
import { PreviousEingriffeComponent } from './previous-eingriffe/previous-eingriffe.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { CalendarInputModule } from '@controls/calendar-input/calendar-input.module';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    TabViewModule,
    CheckboxModule,
    DropdownModule,
    NumberInputModule,
    CalendarInputModule,
    RadioButtonModule,
    MonthYearInputModule,
    FindingColumnModule
  ],
  declarations: [AnamnesisComponent, AnamnesisClinicComponent, PreviousEingriffeComponent]
})
export class AnamnesisModule {}
