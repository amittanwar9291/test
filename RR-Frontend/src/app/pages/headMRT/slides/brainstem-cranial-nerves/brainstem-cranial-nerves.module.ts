import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrainstemCranialNervesComponent } from './brainstem-cranial-nerves.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { BrainstemComponent } from './brainstem/brainstem.component';
import { CranialNervesComponent } from './cranial-nerves/cranial-nerves.component';
import { TabViewModule } from 'primeng/tabview';
import { LokalisationOneComponent } from './brainstem/lokalisation-one/lokalisation-one.component';
import { DifferentialDiagnoseOneComponent } from './brainstem/differential-diagnose-one/differential-diagnose-one.component';
import { LokalisationTwoComponent } from './cranial-nerves/lokalisation-two/lokalisation-two.component';
import { DifferentialDiagnoseTwoComponent } from './cranial-nerves/differential-diagnose-two/differential-diagnose-two.component';
import { DropdownModule } from 'primeng/dropdown';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { CharacterizationOneBrainstemComponent } from './brainstem/characterization-one-brainstem/characterization-one-brainstem.component';
import { CharacterizationTwoBrainstemComponent } from './brainstem/characterization-two-brainstem/characterization-two-brainstem.component';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { CharacterizationOneCranialNervesComponent } from './cranial-nerves/characterization-one-cranial-nerves/characterization-one-cranial-nerves.component';
import { CharacterizationTwoCranialNervesComponent } from './cranial-nerves/characterization-two-cranial-nerves/characterization-two-cranial-nerves.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';

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
    DropdownModule,
    DifferentialDiagnosisDropdownModule,
    MultiValueDropdownModule,
    SignalSliderModule,
    SliderNumberTripleInputModule,
    NumberInputModule
  ],
  declarations: [
    BrainstemCranialNervesComponent,
    BrainstemComponent,
    CranialNervesComponent,
    LokalisationOneComponent,
    DifferentialDiagnoseOneComponent,
    LokalisationTwoComponent,
    DifferentialDiagnoseTwoComponent,
    CharacterizationOneBrainstemComponent,
    CharacterizationTwoBrainstemComponent,
    CharacterizationOneCranialNervesComponent,
    CharacterizationTwoCranialNervesComponent
  ]
})
export class BrainstemCranialNervesModule {}
