import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { HipLocalizersModule } from '../../shared/hip-localizers.module';
import { BonesComponent } from './bones.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { AvascularFemoralHeadNecrosisComponent } from './avascular-femoral-head-necrosis/avascular-femoral-head-necrosis.component';
import { BoneMarrowEdemaComponent } from './bone-marrow-edema/bone-marrow-edema.component';
import { CoxarthrosisComponent } from './coxarthrosis/coxarthrosis.component';
import { FractureAcetabulumComponent } from './fracture-acetabulum/fracture-acetabulum.component';
import { FractureFemoralHeadComponent } from './fracture-femoral-head/fracture-femoral-head.component';
import { FractureFemoralNeckComponent } from './fracture-femoral-neck/fracture-femoral-neck.component';
import { FractureFemoralShaftComponent } from './fracture-femoral-shaft/fracture-femoral-shaft.component';
import { FracturePelvisComponent } from './fracture-pelvis/fracture-pelvis.component';
import { MassOsteolysisComponent } from './mass-osteolysis/mass-osteolysis.component';
import { OsteitisPubisComponent } from './osteitis-pubis/osteitis-pubis.component';
import { OsteomyelitisComponent } from './osteomyelitis/osteomyelitis.component';
import { StressFractureComponent } from './stress-fracture/stress-fracture.component';
import { SubchondralInsufficiencyFractureComponent } from './subchondral-insufficiency-fracture/subchondral-insufficiency-fracture.component';
import { TransientBoneMarrowEdemaComponent } from './transient-bone-marrow-edema/transient-bone-marrow-edema.component';
import { CharacterizationOneComponent } from './mass-osteolysis/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './mass-osteolysis/characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent } from './mass-osteolysis/differential-diagnosis/differential-diagnosis.component';
import { LocalizationExpansionComponent } from './mass-osteolysis/localization-expansion/localization-expansion.component';

@NgModule({
  declarations: [
    BonesComponent,
    AlignmentComponent,
    AvascularFemoralHeadNecrosisComponent,
    BoneMarrowEdemaComponent,
    CoxarthrosisComponent,
    FractureAcetabulumComponent,
    FractureFemoralHeadComponent,
    FractureFemoralNeckComponent,
    FractureFemoralShaftComponent,
    FracturePelvisComponent,
    MassOsteolysisComponent,
    OsteitisPubisComponent,
    OsteomyelitisComponent,
    StressFractureComponent,
    SubchondralInsufficiencyFractureComponent,
    TransientBoneMarrowEdemaComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    DifferentialDiagnosisComponent,
    LocalizationExpansionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    RadioButtonModule,
    CheckboxModule,
    TranslateModule,
    NumberInputModule,
    TabViewModule,
    SliderNumberInputModule,
    DropdownModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule,
    ReferencePictureModule,
    HipLocalizersModule,
    SignalSliderModule
  ]
})
export class BonesModule {}
