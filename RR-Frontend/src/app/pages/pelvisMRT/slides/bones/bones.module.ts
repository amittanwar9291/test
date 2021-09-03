import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { BonesComponent } from './bones.component';
import { BursitisComponent } from './bursitis/bursitis.component';
import { ProximalFemurComponent } from './proximal-femur/proximal-femur.component';
import { FemoralShaftComponent } from './femoral-shaft/femoral-shaft.component';
import { AcetabulumComponent } from './acetabulum/acetabulum.component';
import { FracturePelvisComponent } from './fracture-pelvis/fracture-pelvis.component';
import { StressFractureComponent } from './stress-fracture/stress-fracture.component';
import { SubchondralInsufficiencyFractureComponent } from './subchondral-insufficiency-fracture/subchondral-insufficiency-fracture.component';
import { AvascularNecrosisComponent } from './avascular-necrosis/avascular-necrosis.component';
import { BoneMarrowEdemaComponent } from './bone-marrow-edema/bone-marrow-edema.component';
import { OsteitisPubisComponent } from './osteitis-pubis/osteitis-pubis.component';
import { CoxarthrosisComponent } from './coxarthrosis/coxarthrosis.component';
import { OsteomyelitisComponent } from './osteomyelitis/osteomyelitis.component';
import { TransientBoneMarrowEdemaComponent } from './transient-bone-marrow-edema/transient-bone-marrow-edema.component';
import { BonesTumorComponent } from './bones-tumor/bones-tumor.component';
import { CharacterizationOneComponent } from './bones-tumor/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './bones-tumor/characterization-two/characterization-two.component';
import { TumorLocalizationComponent } from './bones-tumor/tumor-localization/tumor-localization.component';
import { JointEffusionComponent } from './joint-effusion/joint-effusion.component';

import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { PelvisLocalizersModule } from '../../shared/pelvis.localizers.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DynamicComponentWrapperModule,
    CommonImportsModule,
    RadioButtonModule,
    CheckboxModule,
    TranslateModule,
    NumberInputModule,
    TabViewModule,
    SliderNumberInputModule,
    SignalSliderModule,
    InfoIconModule,
    DropdownModule,
    PelvisLocalizersModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    BonesComponent,
    BursitisComponent,
    AcetabulumComponent,
    AvascularNecrosisComponent,
    BoneMarrowEdemaComponent,
    BonesTumorComponent,
    TumorLocalizationComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    FemoralShaftComponent,
    OsteitisPubisComponent,
    CoxarthrosisComponent,
    OsteomyelitisComponent,
    FracturePelvisComponent,
    ProximalFemurComponent,
    StressFractureComponent,
    SubchondralInsufficiencyFractureComponent,
    TransientBoneMarrowEdemaComponent,
    JointEffusionComponent
  ]
})
export class BonesModule {}
