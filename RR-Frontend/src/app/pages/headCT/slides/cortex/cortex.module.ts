import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CortexComponent } from './cortex.component';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { FocalComponent } from './focal/focal.component';
import { DiffuseComponent } from './diffuse/diffuse.component';
import { LocalizationComponent } from './shared/localization/localization.component';
import { DifferentialDiagnosisComponent } from './shared/differential-diagnosis/differential-diagnosis.component';
import { FocalCharacterizationOneComponent } from './focal/characterization-one.component.ts/focal-characterization-one.component';
import { FocalCharacterizationTwoComponent } from './focal/characterization-two.component.ts/focal-characterization-two.component';
import { DiffuseCharacterizationOneComponent } from './diffuse/characterization-one.component.ts/diffuse-characterization-one.component';
import { DiffuseCharacterizationTwoComponent } from './diffuse/characterization-two.component.ts/diffuse-characterization-two.component';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { CheckboxModule } from 'primeng/checkbox';
import { HeadMRTSharedModule } from '@sharedPages/head/head-mrt-shared.module';

@NgModule({
  declarations: [
    CortexComponent,
    LocalizationComponent,
    DifferentialDiagnosisComponent,
    FocalComponent,
    FocalCharacterizationOneComponent,
    FocalCharacterizationTwoComponent,
    DiffuseComponent,
    DiffuseCharacterizationOneComponent,
    DiffuseCharacterizationTwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    FindingColumnModule,
    TabViewModule,
    DropdownModule,
    DifferentialDiagnosisDropdownModule,
    NumberInputModule,
    CheckboxModule,
    HeadMRTSharedModule
  ]
})
export class CortexModule {}
