import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VesselsComponent } from './vessels.component';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { FormsModule } from '@angular/forms';
import { NormVariantComponent } from './norm-variant/norm-variant.component';
import { IschemiaComponent } from './ischemia/ischemia.component';
import { PerfusionComponent } from './perfusion/perfusion.component';
import { CircleOfWillisAndCerebralArteriesComponent } from './circle-of-willis-and-cerebral-arteries/circle-of-willis-and-cerebral-arteries.component';
import { CommonCarotidArteryComponent } from './common-carotid-artery/common-carotid-artery.component';
import { ExternalCarotidArteryComponent } from './external-carotid-artery/external-carotid-artery.component';
import { CerebralVeinsSinusDuraeMatrisComponent } from './cerebral-veins-sinus-durae-matris/cerebral-veins-sinus-durae-matris.component';
import { VascularMalformationComponent } from './vascular-malformation/vascular-malformation.component';
import { DuralAVFistulaComponent } from './dural-avfistula/dural-avfistula.component';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { TabViewModule } from 'primeng/tabview';
import { IschemiaLocalizationTabComponent } from './ischemia/ischemia-localization-tab/ischemia-localization-tab.component';
import { IschemicAreaOneTabComponent } from './ischemia/ischemic-area-one-tab/ischemic-area-one-tab.component';
import { IschemicAreaTwoTabComponent } from './ischemia/ischemic-area-two-tab/ischemic-area-two-tab.component';
import { PerfusionLocalizationTabComponent } from './perfusion/perfusion-localization-tab/perfusion-localization-tab.component';
import { PerfusionCharacterizationTabComponent } from './perfusion/perfusion-characterization-tab/perfusion-characterization-tab.component';
import { PerfusionDifferentialDiagnosisTabComponent } from './perfusion/perfusion-differential-diagnosis-tab/perfusion-differential-diagnosis-tab.component';
import { StenosisOcclusionCharacterizationOneTabComponent } from './circle-of-willis-and-cerebral-arteries/stenosis-occlusion-characterization-one-tab/stenosis-occlusion-characterization-one-tab.component';
import { StenosisOcclusionCharacterizationTwoTabComponent } from './circle-of-willis-and-cerebral-arteries/stenosis-occlusion-characterization-two-tab/stenosis-occlusion-characterization-two-tab.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { CheckboxModule } from 'primeng/checkbox';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { DropdownModule } from 'primeng/dropdown';
import { HeadMRTSharedModule } from '@sharedPages/head/head-mrt-shared.module';
import { AngiographySharedLocalizersModule } from '@sharedPages/angiography/localizers/angiography-shared-localizers.module';
import { InternalCarotidVertebralCarotidArteryComponent } from './internal-carotid-vertebral-carotid-artery/internal-carotid-vertebral-carotid-artery.component';

@NgModule({
  declarations: [
    VesselsComponent,
    NormVariantComponent,
    IschemiaComponent,
    PerfusionComponent,
    CircleOfWillisAndCerebralArteriesComponent,
    CommonCarotidArteryComponent,
    InternalCarotidVertebralCarotidArteryComponent,
    ExternalCarotidArteryComponent,
    CerebralVeinsSinusDuraeMatrisComponent,
    VascularMalformationComponent,
    DuralAVFistulaComponent,
    IschemiaLocalizationTabComponent,
    IschemicAreaOneTabComponent,
    IschemicAreaTwoTabComponent,
    PerfusionLocalizationTabComponent,
    PerfusionCharacterizationTabComponent,
    PerfusionDifferentialDiagnosisTabComponent,
    StenosisOcclusionCharacterizationOneTabComponent,
    StenosisOcclusionCharacterizationTwoTabComponent
  ],
  imports: [
    CommonModule,
    CommonImportsModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    FindingColumnModule,
    TabViewModule,
    NumberInputModule,
    CheckboxModule,
    ReferencePictureModule,
    DropdownModule,
    HeadMRTSharedModule,
    AngiographySharedLocalizersModule
  ]
})
export class VesselsModule {}
