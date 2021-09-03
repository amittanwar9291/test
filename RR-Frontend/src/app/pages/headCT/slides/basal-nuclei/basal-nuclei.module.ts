import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasalNucleiComponent } from './basal-nuclei.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { PathologyComponent } from './pathology/pathology.component';
import { PathologyLocalizationComponent } from './pathology/localization/localization.component';
import { PathologyDifferentialDiagnosisComponent } from './pathology/differential-diagnosis/differential-diagnosis.component';
import { CharacterizationOneComponent } from './pathology/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './pathology/characterization-two/characterization-two.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { HeadMRTSharedModule } from '@sharedPages/head/head-mrt-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    CheckboxModule,
    FindingColumnModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    DropdownModule,
    NumberInputModule,
    SignalSliderModule,
    SliderNumberTripleInputModule,
    HeadMRTSharedModule
  ],
  declarations: [
    BasalNucleiComponent,
    PathologyComponent,
    PathologyLocalizationComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    PathologyDifferentialDiagnosisComponent
  ]
})
export class BasalNucleiModule {}
