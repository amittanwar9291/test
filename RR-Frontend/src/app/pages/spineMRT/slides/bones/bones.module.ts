import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DescriptionTypeModule } from '@controls/description-type/description-type.module';
import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';

import { TranslateModule } from '@ngx-translate/core';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { SpineSharedLocalizersModule } from 'app/pages/shared/spine/localizers/spine-shared-localizers.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { SpineLocalizersModule } from '../../shared/spine-localizers.module';
import { BoneMarrowEdemaComponent } from './bone-marrow-edema/bone-marrow-edema.component';

import { BonesComponent } from './bones.component';
import { C0Component } from './fracture/c0/c0.component';
import { C1Component } from './fracture/c1/c1.component';
import { C2Component } from './fracture/c2/c2.component';
import { FractureComponent } from './fracture/fracture.component';
import { OsSacrumComponent } from './fracture/os-sacrum/os-sacrum.component';
import { OtherPartsComponent } from './fracture/other-parts/other-parts.component';
import { PosttherapeuticChangeComponent } from './posttherapeutic-change/posttherapeutic-change.component';
import { TumorDiffuseCharacterizationComponent } from './tumor-diffuse/tumor-diffuse-characterization/tumor-diffuse-characterization.component';
import { TumorDiffuseDifferentialDiagnosisComponent } from './tumor-diffuse/tumor-diffuse-differential-diagnosis/tumor-diffuse-differential-diagnosis.component';
import { FocalTumorCharacteristicsOneComponent } from './tumor-focal/focal-tumor-characteristics-one/focal-tumor-characteristics-one.component';
import { FocalTumorCharacteristicsThreeComponent } from './tumor-focal/focal-tumor-characteristics-three/focal-tumor-characteristics-three.component';
import { FocalTumorCharacteristicsTwoComponent } from './tumor-focal/focal-tumor-characteristics-two/focal-tumor-characteristics-two.component';
import { FocalTumorDifferentialDiagnosisComponent } from './tumor-focal/focal-tumor-differential-diagnosis/focal-tumor-differential-diagnosis.component';
import { VertebralArchPathologyComponent } from './vertebral-arch-pathology/vertebral-arch-pathology.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { OsCoccygisComponent } from './fracture/os-coccygis/os-coccygis.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    SpineLocalizersModule,
    TabViewModule,
    DescriptionTypeModule,
    DropdownModule,
    DynamicComponentWrapperModule,
    CommonImportsModule,
    NumberInputModule,
    SpineSharedLocalizersModule,
    FindingColumnModule,
    SignalSliderModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    BonesComponent,
    FractureComponent,
    FocalTumorCharacteristicsOneComponent,
    C0Component,
    C1Component,
    C2Component,
    OsSacrumComponent,
    OsCoccygisComponent,
    OtherPartsComponent,
    BoneMarrowEdemaComponent,
    VertebralArchPathologyComponent,
    PosttherapeuticChangeComponent,
    FocalTumorCharacteristicsTwoComponent,
    FocalTumorDifferentialDiagnosisComponent,
    FocalTumorCharacteristicsThreeComponent,
    TumorDiffuseCharacterizationComponent,
    TumorDiffuseDifferentialDiagnosisComponent
  ]
})
export class BonesModule {}
