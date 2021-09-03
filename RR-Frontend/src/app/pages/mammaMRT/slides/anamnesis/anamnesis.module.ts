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

import { MammaSharedLocalizersModule } from '../../../shared/mamma/localizers/mamma-shared-localizers.module';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { AnamnesisComponent } from './anamnesis.component';

import { FamilyPersonComponent } from './family-person/family-person.component';
import { PreviousTherapiesComponent } from './previous-therapies/previous-therapies.component';
import { OwnAnamnesisComponent } from './own-anamnesis/own-anamnesis.component';

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
  declarations: [AnamnesisComponent, FamilyPersonComponent, PreviousTherapiesComponent, OwnAnamnesisComponent]
})
export class AnamnesisModule {}
