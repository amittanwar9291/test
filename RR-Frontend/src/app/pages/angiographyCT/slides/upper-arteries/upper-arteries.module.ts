import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperArteriesComponent } from './upper-arteries.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

import { DropdownModule } from 'primeng/dropdown';

import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { UpperArteriesMultiComponent } from './upper-arteries-multi/upper-arteries-multi.component';
import { DiffuseVascularPathologyComponent } from './diffuse-vascular-pathology/diffuse-vascular-pathology.component';

@NgModule({
  declarations: [UpperArteriesComponent, UpperArteriesMultiComponent, DiffuseVascularPathologyComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    InfoIconModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    FindingColumnModule,
    DropdownModule,
    DifferentialDiagnosisDropdownModule
  ]
})
export class UpperArteriesModule {}
