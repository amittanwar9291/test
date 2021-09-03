import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';

import { BonesComponent } from './bones.component';

import { DynamicBaseModule } from '@abstractions/dynamic-base/dynamic-base.module';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { KneeLocalizersModule } from '../../shared/knee-localizers.module';

import { DescriptionTypeModule } from '@controls/description-type/description-type.module';
import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';

import { FractureDistalFemurFindingComponent } from './fracture-distal-femur/fracture-distal-femur.component';
import { FractureTibiaAndFibulaFindingComponent } from './fracture-tibia-proximal/fracture-tibia-proximal.component';
import { FracturePatellaComponent } from './fracture-patella/fracture-patella.component';
import { BoneMarrowEdemaFindingComponent } from './bone-marrow-edema-finding/bone-marrow-edema-finding.component';
import { OsteomyelitisComponent } from './osteomyelitis/osteomyelitis.component';
import { StandardVariantComponent } from './standard-variant/standard-variant.component';
import { EpiphysealJointFractureComponent } from './epiphyseal-joint-fracture/epiphyseal-joint-fracture.component';
import { FibulaProximalComponent } from './fibula-proximal/fibula-proximal.component';
import { BonesTumorComponent } from './bones-tumor/bones-tumor.component';
import { LocalizationComponent } from './bones-tumor/localization/localization.component';
import { CharacterizationOneComponent } from './bones-tumor/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './bones-tumor/characterization-two/characterization-two.component';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    MultiValueDropdownModule,
    DynamicBaseModule,
    DescriptionTypeModule,
    TabViewModule,
    CommonImportsModule,
    KneeLocalizersModule,
    NumberInputModule,
    FindingColumnModule,
    SignalSliderModule,
    InfoIconModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    BonesComponent,
    FractureDistalFemurFindingComponent,
    FractureTibiaAndFibulaFindingComponent,
    FracturePatellaComponent,
    BoneMarrowEdemaFindingComponent,
    OsteomyelitisComponent,
    StandardVariantComponent,
    EpiphysealJointFractureComponent,
    FibulaProximalComponent,
    BonesTumorComponent,
    LocalizationComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent
  ]
})
export class BonesModule {}
