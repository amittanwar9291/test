import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FemaleSexComponent } from './female-sex.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { OvaryMassComponent } from './ovary-mass/ovary-mass.component';
import { OvaryInflammationComponent } from './ovary-inflammation/ovary-inflammation.component';
import { OvaryTorsionComponent } from './ovary-torsion/ovary-torsion.component';
import { UterineTubeMassComponent } from './uterine-tube-mass/uterine-tube-mass.component';
import { UterineTubeInflammationComponent } from './uterine-tube-inflammation/uterine-tube-inflammation.component';
import { CorpusUteriMassComponent } from './corpus-uteri-mass/corpus-uteri-mass.component';
import { CorpusUteriInflammationComponent } from './corpus-uteri-inflammation/corpus-uteri-inflammation.component';
import { CervixUteriMassComponent } from './cervix-uteri-mass/cervix-uteri-mass.component';
import { CervixUteriInflammationComponent } from './cervix-uteri-inflammation/cervix-uteri-inflammation.component';
import { VulvaMassComponent } from './vulva-mass/vulva-mass.component';
import { VulvaInflammationComponent } from './vulva-inflammation/vulva-inflammation.component';
import { EndometriosisComponent } from './endometriosis/endometriosis.component';
import { CharacterizationOneComponent } from './ovary-inflammation/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './ovary-inflammation/characterization-two/characterization-two.component';
import { PelvisLocalizersModule } from '../../shared/pelvis.localizers.module';

import { OvaryMassCharacterizationOneComponent } from './ovary-mass/ovary-mass-characterization-one/ovary-mass-characterization-one.component';
import { OvaryMassCharacterizationTwoComponent } from './ovary-mass/ovary-mass-characterization-two/ovary-mass-characterization-two.component';
import { OvaryMassDifferentialDiagnosisComponent } from './ovary-mass/ovary-mass-differential-diagnosis/ovary-mass-differential-diagnosis.component';
import { CervixUteriMassCharacterizationOneComponent } from './cervix-uteri-mass/cervix-uteri-mass-characterization-one/cervix-uteri-mass-characterization-one.component';
import { CervixUteriMassCharacterizationTwoComponent } from './cervix-uteri-mass/cervix-uteri-mass-characterization-two/cervix-uteri-mass-characterization-two.component';
import { CervixUteriMassDifferentialDiagnosisComponent } from './cervix-uteri-mass/cervix-uteri-mass-differential-diagnosis/cervix-uteri-mass-differential-diagnosis.component';
import { VulvaMassCharacterizationOneComponent } from './vulva-mass/vulva-mass-characterization-one/vulva-mass-characterization-one.component';
import { VulvaMassCharacterizationTwoComponent } from './vulva-mass/vulva-mass-characterization-two/vulva-mass-characterization-two.component';
import { VulvaMassDifferentialDiagnosisComponent } from './vulva-mass/vulva-mass-differential-diagnosis/vulva-mass-differential-diagnosis.component';
import { EndometriosisCharacterizationThreeComponent } from './endometriosis/endometriosis-characterization-three/endometriosis-characterization-three.component';
import { EndometriosisCharacterizationTwoComponent } from './endometriosis/endometriosis-characterization-two/endometriosis-characterization-two.component';
import { EndometriosisDifferentialDiagnosisComponent } from './endometriosis/endometriosis-differential-diagnosis/endometriosis-differential-diagnosis.component';
import { EndometriosisCharacterizationOneComponent } from './endometriosis/endometriosis-characterization-one/endometriosis-characterization-one.component';

import { VaginaMassComponent } from './vagina-mass/vagina-mass.component';
import { VaginaMassDifferentialDiagnosisComponent } from './vagina-mass/vagina-mass-differential-diagnosis/vagina-mass-differential-diagnosis.component';
import { VaginaMassCharacterizationOneComponent } from './vagina-mass/vagina-mass-characterization-one/vagina-mass-characterization-one.component';
import { VaginaMassCharacterizationTwoComponent } from './vagina-mass/vagina-mass-characterization-two/vagina-mass-characterization-two.component';
import { CervixUteriInflammationCharacterizationOneComponent } from './cervix-uteri-inflammation/characterization-one/cervix-uteri-inflammation-characterization-one.component';
import { CervixUteriInflammationCharacterizationTwoComponent } from './cervix-uteri-inflammation/characterization-two/cervix-uteri-inflammation-characterization-two.component';
import { CorpusUteriMassCharacterizationOneComponent } from './corpus-uteri-mass/corpus-uteri-mass-characterization-one/corpus-uteri-mass-characterization-one.component';
import { CorpusUteriMassCharacterizationTwoComponent } from './corpus-uteri-mass/corpus-uteri-mass-characterization-two/corpus-uteri-mass-characterization-two.component';
import { CorpusUteriMassCharacterizationThreeComponent } from './corpus-uteri-mass/corpus-uteri-mass-characterization-three/corpus-uteri-mass-characterization-three.component';
import { CorpusUteriMassCharacterizationDifferentialDiagnosisComponent } from './corpus-uteri-mass/corpus-uteri-mass-characterization-differential-diagnosis/corpus-uteri-mass-characterization-differential-diagnosis.component';
import { VulvaInflammationCharacterizationOneComponent } from './vulva-inflammation/vulva-inflammation-characterization-one/vulva-inflammation-characterization-one.component';
import { VulvaInflammationCharacterizationTwoComponent } from './vulva-inflammation/vulva-inflammation-characterization-two/vulva-inflammation-characterization-two.component';
import { UterineTubeMassCharacterisationOneComponent } from './uterine-tube-mass/uterine-tube-mass-characterisation-one/uterine-tube-mass-characterisation-one.component';
import { UterineTubeMassCharacterisationTwoComponent } from './uterine-tube-mass/uterine-tube-mass-characterisation-two/uterine-tube-mass-characterisation-two.component';
import { UterineTubeMassDifferentialDiagnosisComponent } from './uterine-tube-mass/uterine-tube-mass-differential-diagnosis/uterine-tube-mass-differential-diagnosis.component';
import { CorpusUteriInflammationCharacterizationTwoComponent } from './corpus-uteri-inflammation/characterization-two/corpus-uteri-inflammation-characterization-two.component';
import { CorpusUteriInflammationCharacterizationOneComponent } from './corpus-uteri-inflammation/characterization-one/corpus-uteri-inflammation-characterization-one.component';
import { UterineTubeInflammationCharacterizationOneComponent } from './uterine-tube-inflammation/uterine-tube-inflammation-characterization-one/uterine-tube-inflammation-characterization-one.component';
import { UterineTubeInflammationCharacterizationTwoComponent } from './uterine-tube-inflammation/uterine-tube-inflammation-characterization-two/uterine-tube-inflammation-characterization-two.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    TabViewModule,
    CheckboxModule,
    NumberInputModule,
    PelvisLocalizersModule,
    DropdownModule,
    SliderNumberTripleInputModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    FemaleSexComponent,
    OvaryMassComponent,
    OvaryInflammationComponent,
    OvaryTorsionComponent,
    UterineTubeMassComponent,
    UterineTubeMassCharacterisationOneComponent,
    UterineTubeMassCharacterisationTwoComponent,
    UterineTubeMassDifferentialDiagnosisComponent,
    UterineTubeInflammationComponent,
    CorpusUteriMassComponent,
    CorpusUteriInflammationComponent,
    CervixUteriMassComponent,
    CervixUteriInflammationComponent,
    VulvaMassComponent,
    VulvaInflammationComponent,
    EndometriosisComponent,
    EndometriosisCharacterizationThreeComponent,
    EndometriosisCharacterizationTwoComponent,
    EndometriosisDifferentialDiagnosisComponent,
    EndometriosisCharacterizationOneComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    OvaryMassCharacterizationOneComponent,
    OvaryMassCharacterizationTwoComponent,
    OvaryMassDifferentialDiagnosisComponent,
    VaginaMassComponent,
    VaginaMassDifferentialDiagnosisComponent,
    VaginaMassCharacterizationOneComponent,
    VaginaMassCharacterizationTwoComponent,
    OvaryMassDifferentialDiagnosisComponent,
    CervixUteriMassCharacterizationOneComponent,
    CervixUteriMassCharacterizationTwoComponent,
    CervixUteriMassDifferentialDiagnosisComponent,
    VulvaMassCharacterizationOneComponent,
    VulvaMassCharacterizationTwoComponent,
    VulvaMassDifferentialDiagnosisComponent,
    CorpusUteriMassCharacterizationOneComponent,
    CorpusUteriMassCharacterizationTwoComponent,
    CorpusUteriMassCharacterizationThreeComponent,
    CorpusUteriMassCharacterizationDifferentialDiagnosisComponent,
    UterineTubeInflammationCharacterizationOneComponent,
    UterineTubeInflammationCharacterizationTwoComponent,
    CervixUteriInflammationCharacterizationOneComponent,
    CervixUteriInflammationCharacterizationTwoComponent,
    CorpusUteriInflammationCharacterizationOneComponent,
    CorpusUteriInflammationCharacterizationTwoComponent,
    VulvaInflammationCharacterizationOneComponent,
    VulvaInflammationCharacterizationTwoComponent
  ]
})
export class FemaleSexModule {}
