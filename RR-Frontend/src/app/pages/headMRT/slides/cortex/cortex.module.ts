import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { DropdownModule } from 'primeng/dropdown';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { CortexComponent } from './cortex.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { FocalComponent } from './focal/focal.component';
import { DiffuseComponent } from './diffuse/diffuse.component';
import { FocalCharacterizationOneComponent } from './focal/characterization-one/focal-characterization-one.component';
import { FocalCharacterizationTwoComponent } from './focal/characterization-two/focal-characterization-two.component';
import { DiffuseCharacterizationOneComponent } from './diffuse/characterization-one/diffuse-characterization-one.component';
import { DiffuseCharacterizationTwoComponent } from './diffuse/characterization-two/diffuse-characterization-two.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { LocalizationComponent } from './shared/localization/localization.component';
import { DifferentialDiagnosisComponent } from './shared/differential-diagnosis/differential-diagnosis.component';
import { HeadMRTSharedModule } from '@sharedPages/head/head-mrt-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    FindingColumnModule,
    TabViewModule,
    DropdownModule,
    DifferentialDiagnosisDropdownModule,
    NumberInputModule,
    SignalSliderModule,
    SliderNumberTripleInputModule,
    CheckboxModule,
    HeadMRTSharedModule
  ],
  declarations: [
    CortexComponent,
    FocalComponent,
    DiffuseComponent,
    FocalCharacterizationOneComponent,
    FocalCharacterizationTwoComponent,
    DiffuseCharacterizationOneComponent,
    DiffuseCharacterizationTwoComponent,
    LocalizationComponent,
    DifferentialDiagnosisComponent
  ]
})
export class CortexModule {}
