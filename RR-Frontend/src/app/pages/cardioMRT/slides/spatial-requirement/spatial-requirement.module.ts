import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';

import { TranslateModule } from '@ngx-translate/core';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { DescriptionTypeModule } from '@controls/description-type/description-type.module';
import { DescriptionTypeComponent } from '@controls/description-type/description-type.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { DynamicContainerBaseComponent } from '@abstractions/dynamic-base/dynamic-container-base.component';
import { DynamicBaseComponent } from '@abstractions/dynamic-base/dynamic-base.component';

import { CardioLocalizersModule } from '../../shared/cardio-localizers.module';

import { SpatialRequirementComponent } from './spatial-requirement.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { MassTumorComponent } from './mass-tumor/mass-tumor.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    RadioButtonModule,
    TabViewModule,
    TranslateModule,
    PresetListModule,
    CheckboxModule,
    DropdownModule,
    RadioButtonModule,
    DescriptionTypeModule,
    NumberInputModule,
    SliderNumberTripleInputModule,
    CardioLocalizersModule,
    CommonImportsModule,
    ReferencePictureModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [SpatialRequirementComponent, MassTumorComponent],
  entryComponents: [DescriptionTypeComponent, DynamicContainerBaseComponent, DynamicBaseComponent]
})
export class SpatialRequirementModule {}
