import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectumComponent } from './rectum.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { CheckboxModule } from 'primeng/checkbox';

import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { RectalCarcinomaComponent } from './rectal-carcinoma/rectal-carcinoma.component';
import { CharacterizationOneComponent } from './rectal-carcinoma/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './rectal-carcinoma/characterization-two/characterization-two.component';
import { PelvisLocalizersModule } from '../../shared/pelvis.localizers.module';
import { SigmoidDiverticulosisComponent } from './sigmoid-diverticulosis/sigmoid-diverticulosis.component';
import { SigmoidCharacterizationOneComponent } from './sigmoid-diverticulosis/characterization-one/characterization-one.component';
import { SigmoidCharacterizationTwoComponent } from './sigmoid-diverticulosis/characterization-two/characterization-two.component';
import { ChronicInflammatoryCharacterizationOneComponent } from './chronic-inflammatory-bowel-disease/chronic-inflammatory-characterization-one/chronic-inflammatory-characterization-one.component';
import { ChronicInflammatoryCharacterizationTwoComponent } from './chronic-inflammatory-bowel-disease/chronic-inflammatory-characterization-two/chronic-inflammatory-characterization-two.component';
import { ChronicInflammatoryBowelDiseaseComponent } from './chronic-inflammatory-bowel-disease/chronic-inflammatory-bowel-disease.component';
import { AppendicitisComponent } from './appendicitis/appendicitis.component';
import { AppengicitisCharacterizationOneComponent } from './appendicitis/characterization-one/characterization-one.component';
import { AppengicitisCharacterizationTwoComponent } from './appendicitis/characterization-two/characterization-two.component';
import { SigmaMassComponent } from './sigma-mass/sigma-mass.component';
import { SigmaMassCharacterizationOneComponent } from './sigma-mass/sigma-mass-characterization-one/sigma-mass-characterization-one.component';
import { SigmaMassDifferentialDiagnosisComponent } from './sigma-mass/sigma-mass-differential-diagnosis/sigma-mass-differential-diagnosis.component';
import { SigmaMassCharacterizationTwoComponent } from './sigma-mass/sigma-mass-characterization-two/sigma-mass-characterization-two.component';
import { AcuteEpiploicAppendagitisComponent } from './acute-epiploic-appendagitis/acute-epiploic-appendagitis.component';
import { SigmoidVolvolusComponent } from './sigmoid-volvulus/sigmoid-volvulus.component';
import { FistulaComponent } from './fistula/fistula.component';
import { ComplexComponent } from './fistula/complex/complex.component';
import { KolovaginalComponent } from './fistula/kolovaginal/kolovaginal.component';
import { KolovesikalComponent } from './fistula/kolovesikal/kolovesikal.component';
import { PerianalComponent } from './fistula/perianal/perianal.component';
import { PilonidalSinusComponent } from './fistula/pilonidal-sinus/pilonidal-sinus.component';
import { RectovaginalAnovaginalComponent } from './fistula/rectovaginal-anovaginal/rectovaginal-anovaginal.component';
import { VesicocervicalComponent } from './fistula/vesicocervical/vesicocervical.component';
import { VesicovaginalComponent } from './fistula/vesicovaginal/vesicovaginal.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    FindingColumnModule,
    TabViewModule,
    CheckboxModule,
    NumberInputModule,
    DropdownModule,
    PelvisLocalizersModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    RectumComponent,
    RectalCarcinomaComponent,
    SigmoidDiverticulosisComponent,
    ChronicInflammatoryBowelDiseaseComponent,
    AppendicitisComponent,
    AppengicitisCharacterizationOneComponent,
    AppengicitisCharacterizationTwoComponent,
    AcuteEpiploicAppendagitisComponent,
    SigmoidVolvolusComponent,
    FistulaComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    SigmaMassComponent,
    SigmaMassCharacterizationOneComponent,
    SigmaMassCharacterizationTwoComponent,
    SigmaMassDifferentialDiagnosisComponent,
    ChronicInflammatoryCharacterizationOneComponent,
    ChronicInflammatoryCharacterizationTwoComponent,
    SigmoidCharacterizationOneComponent,
    SigmoidCharacterizationTwoComponent,
    ComplexComponent,
    KolovaginalComponent,
    KolovesikalComponent,
    PerianalComponent,
    PilonidalSinusComponent,
    RectovaginalAnovaginalComponent,
    VesicocervicalComponent,
    VesicovaginalComponent
  ]
})
export class RectumModule {}
