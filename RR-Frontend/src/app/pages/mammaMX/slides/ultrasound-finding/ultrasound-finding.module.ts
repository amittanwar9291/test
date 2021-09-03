import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

import { MammaSharedLocalizersModule } from '@sharedPages/mamma/localizers/mamma-shared-localizers.module';

import { UltrasoundFindingComponent } from './ultrasound-finding.component';
import { CalcificationComponent } from './calcification/calcification.component';
import { MassComponent } from './mass/mass.component';
import { CharacterizationOneComponent } from './mass/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './mass/characterization-two/characterization-two.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    TranslateModule,
    RadioButtonModule,
    FindingColumnModule,
    TabViewModule,
    CheckboxModule,
    MammaSharedLocalizersModule,
    NumberInputModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    UltrasoundFindingComponent,
    CalcificationComponent,
    MassComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent
  ]
})
export class UltrasoundFindingModule {}
