import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { BonesComponent } from './bones.component';
import { FractureClaviculaComponent } from './fracture-clavicula/fracture-clavicula.component';
import { FractureScapulaComponent } from './fracture-scapula/fracture-scapula.component';
import { FractureRibsComponent } from './fracture-ribs/fracture-ribs.component';
import { FractureSternumComponent } from './fracture-sternum/fracture-sternum.component';
import { FractureSpineComponent } from './fracture-spine/fracture-spine.component';
import { MassAllComponent } from './mass-all/mass-all.component';
import { DifferentialDiagnosisTabComponent } from './mass-all/mass-tabs/differential-diagnosis-tab/differential-diagnosis-tab.component';
import { SpineLocalizersModule } from '../../../spineMRT/shared/spine-localizers.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { CharcterizationOneTabComponent } from './mass-all/mass-tabs/charcterization-one-tab/charcterization-one-tab.component';
import { CharcterizationTwoTabComponent } from './mass-all/mass-tabs/charcterization-two-tab/charcterization-two-tab.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { ThoraxSharedLocalizersModule } from '@sharedPages/thorax/localizers/thorax-shared-localizers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    RadioButtonModule,
    InfoIconModule,
    CommonImportsModule,
    CheckboxModule,
    SpineLocalizersModule,
    TabViewModule,
    DropdownModule,
    NumberInputModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule,
    ThoraxSharedLocalizersModule
  ],
  declarations: [
    BonesComponent,
    FractureClaviculaComponent,
    FractureScapulaComponent,
    FractureRibsComponent,
    FractureSternumComponent,
    FractureSpineComponent,
    DifferentialDiagnosisTabComponent,
    MassAllComponent,
    CharcterizationOneTabComponent,
    CharcterizationTwoTabComponent
  ]
})
export class BonesModule {}
