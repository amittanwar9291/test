import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';

import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

import { SoftTissueComponent } from './soft-tissue.component';
import { ArticularEffusionComponent } from './articular-effusion/articular-effusion.component';
import { MorelLavalleeLesionComponent } from './morel-lavallee-lesion/morel-lavallee-lesion.component';
import { VesselsComponent } from './vessels/vessels.component';
import { OtherPathologiesComponent } from './other-pathologies/other-pathologies.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { HematomaComponent } from './hematoma/hematoma.component';
import { AbscessComponent } from './abscess/abscess.component';
import { SoftTissueMassComponent } from './soft-tissue-mass/soft-tissue-mass.component';
import { TabViewModule } from 'primeng/tabview';
import { CharacterizationOneComponent } from './soft-tissue-mass/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './soft-tissue-mass/characterization-two/characterization-two.component';
import { CharacterizationThreeComponent } from './soft-tissue-mass/characterization-three/characterization-three.component';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    RadioButtonModule,
    CheckboxModule,
    TranslateModule,
    NumberInputModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule,
    DropdownModule,
    TabViewModule,
    SliderNumberTripleInputModule
  ],
  declarations: [
    SoftTissueComponent,
    ArticularEffusionComponent,
    MorelLavalleeLesionComponent,
    VesselsComponent,
    OtherPathologiesComponent,
    HematomaComponent,
    AbscessComponent,
    SoftTissueMassComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    CharacterizationThreeComponent
  ]
})
export class SoftTissueModule {}
