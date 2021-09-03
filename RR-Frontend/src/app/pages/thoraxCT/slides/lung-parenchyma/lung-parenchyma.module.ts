import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';

import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { LungParenchymaComponent } from './lung-parenchyma.component';
import { ThoraxCTLocalizersModule } from '../../shared/thoraxCT-localizers.module';
import { DropdownModule } from 'primeng/dropdown';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { CharacterizationOneTabComponent } from './nodule-mass/characterization-one-tab/characterization-one-tab.component';
import { NoduleCharacterizationTwoTabComponent } from './nodule-mass/nodule-characterization-two-tab/nodule-characterization-two-tab.component';
import { DifferentialDiagnosisTabComponent } from './nodule-mass/differential-diagnosis-tab/differential-diagnosis-tab.component';
import { MassCharacterizationTwoTabComponent } from './nodule-mass/mass-characterization-two-tab/mass-characterization-two-tab.component';
import { AtelectasisComponent } from './atelectasis/atelectasis.component';
import { ConsolidationComponent } from './consolidation/consolidation.component';
import { NoduleMassComponent } from './nodule-mass/nodule-mass.component';
import { PulmonaryInfarctionComponent } from './pulmonary-infarction/pulmonary-infarction.component';
import { ConsolidationCharacterizationOneTabComponent } from './consolidation/consolidation-characterization-one-tab/consolidation-characterization-one-tab.component';
import { ConsolidationCharacterizationTwoTabComponent } from './consolidation/consolidation-characterization-two-tab/consolidation-characterization-two-tab.component';
import { ConsolidationDifferentialDiagnosisTabComponent } from './consolidation/consolidation-differential-diagnosis-tab/consolidation-differential-diagnosis-tab.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { ThoraxSharedLocalizersModule } from '@sharedPages/thorax/localizers/thorax-shared-localizers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    PresetListModule,
    CommonImportsModule,
    InfoIconModule,
    NumberInputModule,
    TabViewModule,
    ThoraxCTLocalizersModule,
    DropdownModule,
    FindingColumnModule,
    ReferencePictureModule,
    DifferentialDiagnosisDropdownModule,
    ThoraxSharedLocalizersModule
  ],
  declarations: [
    LungParenchymaComponent,
    CharacterizationOneTabComponent,
    NoduleCharacterizationTwoTabComponent,
    DifferentialDiagnosisTabComponent,
    MassCharacterizationTwoTabComponent,
    AtelectasisComponent,
    ConsolidationComponent,
    PulmonaryInfarctionComponent,
    NoduleMassComponent,
    ConsolidationCharacterizationOneTabComponent,
    ConsolidationCharacterizationTwoTabComponent,
    ConsolidationDifferentialDiagnosisTabComponent
  ]
})
export class LungParenchymaModule {}
