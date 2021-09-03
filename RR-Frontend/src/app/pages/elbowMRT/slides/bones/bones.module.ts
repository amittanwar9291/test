import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { BonesComponent } from './bones.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { StandardVariantComponent } from './standard-variant/standard-variant.component';
import { FractureComponent } from './fracture/fracture.component';
import { RadialHeadComponent } from './fracture/radial-head/radial-head.component';
import { ProximalUlnaComponent } from './fracture/proximal-ulna/proximal-ulna.component';
import { DistalHumerusComponent } from './fracture/distal-humerus/distal-humerus.component';
import { BoneMarrowEdemaComponent } from './bone-marrow-edema/bone-marrow-edema.component';
import { DislocationComponent } from './dislocation/dislocation.component';
import { ArthrosisComponent } from './arthrosis/arthrosis.component';
import { OsteomyelitisComponent } from './osteomyelitis/osteomyelitis.component';
import { TumourComponent } from './tumour/tumour.component';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DiaphysealRadiusComponent } from './fracture/diaphyseal-radius/diaphyseal-radius.component';
import { DiaphysealUlnaComponent } from './fracture/diaphyseal-ulna/diaphyseal-ulna.component';
import { LocalizationComponent } from './tumour/localization/localization.component';
import { CharacterizationOneComponent } from './tumour/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './tumour/characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent } from './tumour/differential-diagnosis/differential-diagnosis.component';

@NgModule({
  declarations: [
    BonesComponent,
    StandardVariantComponent,
    FractureComponent,
    RadialHeadComponent,
    ProximalUlnaComponent,
    DistalHumerusComponent,
    BoneMarrowEdemaComponent,
    DislocationComponent,
    ArthrosisComponent,
    OsteomyelitisComponent,
    TumourComponent,
    DiaphysealRadiusComponent,
    DiaphysealUlnaComponent,
    LocalizationComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    DifferentialDiagnosisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    DropdownModule,
    CheckboxModule,
    InfoIconModule,
    NumberInputModule,
    TabViewModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule,
    SignalSliderModule
  ]
})
export class BonesModule {}
