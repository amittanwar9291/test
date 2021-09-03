import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';

import { LiverComponent } from './liver.component';
import { BileDuctLeakageComponent } from './bile-duct-leakage/bile-duct-leakage.component';
import { BileDuctMassComponent } from './bile-duct-mass/bile-duct-mass.component';
import { BileDuctNormVariantComponent } from './bile-duct-norm-variant/bile-duct-norm-variant.component';
import { BiliaryDuctalDilatationComponent } from './biliary-ductal-dilatation/biliary-ductal-dilatation.component';
import { DiffuseParenchymalChangesComponent } from './diffuse-parenchymal-changes/diffuse-parenchymal-changes.component';
import { FocalLiverLesionComponent } from './focal-liver-lesion/focal-liver-lesion.component';
import { LocalizationComponent } from './focal-liver-lesion/localization/localization.component';
import { GallbladderConcretionComponent } from './gallbladder-concretion/gallbladder-concretion.component';
import { GallbladderHydropsComponent } from './gallbladder-hydrops/gallbladder-hydrops.component';
import { GallbladderNormVariantComponent } from './gallbladder-norm-variant/gallbladder-norm-variant.component';
import { GallbladderWallThickeningComponent } from './gallbladder-wall-thickening/gallbladder-wall-thickening.component';
import { VascularNormVariantsComponent } from './vascular-norm-variants/vascular-norm-variants.component';
import { AbdomenLocalizersModule } from '../shared/abdomen-localizers.module';
import { DifferentialDiagnosisComponent as FocalDifferentialDiagnosisComponent } from './focal-liver-lesion/differential-diagnosis/differential-diagnosis.component';
import { CharacterizationOneComponent as FocalCharacterizationOneComponent } from './focal-liver-lesion/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent as FocalCharacterizationTwoComponent } from './focal-liver-lesion/characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent as DiffuseDifferentialDiagnosisComponent } from './diffuse-parenchymal-changes/differential-diagnosis/differential-diagnosis.component';
import { CharacterizationOneComponent as DiffuseCharacterizationOneComponent } from './diffuse-parenchymal-changes/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent as DiffuseCharacterizationTwoComponent } from './diffuse-parenchymal-changes/characterization-two/characterization-two.component';
import { CharacterizationOneComponent as BiliaryCharacterizationOneComponent } from './biliary-ductal-dilatation/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent as BiliaryCharacterizationTwoComponent } from './biliary-ductal-dilatation/characterization-two/characterization-two.component';
import { CharacterizationOneComponent as BileDuctCharacterizationOneComponent } from './bile-duct-mass/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent as BileDuctCharacterizationTwoComponent } from './bile-duct-mass/characterization-two/characterization-two.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    CommonImportsModule,
    FindingColumnModule,
    NumberInputModule,
    CheckboxModule,
    TranslateModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    AbdomenLocalizersModule,
    SignalSliderModule,
    DropdownModule,
    ReferencePictureModule
  ],
  declarations: [
    LiverComponent,
    BileDuctLeakageComponent,
    BileDuctMassComponent,
    BileDuctNormVariantComponent,
    BiliaryDuctalDilatationComponent,
    DiffuseParenchymalChangesComponent,
    FocalLiverLesionComponent,
    GallbladderConcretionComponent,
    GallbladderHydropsComponent,
    GallbladderNormVariantComponent,
    GallbladderWallThickeningComponent,
    VascularNormVariantsComponent,
    LocalizationComponent,
    FocalDifferentialDiagnosisComponent,
    FocalCharacterizationOneComponent,
    FocalCharacterizationTwoComponent,
    DiffuseDifferentialDiagnosisComponent,
    DiffuseCharacterizationOneComponent,
    DiffuseCharacterizationTwoComponent,
    BiliaryCharacterizationOneComponent,
    BiliaryCharacterizationTwoComponent,
    BileDuctCharacterizationOneComponent,
    BileDuctCharacterizationTwoComponent
  ]
})
export class LiverModule {}
