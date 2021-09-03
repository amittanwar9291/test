import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { CalendarInputModule } from '@controls/calendar-input/calendar-input.module';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { MammaSharedLocalizersModule } from '@sharedPages/mamma/localizers/mamma-shared-localizers.module';

import { MedicalHistoryComponent } from './medical-history.component';
import { FamilyPersonComponent } from './family-person/family-person.component';
import { OwnMedicalHistoryComponent } from './own-medical-history/own-medical-history.component';
import { PreviousTherapiesComponent } from './previous-therapies/previous-therapies.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    MonthYearInputModule,
    FindingColumnModule,
    CalendarInputModule,
    MammaSharedLocalizersModule,
    TranslateModule,
    CommonImportsModule
  ],
  declarations: [MedicalHistoryComponent, FamilyPersonComponent, OwnMedicalHistoryComponent, PreviousTherapiesComponent]
})
export class MedicalHistoryModule {}
