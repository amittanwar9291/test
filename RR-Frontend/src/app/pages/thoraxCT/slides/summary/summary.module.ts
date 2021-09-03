import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { SummaryComponent } from './summary.component';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    CommonImportsModule,
    NumberInputModule,
    SliderNumberInputModule,
    InfoIconModule,
    DropdownModule
  ],
  declarations: [SummaryComponent]
})
export class SummaryModule {}
