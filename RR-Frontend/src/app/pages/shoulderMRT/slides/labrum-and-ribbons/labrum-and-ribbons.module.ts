import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';

import { TranslateModule } from '@ngx-translate/core';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { MultiValueDropdownComponent } from '@controls/multi-value-dropdown/multi-value-dropdown.component';
import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { DescriptionTypeModule } from '@controls/description-type/description-type.module';
import { DescriptionTypeComponent } from '@controls/description-type/description-type.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { UploaderModule } from '@controls/uploader/uploader.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

import { DynamicContainerBaseComponent } from '@abstractions/dynamic-base/dynamic-container-base.component';
import { DynamicBaseComponent } from '@abstractions/dynamic-base/dynamic-base.component';

import { LabrumAndRibbonsComponent } from './labrum-and-ribbons.component';
import { ShoulderLocalizersModule } from '../../shared/shoulder-localizers.module';
import { BicepsTendonComponent } from './biceps-tendon/biceps-tendon.component';
import { LabrumComponent } from './labrum/labrum.component';
import { LigamentaComponent } from './ligamenta/ligamenta.component';
import { CharacterizationOneComponent } from './ligamenta/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './ligamenta/characterization-two/characterization-two.component';
import { DiscModule } from '../../../spineCT/slides';
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
    DescriptionTypeModule,
    TranslateModule,
    ShoulderLocalizersModule,
    DynamicComponentWrapperModule,
    NumberInputModule,
    InfoIconModule,
    CommonImportsModule,
    FindingColumnModule,
    UploaderModule,
    ReferencePictureModule,
    DiscModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    LabrumAndRibbonsComponent,
    BicepsTendonComponent,
    LabrumComponent,
    LigamentaComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent
  ],
  entryComponents: [MultiValueDropdownComponent, DescriptionTypeComponent, DynamicContainerBaseComponent, DynamicBaseComponent]
})
export class LabrumAndRibbonsModule {}
