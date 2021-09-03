import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';

import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { LarynxComponent } from './larynx.component';
import { AcuteEpiglottitisComponent } from './acute-epiglottitis/acute-epiglottitis.component';
import { TraumaComponent } from './trauma/trauma.component';
import { MassComponent } from './mass/mass.component';
import { CharacterizationOneComponent } from './mass/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './mass/characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent } from './mass/differential-diagnosis/differential-diagnosis.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { CharacterizationComponent } from './trauma/characterization/characterization.component';
import { ComplicationReferenceImageComponent } from './trauma/complication-reference-image/complication-reference-image.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    LarynxComponent,
    MassComponent,
    AcuteEpiglottitisComponent,
    TraumaComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    DifferentialDiagnosisComponent,
    CharacterizationComponent,
    ComplicationReferenceImageComponent
  ],
  exports: [MassComponent],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    CommonImportsModule,
    FindingColumnModule,
    CheckboxModule,
    TranslateModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    NumberInputModule,
    SliderNumberTripleInputModule,
    ReferencePictureModule,
    DropdownModule
  ]
})
export class LarynxModule {}
