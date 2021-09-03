import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyroidComponent } from './thyroid.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { AnomaliesNormalVariantsThyroidGlandComponent } from './anomalies-normal-variants-thyroid-gland/anomalies-normal-variants-thyroid-gland.component';
import { ParathyroidGlandMassComponent } from './parathyroid-gland-mass/parathyroid-gland-mass.component';
import { SalivaryGlandsMassInflammationComponent } from './salivary-glands-mass-inflammation/salivary-glands-mass-inflammation.component';
import { ThyroidGoiterMassInflammationComponent } from './thyroid-goiter-mass-inflammation/thyroid-goiter-mass-inflammation.component';
import { ThyroidectomyComponent } from './thyroidectomy/thyroidectomy.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { TabViewModule } from 'primeng/tabview';
import { ThyroidCharacterizationOneComponent } from './thyroid-goiter-mass-inflammation/thyroid-characterization-one/thyroid-characterization-one.component';
import { ThyroidCharacterizationTwoComponent } from './thyroid-goiter-mass-inflammation/thyroid-characterization-two/thyroid-characterization-two.component';
import { ThyroidDifferentialDiagnosisComponent } from './thyroid-goiter-mass-inflammation/thyroid-differential-diagnosis/thyroid-differential-diagnosis.component';
import { SalivaryCharacterizationOneComponent } from './salivary-glands-mass-inflammation/salivary-characterization-one/salivary-characterization-one.component';
import { SalivaryCharacterizationTwoComponent } from './salivary-glands-mass-inflammation/salivary-characterization-two/salivary-characterization-two.component';
import { SalivaryCharacterizationThreeComponent } from './salivary-glands-mass-inflammation/salivary-characterization-three/salivary-characterization-three.component';
import { SalivaryDifferentialDiagnosisComponent } from './salivary-glands-mass-inflammation/salivary-differential-diagnosis/salivary-differential-diagnosis.component';
import { ParathyroidCharacterizationOneComponent } from './parathyroid-gland-mass/parathyroid-characterization-one/parathyroid-characterization-one.component';
import { ParathyroidCharacterizationTwoComponent } from './parathyroid-gland-mass/parathyroid-characterization-two/parathyroid-characterization-two.component';
import { ParathyroidDifferentialDiagnosisComponent } from './parathyroid-gland-mass/parathyroid-differential-diagnosis/parathyroid-differential-diagnosis.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    FindingColumnModule,
    CheckboxModule,
    CommonImportsModule,
    NumberInputModule,
    TabViewModule,
    SliderNumberTripleInputModule,
    InfoIconModule,
    DifferentialDiagnosisDropdownModule,
    ReferencePictureModule
  ],
  declarations: [
    ThyroidComponent,
    AnomaliesNormalVariantsThyroidGlandComponent,
    ParathyroidGlandMassComponent,
    SalivaryGlandsMassInflammationComponent,
    ThyroidGoiterMassInflammationComponent,
    ThyroidectomyComponent,
    ThyroidCharacterizationOneComponent,
    ThyroidCharacterizationTwoComponent,
    ThyroidDifferentialDiagnosisComponent,
    SalivaryCharacterizationOneComponent,
    SalivaryCharacterizationTwoComponent,
    SalivaryCharacterizationThreeComponent,
    SalivaryDifferentialDiagnosisComponent,
    ParathyroidCharacterizationOneComponent,
    ParathyroidCharacterizationTwoComponent,
    ParathyroidDifferentialDiagnosisComponent
  ]
})
export class ThyroidModule {}
