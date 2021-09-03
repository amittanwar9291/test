import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { SoftTissueComponent } from './soft-tissue.component';
import { ArticularEffusionComponent } from './articular-effusion/articular-effusion.component';
import { BursitisComponent } from './bursitis/bursitis.component';
import { NeuritisComponent } from './neuritis/neuritis.component';
import { AneurysmComponent } from './aneurysm/aneurysm.component';
import { SoftTissueTumorComponent } from './soft-tissue-tumor/soft-tissue-tumor.component';
import { HematomaComponent } from './hematoma/hematomas.component';
import { AbcessComponent } from './abcess/abcess.component';
import { CharacterizationOneComponent } from './soft-tissue-tumor/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './soft-tissue-tumor/characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent } from './soft-tissue-tumor/differential-diagnosis/differential-diagnosis.component';

@NgModule({
  declarations: [
    SoftTissueComponent,
    ArticularEffusionComponent,
    BursitisComponent,
    NeuritisComponent,
    AneurysmComponent,
    SoftTissueTumorComponent,
    HematomaComponent,
    AbcessComponent,
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
    CheckboxModule,
    NumberInputModule,
    TabViewModule,
    SliderNumberTripleInputModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule
  ]
})
export class SoftTissueModule {}
