import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnamnesisComponent } from './anamnesis.component';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { NumberInputModule } from '@controls/number-input/number-input.module';
import { MonthYearInputModule } from 'app/shared/controls/month-year-input/month-year-input.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DetailsTypeComponent } from './details-type/details-type.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    NumberInputModule,
    MonthYearInputModule,
    CommonImportsModule,
    FindingColumnModule
  ],
  declarations: [AnamnesisComponent, DetailsTypeComponent]
})
export class AnamnesisModule {}
