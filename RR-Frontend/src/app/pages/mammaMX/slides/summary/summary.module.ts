import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';
import { PageCorrelationModule } from '@controls/page-correlation/page-correlation.module';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { SummaryComponent } from './summary.component';
import { BiRadsComponent } from './bi-rads/bi-rads.component';
@NgModule({
  declarations: [SummaryComponent, BiRadsComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SliderNumberInputModule,
    PageCorrelationModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    CommonImportsModule
  ]
})
export class SummaryModule {}
