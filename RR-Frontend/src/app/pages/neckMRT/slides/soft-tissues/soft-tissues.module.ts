import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TranslateModule } from '@ngx-translate/core';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

import { SoftTissuesComponent } from './soft-tissues.component';
import { CystsComponent } from './cysts/cysts.component';
import { MassInflammationComponent } from './mass-inflammation/mass-inflammation.component';
import { CharacterizationOneComponent } from './mass-inflammation/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './mass-inflammation/characterization-two/characterization-two.component';
import { CharacterizationThreeComponent } from './mass-inflammation/characterization-three/characterization-three.component';
import { DifferentialDiagnosisComponent } from './mass-inflammation/differential-diagnosis/differential-diagnosis.component';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { SpineSharedLocalizersModule } from '@sharedPages/spine/localizers/spine-shared-localizers.module';
import { DropdownModule } from 'primeng/dropdown';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';

@NgModule({
  declarations: [
    SoftTissuesComponent,
    CystsComponent,
    MassInflammationComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    CharacterizationThreeComponent,
    DifferentialDiagnosisComponent
  ],
  imports: [
    CommonModule,
    RadioButtonModule,
    CheckboxModule,
    FindingColumnModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    TabViewModule,
    ReferencePictureModule,
    DifferentialDiagnosisDropdownModule,
    SpineSharedLocalizersModule,
    DropdownModule,
    NumberInputModule,
    SignalSliderModule
  ]
})
export class SoftTissuesModule {}
