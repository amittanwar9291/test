import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  CapsuleAndLigamentsComponent,
  SynoviaMassComponent,
  LigamentousLesionComponent,
  SynoviaDiffusePathologyComponent,
  CharacterizationOneComponent,
  CharacterizationTwoComponent
} from '.';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';

import { TranslateModule } from '@ngx-translate/core';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    TranslateModule,
    PresetListModule,
    CommonImportsModule,
    InfoIconModule,
    NumberInputModule,
    TabViewModule,
    SliderNumberTripleInputModule,
    FindingColumnModule,
    SignalSliderModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    CapsuleAndLigamentsComponent,
    LigamentousLesionComponent,
    SynoviaMassComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    SynoviaDiffusePathologyComponent
  ]
})
export class CapsuleAndLigamentsModule {}
