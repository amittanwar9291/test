import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { TranslateModule } from '@ngx-translate/core';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';

import {
  AdditionalCharacteristicsTabComponent,
  MammaSharedLocalizersModule,
  ChestWallAdditionalCharacteristicsComponent,
  ChestWallComponent,
  ChestWallDifferentialDiagnosisComponent,
  ChestWallMainCharacteristicsComponent,
  CommonImportsModule,
  DifferentialDiagnosisTabComponent,
  LymphNodesComponent,
  MainCharacteristicsTabComponent,
  MammaComponent,
  PleuralEffusionComponent,
  PleuralSpaceRequirementComponent,
  PleuralThickeningComponent,
  PleuraPneumothoraxComponent,
  SoftPartsComponent,
  SpineLocalizersModule,
  ThickeningDifferentialDiagnosisComponent,
  ThickeningMainCharacteristicsComponent
} from './index';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { LiverGallBladderComponent } from './liver-gall-bladder/liver-gall-bladder.component';
import { PancreasComponent } from './pancreas/pancreas.component';
import { KidneyAdrenalGlandComponent } from './kidney-adrenal-gland/kidney-adrenal-gland.component';
import { SpleenLymphnodesHiatusherniaComponent } from './spleen-lymphnodes-hiatushernia/spleen-lymphnodes-hiatushernia.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    RadioButtonModule,
    FindingColumnModule,
    NumberInputModule,
    CheckboxModule,
    TabViewModule,
    DropdownModule,
    CommonImportsModule,
    MammaSharedLocalizersModule,
    SpineLocalizersModule,
    InfoIconModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    SoftPartsComponent,
    PleuralEffusionComponent,
    PleuralSpaceRequirementComponent,
    PleuraPneumothoraxComponent,
    MammaComponent,
    MainCharacteristicsTabComponent,
    AdditionalCharacteristicsTabComponent,
    DifferentialDiagnosisTabComponent,
    PleuralThickeningComponent,
    ThickeningMainCharacteristicsComponent,
    ThickeningDifferentialDiagnosisComponent,
    ChestWallComponent,
    ChestWallMainCharacteristicsComponent,
    ChestWallAdditionalCharacteristicsComponent,
    ChestWallDifferentialDiagnosisComponent,
    LymphNodesComponent,
    LiverGallBladderComponent,
    PancreasComponent,
    KidneyAdrenalGlandComponent,
    SpleenLymphnodesHiatusherniaComponent
  ]
})
export class SoftPartsModule {}
