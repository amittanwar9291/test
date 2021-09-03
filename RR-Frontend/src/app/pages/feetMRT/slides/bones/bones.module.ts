import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { StandardVariantComponent } from './standard-variant/standard-variant.component';
import { BonesComponent } from './bones.component';
import { FractureComponent } from './fracture/fracture.component';
import { TibiaComponent } from './fracture/tibia/tibia.component';
import { FibulaComponent } from './fracture/fibula/fibula.component';
import { MalleoliComponent } from './fracture/malleoli/malleoli.component';
import { TalusComponent } from './fracture/talus/talus.component';
import { CalcaneusComponent } from './fracture/calcaneus/calcaneus.component';
import { OsNavicularComponent } from './fracture/os-navicular/os-navicular.component';
import { OsCuneiformComponent } from './fracture/os-cuneiform/os-cuneiform.component';
import { OsMetatarsalComponent } from './fracture/os-metatarsal/os-metatarsal.component';
import { PhalanxComponent } from './fracture/phalanx/phalanx.component';
import { ComplexComponent } from './fracture/complex/complex.component';
import { BoneMarrowEdemaComponent } from './bone-marrow-edema/bone-marrow-edema.component';
import { DislocationComponent } from './dislocation/dislocation.component';
import { OsteochondralLesionComponent } from './osteochondral-lesion/osteochondral-lesion.component';
import { OsteoarthritisComponent } from './osteoarthritis/osteoarthritis.component';
import { FeetLocalizersModule } from '../../shared/feet-localizers.module';
import { ArthritisComponent } from './arthritis/arthritis.component';
import { OsteomyelitisComponent } from './osteomyelitis/osteomyelitis.component';
import { MassOsteolysisComponent } from './mass-osteolysis/mass-osteolysis.component';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { OsCuboideumComponent } from './fracture/os-cuboideum/os-cuboideum.component';
import { CharacterisationTwoComponent } from './mass-osteolysis/characterisation-two/characterisation-two.component';
import { DifferentialDiagnosisComponent } from './mass-osteolysis/differential-diagnosis/differential-diagnosis.component';
import { LocalisationComponent } from './mass-osteolysis/localisation/localisation.component';
import { CharacterisationOneComponent } from './mass-osteolysis/characterisation-one/characterisation-one.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  declarations: [
    BonesComponent,
    StandardVariantComponent,
    FractureComponent,
    TibiaComponent,
    FibulaComponent,
    MalleoliComponent,
    TalusComponent,
    CalcaneusComponent,
    OsNavicularComponent,
    OsCuneiformComponent,
    OsCuboideumComponent,
    OsMetatarsalComponent,
    PhalanxComponent,
    ComplexComponent,
    BoneMarrowEdemaComponent,
    DislocationComponent,
    OsteochondralLesionComponent,
    OsteoarthritisComponent,
    ArthritisComponent,
    OsteomyelitisComponent,
    MassOsteolysisComponent,
    CharacterisationOneComponent,
    CharacterisationTwoComponent,
    DifferentialDiagnosisComponent,
    LocalisationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    CheckboxModule,
    NumberInputModule,
    FeetLocalizersModule,
    DropdownModule,
    TabViewModule,
    SignalSliderModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule
  ]
})
export class BonesModule {}
