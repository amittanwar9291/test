import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { ThoraxCTLocalizersModule } from '../../shared/thoraxCT-localizers.module';

import { NumberInputModule } from '@controls/number-input/number-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';

import { MediastinumComponent } from './mediastinum.component';

import {
  LymphNodesComponent,
  CardioPulmonaryArteriesComponent,
  CardioHeartComponent,
  CardioThoracicAortaComponent,
  EsuphagusComponent,
  TracheaComponent,
  SpaceRequirementComponent,
  AdditionalCharacteristicsComponent,
  DifferentialDiagnosisTabComponent,
  MainCharacteristicsComponent
} from '.';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { MediastinumFindingComponent } from './mediastinum-finding/mediastinum-finding.component';
import { CharacterizationComponent } from './cardio-pulmonary-arteries/characterization/characterization.component';
import { DiagnosisComponent } from './cardio-pulmonary-arteries/diagnosis/diagnosis.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    RadioButtonModule,
    CommonImportsModule,
    NumberInputModule,
    CheckboxModule,
    InfoIconModule,
    TabViewModule,
    ThoraxCTLocalizersModule,
    DropdownModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    MediastinumComponent,
    LymphNodesComponent,
    CardioPulmonaryArteriesComponent,
    CardioHeartComponent,
    CardioThoracicAortaComponent,
    EsuphagusComponent,
    TracheaComponent,
    SpaceRequirementComponent,
    MainCharacteristicsComponent,
    AdditionalCharacteristicsComponent,
    DifferentialDiagnosisTabComponent,
    MediastinumFindingComponent,
    CharacterizationComponent,
    DiagnosisComponent
  ]
})
export class MediastinumModule {}
