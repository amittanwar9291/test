import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DescriptionTypeModule } from '@controls/description-type/description-type.module';
import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';

import { TranslateModule } from '@ngx-translate/core';

import { SpineSoftTissuesFindingDropdownModule } from '@sharedPages/spine/soft-tissues/spine-soft-tissues-finding-dropdown.module';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';

import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { SpineLocalizersModule } from '../../shared/spine-localizers.module';
import { LymphNodesComponent } from './lymph-nodes/lymph-nodes.component';
import { ParavertebralMusculatureComponent } from './paravertebral-musculature/paravertebral-musculature.component';
import { SoftTissuesTabDiagnosisComponent } from './soft-tissues-tabs/differential-diagnosis/soft-tissues-tab-diagnosis.component';
import { SoftTissuesTabLocalizationComponent } from './soft-tissues-tabs/localization/soft-tissues-tab-localization.component';
import { SoftTissuesTabsComponent } from './soft-tissues-tabs/soft-tissues-tabs.component';
import { SoftTissuesComponent } from './soft-tissues.component';
import { VesselsUretersComponent } from './vessels-ureters/vessels-ureters.component';
import { ParavertebralMusculatureCharacterizationOneComponent } from './paravertebral-musculature/paravertebral-musculature-characterization-one/paravertebral-musculature-characterization-one.component';
import { ParavertebralMusculatureCharacterizationTwoComponent } from './paravertebral-musculature/paravertebral-musculature-characterization-two/paravertebral-musculature-characterization-two.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    TranslateModule,
    TabViewModule,
    PresetListModule,
    SpineLocalizersModule,
    CommonImportsModule,
    DescriptionTypeModule,
    SliderNumberTripleInputModule,
    InfoIconModule,
    DynamicComponentWrapperModule,
    NumberInputModule,
    SpineSoftTissuesFindingDropdownModule,
    FindingColumnModule,
    SignalSliderModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    SoftTissuesComponent,
    LymphNodesComponent,
    VesselsUretersComponent,
    ParavertebralMusculatureComponent,
    SoftTissuesTabsComponent,
    SoftTissuesTabLocalizationComponent,
    SoftTissuesTabDiagnosisComponent,
    ParavertebralMusculatureCharacterizationOneComponent,
    ParavertebralMusculatureCharacterizationTwoComponent
  ]
})
export class SoftTissuesModule {}
