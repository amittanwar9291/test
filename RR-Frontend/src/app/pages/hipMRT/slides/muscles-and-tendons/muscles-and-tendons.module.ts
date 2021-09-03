import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { MusclesAndTendonsComponent } from './muscles-and-tendons.component';
import { MusculatureComponent } from './musculature/musculature.component';
import { TendonsComponent } from './tendons/tendons.component';
import { BursitisComponent } from './bursitis/bursitis.component';

@NgModule({
  declarations: [MusclesAndTendonsComponent, MusculatureComponent, TendonsComponent, BursitisComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    RadioButtonModule,
    CheckboxModule,
    TranslateModule,
    NumberInputModule,
    DropdownModule,
    SliderNumberTripleInputModule,
    FindingColumnModule
  ]
})
export class MusclesAndTendonsModule {}
