import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { MyelonComponent } from './myelon.component';
import { SpinalkanalstenoseComponent, MassEffectComponent, NoMassEffectComponent } from '.';

import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { SpineLocalizersModule } from '../../shared/spine-localizers.module';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';

import { IntramedullaryCharacteristicOneComponent } from './mass-effect/intramedullary-characteristic-one/intramedullary-characteristic-one.component';
import { IntramedullaryCharacteristicTwoComponent } from './mass-effect/intramedullary-characteristic-two/intramedullary-characteristic-two.component';
import { ExtramedullaryExtraduralEpiduralCharacteristicOneComponent } from './mass-effect/extramedullary-extradural-epidural-characteristic-one/extramedullary-extradural-epidural-characteristic-one.component';
import { ExtramedullaryExtraduralEpiduralCharacteristicTwoComponent } from './mass-effect/extramedullary-extradural-epidural-characteristic-two/extramedullary-extradural-epidural-characteristic-two.component';
import { ExtramedullaryExtraduralEpiduralCharacteristicThreeComponent } from './mass-effect/extramedullary-extradural-epidural-characteristic-three/extramedullary-extradural-epidural-characteristic-three.component';
import { DifferentialDiagnosisComponent } from './mass-effect/differential-diagnosis/differential-diagnosis.component';
import { CharacteristicOneComponent } from './no-mass-effect/characteristic-one/characteristic-one.component';
import { CharacteristicTwoComponent } from './no-mass-effect/characteristic-two/characteristic-two.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { DevelopmentDisorderComponent } from './development-disorder/development-disorder.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    FindingColumnModule,
    NumberInputModule,
    SliderNumberTripleInputModule,
    SpineLocalizersModule,
    RadioButtonModule,
    CheckboxModule,
    TabViewModule,
    DropdownModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    MyelonComponent,
    SpinalkanalstenoseComponent,
    DevelopmentDisorderComponent,
    MassEffectComponent,
    NoMassEffectComponent,
    IntramedullaryCharacteristicOneComponent,
    IntramedullaryCharacteristicTwoComponent,
    ExtramedullaryExtraduralEpiduralCharacteristicOneComponent,
    ExtramedullaryExtraduralEpiduralCharacteristicTwoComponent,
    ExtramedullaryExtraduralEpiduralCharacteristicThreeComponent,
    DifferentialDiagnosisComponent,
    CharacteristicOneComponent,
    CharacteristicTwoComponent
  ]
})
export class MyelonModule {}
