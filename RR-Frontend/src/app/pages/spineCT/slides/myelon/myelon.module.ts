import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';

import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { SpineSharedLocalizersModule } from 'app/pages/shared/spine/localizers/spine-shared-localizers.module';

import { SpinalCanalStenosisComponent } from './spinal-canal-stenosis/spinal-canal-stenosis.component';
import { CharacterizationOneComponent } from './mass/characterization-one/characterization-one.component';
import { CharacteriaztionTwoComponent } from './mass/characteriaztion-two/characteriaztion-two.component';
import { TabViewModule } from 'primeng/tabview';
import { DifferentialDiagnosisComponent } from './mass/differential-diagnosis/differential-diagnosis.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { SpineLocalizersModule } from '../../../spineMRT/shared/spine-localizers.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { MyelonComponent } from './myelon.component';
import { MyelonMassComponent } from './mass/mass.component';

@NgModule({
  declarations: [
    MyelonComponent,
    MyelonMassComponent,
    SpinalCanalStenosisComponent,
    CharacterizationOneComponent,
    CharacteriaztionTwoComponent,
    DifferentialDiagnosisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    DynamicComponentWrapperModule,
    NumberInputModule,
    CommonImportsModule,
    SpineSharedLocalizersModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    SpineLocalizersModule,
    FindingColumnModule
  ]
})
export class MyelonModule {}
