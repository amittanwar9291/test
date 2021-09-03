import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { FeetLocalizersModule } from '../../shared/feet-localizers.module';
import { AbscessComponent } from './abscess/abscess.component';
import { BursitisComponent } from './bursitis/bursitis.component';
import { CharacterizationOneCharcotFootComponent } from './charcot-foot/characterization-one-charcot-foot/characterization-one-charcot-foot.component';
import { CharacterizationTwoCharcotFootComponent } from './charcot-foot/characterization-two-charcot-foot/characterization-two-charcot-foot.component';
import { CharcotFootComponent } from './charcot-foot/charcot-foot.component';
import { CharacterizationOneFocalMassComponent } from './disease-synovia-focal-mass/characterization-one-focal-mass/characterization-one-focal-mass.component';
import { CharacterizationTwoFocalMassComponent } from './disease-synovia-focal-mass/characterization-two-focal-mass/characterization-two-focal-mass.component';
import { DiseaseSynoviaFocalMassComponent } from './disease-synovia-focal-mass/disease-synovia-focal-mass.component';
import { DiseaseSynoviaSynovitisComponent } from './disease-synovia-synovitis/disease-synovia-synovitis.component';
import { DiseasesOfMtpComponent } from './diseases-of-mtp/diseases-of-mtp.component';
import { EffusionComponent } from './effusion/effusion.component';
import { HematomaComponent } from './hematoma/hematoma.component';
import { CharacterizationOneMuscleLesionComponent } from './muscle-lesion/characterization-one-muscle-lesion/characterization-one-muscle-lesion.component';
import { CharacterizationTwoMuscleLesionComponent } from './muscle-lesion/characterization-two-muscle-lesion/characterization-two-muscle-lesion.component';
import { MuscleLesionComponent } from './muscle-lesion/muscle-lesion.component';
import { PlantarFascialComponent } from './plantar-fascial/plantar-fascial.component';
import { StLocalizationComponent } from './soft-tissue-tumor/st-localization/st-localization.component';
import { CharacterizationTwoComponent } from './soft-tissue-tumor/characterization-two/characterization-two.component';
import { CharacterizationOneComponent } from './soft-tissue-tumor/characterization-one/characterization-one.component';
import { SoftTissueTumorComponent } from './soft-tissue-tumor/soft-tissue-tumor.component';
import { SoftTissueComponent } from './soft-tissue.component';
import { TibialStressSyndromeComponent } from './tibial-stress-syndrome/tibial-stress-syndrome.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  declarations: [
    SoftTissueComponent,
    EffusionComponent,
    HematomaComponent,
    PlantarFascialComponent,
    DiseasesOfMtpComponent,
    BursitisComponent,
    SoftTissueTumorComponent,
    StLocalizationComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    DiseaseSynoviaSynovitisComponent,
    DiseaseSynoviaFocalMassComponent,
    CharacterizationOneFocalMassComponent,
    CharacterizationTwoFocalMassComponent,
    MuscleLesionComponent,
    CharacterizationOneMuscleLesionComponent,
    CharacterizationTwoMuscleLesionComponent,
    CharcotFootComponent,
    CharacterizationOneCharcotFootComponent,
    CharacterizationTwoCharcotFootComponent,
    TibialStressSyndromeComponent,
    AbscessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    FeetLocalizersModule,
    CheckboxModule,
    NumberInputModule,
    DropdownModule,
    TabViewModule,
    SliderNumberTripleInputModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule
  ]
})
export class SoftTissueModule {}
