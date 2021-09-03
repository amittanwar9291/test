import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';

import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { BonesComponent } from './bones.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { ExternalMaterialComponent } from './external-material/external-material.component';
import { AxisDeviationComponent } from './axis-deviation/axis-deviation.component';
import { IntervertebralDiscComponent } from './intervertebral-disc/intervertebral-disc.component';
import { ErosiveOsteochondrosisComponent } from './erosive-osteochondrosis/erosive-osteochondrosis.component';
import { SpondylodiscitisComponent } from './spondylodiscitis/spondylodiscitis.component';
import { MyelonComponent } from './myelon/myelon.component';
import { BoneMarrowEdemaComponent } from './bone-marrow-edema/bone-marrow-edema.component';
import { OsteomyelitisComponent } from './osteomyelitis/osteomyelitis.component';
import { SpatialNeoplasmComponent } from './spatial-neoplasm/spatial-neoplasm.component';
import { CharacterizationOneComponent } from './spatial-neoplasm/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './spatial-neoplasm/characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent } from './spatial-neoplasm/differential-diagnosis/differential-diagnosis.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { SpineSharedLocalizersModule } from '@sharedPages/spine/localizers/spine-shared-localizers.module';
import { SpineLocalizersModule } from '../../../spineMRT/shared/spine-localizers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    FindingColumnModule,
    CommonImportsModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    CheckboxModule,
    NumberInputModule,
    SignalSliderModule,
    SpineSharedLocalizersModule,
    SpineLocalizersModule
  ],
  declarations: [
    BonesComponent,
    ExternalMaterialComponent,
    AxisDeviationComponent,
    IntervertebralDiscComponent,
    ErosiveOsteochondrosisComponent,
    SpondylodiscitisComponent,
    MyelonComponent,
    BoneMarrowEdemaComponent,
    OsteomyelitisComponent,
    SpatialNeoplasmComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    DifferentialDiagnosisComponent
  ]
})
export class BonesModule {}
