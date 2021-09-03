import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';

import { UpperArteriesComponent } from './upper-arteries.component';
import { UpperArteriesMultiComponent } from './upper-arteries-multi/upper-arteries-multi.component';
import { VascularPathologyDiffuseComponent } from './vascular-pathology-diffuse/vascular-pathology-diffuse.component';

import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

@NgModule({
  declarations: [UpperArteriesComponent, UpperArteriesMultiComponent, VascularPathologyDiffuseComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    InfoIconModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    TabViewModule,
    FindingColumnModule,
    DropdownModule,
    DifferentialDiagnosisDropdownModule
  ]
})
export class UpperArteriesModule {}
