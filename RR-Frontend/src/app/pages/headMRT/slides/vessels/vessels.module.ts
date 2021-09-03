import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VesselsComponent } from './vessels.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { IschemiaComponent } from './ischemia/ischemia.component';
import { CerebralVenousThrombosisComponent } from './cerebral-venous-thrombosis/cerebral-venous-thrombosis.component';
import { AneurysmComponent } from './aneurysm/aneurysm.component';
import { VascularMalformationComponent } from './vascular-malformation/vascular-malformation.component';
import { DuralAVFistulaComponent } from './dural-avfistula/dural-avfistula.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { LocalizationComponent } from './ischemia/localization/localization.component';
import { IschemicAreaOneComponent } from './ischemia/ischemic-area-one/ischemic-area-one.component';
import { IschemicAreaTwoComponent } from './ischemia/ischemic-area-two/ischemic-area-two.component';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { VascularOcclusionComponent } from './ischemia/vascular-occlusion/vascular-occlusion.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { HeadMRTSharedModule } from '@sharedPages/head/head-mrt-shared.module';
import { AngiographySharedLocalizersModule } from '@sharedPages/angiography/localizers/angiography-shared-localizers.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { DropdownModule } from 'primeng/dropdown';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';

import { UploaderNgWrapperModule } from '@controls/uploader-ng-wrapper/uploader-ng-wrapper.module';

import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { AorticModule } from '../../../angiographyMRT/shared/aortic.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    FindingColumnModule,
    TabViewModule,
    CheckboxModule,
    NumberInputModule,
    AngiographySharedLocalizersModule,
    AorticModule,
    HeadMRTSharedModule,
    SignalSliderModule,
    MultiValueDropdownModule,
    DifferentialDiagnosisDropdownModule,
    DropdownModule,
    SliderNumberTripleInputModule,
    UploaderNgWrapperModule,
    ReferencePictureModule
  ],
  declarations: [
    VesselsComponent,
    IschemiaComponent,
    CerebralVenousThrombosisComponent,
    AneurysmComponent,
    VascularMalformationComponent,
    DuralAVFistulaComponent,
    LocalizationComponent,
    IschemicAreaOneComponent,
    IschemicAreaTwoComponent,
    VascularOcclusionComponent
  ]
})
export class VesselsModule {}
