import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

import { NumberInputModule } from '@controls/number-input/number-input.module';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { AnamnesisComponent } from './anamnesis.component';
import { SimpleIndicationComponent } from './simple-indication/simple-indication.component';
import { LesionOfTendonsIndicationComponent } from './lesion-of-tendons-indication/lesion-of-tendons-indication.component';
import { TraumaIndicationComponent } from './trauma-indication/trauma-indication.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    DropdownModule,
    CheckboxModule,
    NumberInputModule,
    MonthYearInputModule,
    FindingColumnModule
  ],
  declarations: [AnamnesisComponent, SimpleIndicationComponent, LesionOfTendonsIndicationComponent, TraumaIndicationComponent]
})
export class AnamnesisModule {}
