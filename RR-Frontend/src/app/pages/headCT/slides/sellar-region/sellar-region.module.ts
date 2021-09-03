import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellarRegionComponent } from './sellar-region.component';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { CharacterizationOneComponent } from './characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent } from './differential-diagnosis/differential-diagnosis.component';
import { LocalizationComponent } from './localization/localization.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';

@NgModule({
  declarations: [
    SellarRegionComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    DifferentialDiagnosisComponent,
    LocalizationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    CheckboxModule,
    FindingColumnModule,
    DropdownModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    NumberInputModule
  ]
})
export class SellarRegionModule {}
