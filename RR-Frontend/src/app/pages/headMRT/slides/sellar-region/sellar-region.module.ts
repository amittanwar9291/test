import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellarRegionComponent } from './sellar-region.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { LocalizationComponent } from './localization/localization.component';
import { DifferentialDiagnosisComponent } from './differential-diagnosis/differential-diagnosis.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { CharacterizationOneComponent } from './characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './characterization-two/characterization-two.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';

@NgModule({
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
    NumberInputModule,
    SignalSliderModule
  ],
  declarations: [
    SellarRegionComponent,
    LocalizationComponent,
    DifferentialDiagnosisComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent
  ]
})
export class SellarRegionModule {}
