import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { HandLocalizersModule } from '../../shared/hand-localizers.module';
import { ArthritisComponent } from './arthritis/arthritis.component';
import { AvascularNecrosisComponent } from './avascular-necrosis/avascular-necrosis.component';
import { BoneMarrowEdemaComponent } from './bone-marrow-edema/bone-marrow-edema.component';
import { BonesComponent } from './bones.component';
import { ComplexFracturesInvolvingSeveralBonesComponent } from './fracture/complex-fractures-involving-several-bones/complex-fractures-involving-several-bones.component';
import { DistalUlnaComponent } from './fracture/distal-ulna/distal-ulna.component';
import { DistalerRadiusComponent } from './fracture/distaler-radius/distaler-radius.component';
import { FractureComponent } from './fracture/fracture.component';
import { MetakarpaliaComponent } from './fracture/metakarpalia/metakarpalia.component';
import { OsCapitatumComponent } from './fracture/os-capitatum/os-capitatum.component';
import { OsHamatumComponent } from './fracture/os-hamatum/os-hamatum.component';
import { OsLunatumComponent } from './fracture/os-lunatum/os-lunatum.component';
import { OsPisiformeComponent } from './fracture/os-pisiforme/os-pisiforme.component';
import { OsScaphoideumComponent } from './fracture/os-scaphoideum/os-scaphoideum.component';
import { OsTrapeziumComponent } from './fracture/os-trapezium/os-trapezium.component';
import { OsTrapezoideumComponent } from './fracture/os-trapezoideum/os-trapezoideum.component';
import { OsTriquetrumComponent } from './fracture/os-triquetrum/os-triquetrum.component';
import { PhalangenComponent } from './fracture/phalangen/phalangen.component';
import { ImpactionAndImpingementSyndromeComponent } from './impaction-and-impingement-syndrome/impaction-and-impingement-syndrome.component';
import { RadioulnarComponent } from './impaction-and-impingement-syndrome/radioulnar-impingement/radioulnar.component';
import { UlnocarpalImpactionComponent } from './impaction-and-impingement-syndrome/ulnocarpal-impaction/ulnocarpal-impaction.component';
import { AccessoryCarpalBonesComponent } from './norm-variants-anomalies/accessory-carpal-bones/accessory-carpal-bones.component';
import { CarpalBonesDivisionComponent } from './norm-variants-anomalies/carpal-bones-division/carpal-bones-division.component';
import { CarpalCoalitionComponent } from './norm-variants-anomalies/carpal-coalition/carpal-coalition.component';
import { NormVariantsAnomaliesComponent } from './norm-variants-anomalies/norm-variants-anomalies.component';
import { NormVariantsOfOsLunatumComponent } from './norm-variants-anomalies/norm-variants-of-os-lunatum/norm-variants-of-os-lunatum.component';
import { OsteoarthritisComponent } from './osteoarthritis/osteoarthritis.component';
import { OsteomyelitisComponent } from './osteomyelitis/osteomyelitis.component';
import { ScaphoidPseudarthrosisComponent } from './scaphoid-pseudarthrosis/scaphoid-pseudarthrosis.component';
import { MassOsteolysisComponent } from './mass-osteolysis/mass-osteolysis.component';
import { LocalizationExtensionComponent } from './mass-osteolysis/localization-extension/localization-extension.component';
import { Characterization1Component } from './mass-osteolysis/characterization1/characterization1.component';
import { Characterization2Component } from './mass-osteolysis/characterization2/characterization2.component';
import { DifferentialDiagnosisComponent } from './mass-osteolysis/differential-diagnosis/differential-diagnosis.component';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    BmiCalculatorModule,
    RadioButtonModule,
    HandLocalizersModule,
    TabViewModule,
    DropdownModule,
    CheckboxModule,
    InfoIconModule,
    NumberInputModule,
    SignalSliderModule,
    DifferentialDiagnosisDropdownModule,
    FindingColumnModule,
    ReferencePictureModule
  ],
  declarations: [
    BonesComponent,
    FractureComponent,
    AvascularNecrosisComponent,
    OsteoarthritisComponent,
    ArthritisComponent,
    ScaphoidPseudarthrosisComponent,
    ImpactionAndImpingementSyndromeComponent,
    NormVariantsAnomaliesComponent,
    MassOsteolysisComponent,
    DistalerRadiusComponent,
    DistalUlnaComponent,
    OsLunatumComponent,
    OsScaphoideumComponent,
    OsCapitatumComponent,
    OsHamatumComponent,
    OsTrapeziumComponent,
    OsPisiformeComponent,
    OsTriquetrumComponent,
    OsTrapezoideumComponent,
    MetakarpaliaComponent,
    PhalangenComponent,
    ComplexFracturesInvolvingSeveralBonesComponent,
    AccessoryCarpalBonesComponent,
    CarpalCoalitionComponent,
    NormVariantsOfOsLunatumComponent,
    CarpalBonesDivisionComponent,
    UlnocarpalImpactionComponent,
    RadioulnarComponent,
    BoneMarrowEdemaComponent,
    OsteomyelitisComponent,
    LocalizationExtensionComponent,
    Characterization1Component,
    Characterization2Component,
    DifferentialDiagnosisComponent
  ]
})
export class BonesModule {}
