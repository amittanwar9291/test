import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';

import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { NumberInputModule } from '@controls/number-input/number-input.module';

import { SpineSoftTissuesFindingDropdownModule } from '@sharedPages/spine/soft-tissues/spine-soft-tissues-finding-dropdown.module';
import { SpineSharedLocalizersModule } from '@sharedPages/spine/localizers/spine-shared-localizers.module';
import { ParaspinalMassComponent } from './paraspinal-mass/paraspinal-mass.component';
import { VesselsUreterComponent } from './vessels-ureter/vessels-ureter.component';
import { ParavertebralMusclesComponent } from './paravertebral-muscles/paravertebral-muscles.component';
import { LymphNodesComponent } from './lymph-nodes/lymph-nodes.component';
import { SoftTissuesComponent } from './soft-tissues.component';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { CharacterizationOneTabComponent } from './paraspinal-mass/characterization-one-tab/characterization-one-tab.component';
import { CharacterizationTwoTabComponent } from './paraspinal-mass/characterization-two-tab/characterization-two-tab.component';
import { DifferentialDiagnosisTabComponent } from './paraspinal-mass/differential-diagnosis-tab/differential-diagnosis-tab.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { LocalizationTabComponent } from './paravertebral-muscles/localization-tab/localization-tab.component';
import { CharacterizationTabComponent } from './paravertebral-muscles/characterization-tab/characterization-tab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    CommonImportsModule,
    PresetListModule,
    SpineSoftTissuesFindingDropdownModule,
    NumberInputModule,
    SpineSharedLocalizersModule,
    DropdownModule,
    TabViewModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule,
    ReferencePictureModule
  ],
  declarations: [
    SoftTissuesComponent,
    ParaspinalMassComponent,
    VesselsUreterComponent,
    ParavertebralMusclesComponent,
    LymphNodesComponent,
    CharacterizationOneTabComponent,
    CharacterizationTwoTabComponent,
    DifferentialDiagnosisTabComponent,
    LocalizationTabComponent,
    CharacterizationTabComponent
  ]
})
export class SoftTissuesModule {}
