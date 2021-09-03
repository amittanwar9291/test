import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacialSkullComponent } from './facial-skull.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { DropdownModule } from 'primeng/dropdown';
import { SkullBaseComponent } from './skull-base/skull-base.component';

import { TemporalBoneComponent } from './temporal-bone/temporal-bone.component';
import { TemporalBoneLocalizationComponent } from './temporal-bone/temporal-bone-localization/temporal-bone-localization.component';
import { TemporalBoneDifferentialDiagnosisComponent } from './temporal-bone/temporal-bone-differential-diagnosis/temporal-bone-differential-diagnosis.component';
import { OrbitaComponent } from './orbita/orbita.component';
import { OrbitaLocalizationComponent } from './orbita/orbita-localization/orbita-localization.component';
import { OrbitaDifferentialDiagnosisComponent } from './orbita/orbita-differential-diagnosis/orbita-differential-diagnosis.component';
import { VariantParanasalSinusesComponent } from './variant-paranasal-sinuses/variant-paranasal-sinuses.component';
import { ParanasalSinusesComponent } from './paranasal-sinuses/paranasal-sinuses.component';
import { ParanasalSinusesLocalizationComponent } from './paranasal-sinuses/paranasal-sinuses-localization/paranasal-sinuses-localization.component';
import { ParanasalSinusesDifferentialDiagnosisComponent } from './paranasal-sinuses/paranasal-sinuses-differential-diagnosis/paranasal-sinuses-differential-diagnosis.component';
import { OralCavityComponent } from './oral-cavity/oral-cavity.component';
import { OralCavityLocalizationComponent } from './oral-cavity/oral-cavity-localization/oral-cavity-localization.component';
import { OralCavityDifferentialDiagnosisComponent } from './oral-cavity/oral-cavity-differential-diagnosis/oral-cavity-differential-diagnosis.component';
import { SalivaryGlandsComponent } from './salivary-glands/salivary-glands.component';
import { SalivaryGlandsLocalizationComponent } from './salivary-glands/salivary-glands-localization/salivary-glands-localization.component';
import { SalivaryGlandsDifferentialDiagnosisComponent } from './salivary-glands/salivary-glands-differential-diagnosis/salivary-glands-differential-diagnosis.component';
import { SkullComponent } from './skull/skull.component';
import { SkullDifferentialDiagnosisComponent } from './skull/skull-differential-diagnosis/skull-differential-diagnosis.component';
import { SkullLocalizationComponent } from './skull/skull-localization/skull-localization.component';
import { SkullBaseLocalizationComponent } from './skull-base/skull-base-localization/skull-base-localization.component';
import { SkullBaseDifferentialDiagnosisComponent } from './skull-base/skull-base-differential-diagnosis/skull-base-differential-diagnosis.component';
import { SkullBaseCharacterizationOneComponent } from './skull-base/skull-base-characterization-one/skull-base-characterization-one.component';
import { SkullBaseCharacterizationTwoComponent } from './skull-base/skull-base-characterization-two/skull-base-characterization-two.component';
import { TemporalBoneCharacterizationOneComponent } from './temporal-bone/temporal-bone-characterization-one/temporal-bone-characterization-one.component';
import { TemporalBoneCharacterizationTwoComponent } from './temporal-bone/temporal-bone-characterization-two/temporal-bone-characterization-two.component';
import { OrbitaCharacterizationOneComponent } from './orbita/orbita-characterization-one/orbita-characterization-one.component';
import { OrbitaCharacterizationTwoComponent } from './orbita/orbita-characterization-two/orbita-characterization-two.component';
import { ParanasalSinusesCharacterizationOneComponent } from './paranasal-sinuses/paranasal-sinuses-characterization-one/paranasal-sinuses-characterization-one.component';
import { ParanasalSinusesCharacterizationTwoComponent } from './paranasal-sinuses/paranasal-sinuses-characterization-two/paranasal-sinuses-characterization-two.component';
import { VariantParanasalSinusesCharacterizationOneComponent } from './variant-paranasal-sinuses/variant-paranasal-sinuses-characterization-one/variant-paranasal-sinuses-characterization-one.component';
import { VariantParanasalSinusesCharacterizationTwoComponent } from './variant-paranasal-sinuses/variant-paranasal-sinuses-characterization-two/variant-paranasal-sinuses-characterization-two.component';
import { OralCavityCharacterizationOneComponent } from './oral-cavity/oral-cavity-characterization-one/oral-cavity-characterization-one.component';
import { OralCavityCharacterizationTwoComponent } from './oral-cavity/oral-cavity-characterization-two/oral-cavity-characterization-two.component';
import { SalivaryGlandsCharackterizationOneComponent } from './salivary-glands/salivary-glands-charackterization-one/salivary-glands-charackterization-one.component';
import { SalivaryGlandsCharackterizationTwoComponent } from './salivary-glands/salivary-glands-charackterization-two/salivary-glands-charackterization-two.component';
import { JawTeethCharacterizationComponent } from './jaw-teeth/characterization/jaw-teeth-characterization.component';
import { JawTeethLocalizationTwoComponent } from './jaw-teeth/jaw-teeth-localization-two/jaw-teeth-localization-two.component';
import { JawTeethLocalizationOneComponent } from './jaw-teeth/jaw-teeth-localization-one/jaw-teeth-localization-one.component';
import { JawTeethComponent } from './jaw-teeth/jaw-teeth.component';
import { SkullCharacterizationOneComponent } from './skull/skull-characterization-one/skull-characterization-one.component';
import { SkullCharacterizationTwoComponent } from './skull/skull-characterization-two/skull-characterization-two.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    RadioButtonModule,
    CommonImportsModule,
    FindingColumnModule,
    CheckboxModule,
    TranslateModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    NumberInputModule,
    SliderNumberTripleInputModule,
    ReferencePictureModule,
    DropdownModule,
    SignalSliderModule
  ],
  declarations: [
    FacialSkullComponent,
    SkullBaseComponent,
    SkullBaseLocalizationComponent,
    SkullBaseDifferentialDiagnosisComponent,
    TemporalBoneComponent,
    TemporalBoneLocalizationComponent,
    TemporalBoneDifferentialDiagnosisComponent,
    OrbitaComponent,
    OrbitaLocalizationComponent,
    OrbitaDifferentialDiagnosisComponent,
    VariantParanasalSinusesComponent,
    ParanasalSinusesComponent,
    ParanasalSinusesLocalizationComponent,
    ParanasalSinusesDifferentialDiagnosisComponent,
    OralCavityComponent,
    OralCavityLocalizationComponent,
    OralCavityDifferentialDiagnosisComponent,
    JawTeethComponent,
    JawTeethLocalizationOneComponent,
    JawTeethLocalizationTwoComponent,
    JawTeethCharacterizationComponent,
    SalivaryGlandsComponent,
    SalivaryGlandsLocalizationComponent,
    SalivaryGlandsDifferentialDiagnosisComponent,
    SkullComponent,
    SkullDifferentialDiagnosisComponent,
    SkullLocalizationComponent,
    SkullBaseCharacterizationOneComponent,
    SkullBaseCharacterizationTwoComponent,
    TemporalBoneCharacterizationOneComponent,
    TemporalBoneCharacterizationTwoComponent,
    OrbitaCharacterizationOneComponent,
    OrbitaCharacterizationTwoComponent,
    ParanasalSinusesCharacterizationOneComponent,
    ParanasalSinusesCharacterizationTwoComponent,
    VariantParanasalSinusesCharacterizationOneComponent,
    VariantParanasalSinusesCharacterizationTwoComponent,
    OralCavityCharacterizationOneComponent,
    OralCavityCharacterizationTwoComponent,
    SalivaryGlandsCharackterizationOneComponent,
    SalivaryGlandsCharackterizationTwoComponent,
    SkullCharacterizationOneComponent,
    SkullCharacterizationTwoComponent
  ]
})
export class FacialSkullModule {}
