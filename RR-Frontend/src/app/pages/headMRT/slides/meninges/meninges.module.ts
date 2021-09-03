import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeningesComponent } from './meninges.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { DropdownModule } from 'primeng/dropdown';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { MassComponent } from './mass/mass.component';
import { DiffuseChangesComponent } from './diffuse-changes/diffuse-changes.component';
import { SubduralHematomaComponent } from './subdural-hematoma/subdural-hematoma.component';
import { EpiduralHematomaComponent } from './epidural-hematoma/epidural-hematoma.component';
import { LocalizationComponent } from './mass/localization/localization.component';
import { CharacterizationOneComponent } from './mass/characterization-one/characterization-one.component';
import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';
import { CharacterizationTwoComponent } from './mass/characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent } from './mass/differential-diagnosis/differential-diagnosis.component';
import { LocalizationDiffuseChangesComponent } from './diffuse-changes/localization-diffuse-changes/localization-diffuse-changes.component';
import { CharacterizationComponent } from './diffuse-changes/characterization/characterization.component';
import { DifferentialDiagnosisDiffuseChangesComponent } from './diffuse-changes/differential-diagnosis-diffuse-changes/differential-diagnosis-diffuse-changes.component';
import { CharacterizationOneSubduralHematomaComponent } from './subdural-hematoma/characterization-one-subdural-hematoma/characterization-one-subdural-hematoma.component';
import { CharacterizationTwoSubduralHematomaComponent } from './subdural-hematoma/characterization-two-subdural-hematoma/characterization-two-subdural-hematoma.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    CommonImportsModule,
    FindingColumnModule,
    CheckboxModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    NumberInputModule,
    SliderNumberTripleInputModule,
    ReferencePictureModule,
    DropdownModule,
    SignalSliderModule,
    SliderNumberInputModule
  ],
  declarations: [
    MeningesComponent,
    MassComponent,
    DiffuseChangesComponent,
    SubduralHematomaComponent,
    EpiduralHematomaComponent,
    LocalizationComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    DifferentialDiagnosisComponent,
    LocalizationDiffuseChangesComponent,
    CharacterizationComponent,
    DifferentialDiagnosisDiffuseChangesComponent,
    CharacterizationOneSubduralHematomaComponent,
    CharacterizationTwoSubduralHematomaComponent
  ]
})
export class MeningesModule {}
