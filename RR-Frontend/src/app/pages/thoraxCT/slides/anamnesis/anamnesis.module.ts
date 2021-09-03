import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { TranslateModule } from '@ngx-translate/core';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { DropdownModule } from 'primeng/dropdown';

import { AnamnesisComponent } from './anamnesis.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    RadioButtonModule,
    CheckboxModule,
    NumberInputModule,
    MonthYearInputModule,
    CommonImportsModule,
    DropdownModule,
    FindingColumnModule
  ],
  declarations: [AnamnesisComponent]
})
export class AnamnesisModule {}
