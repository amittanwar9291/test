import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { PelvisLocalizersModule } from '../../shared/pelvis.localizers.module';
import { DropdownModule } from 'primeng/dropdown';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

import { BladderComponent } from './bladder.component';
import { AscitesComponent } from './ascites/ascites.component';
import { PeritonealNodulesComponent } from './peritoneal-nodules/peritoneal-nodules.component';
import { VesselsUreterComponent } from './vessels-ureter/vessels-ureter.component';
import { UrinaryBladderWallThickeningComponent } from './urinary-bladder-wall-thickening/urinary-bladder-wall-thickening.component';
import { ThickeningCharacterizationOneComponent } from './urinary-bladder-wall-thickening/thickening-characterization-one/thickening-characterization-one.component';
import { ThickeningCharacterizationTwoComponent } from './urinary-bladder-wall-thickening/thickening-characterization-two/thickening-characterization-two.component';
import { UrinaryBladderDiverticulumComponent } from './urinary-bladder-diverticulum/urinary-bladder-diverticulum.component';
import { UrinaryBladderStandardVariationAnomaliesComponent } from './urinary-bladder-standard-variation-anomalies/urinary-bladder-standard-variation-anomalies.component';
import { UrinaryBladderTraumaComponent } from './urinary-bladder-trauma/urinary-bladder-trauma.component';
import { SharedUrinaryBladderColumnComponent } from './shared-urinary-bladder-column/shared-urinary-bladder-column.component';
import { PeripheralNerveSheathTumorComponent } from './peripheral-nerve-sheath-tumor/peripheral-nerve-sheath-tumor.component';
import { SoftTissueMassComponent } from './soft-tissue-mass/soft-tissue-mass.component';
import { SoftTissueMassCharacterizationOneComponent } from './soft-tissue-mass/soft-tissue-mass-characterization-one/soft-tissue-mass-characterization-one.component';
import { SoftTissueMassCharacterizationTwoComponent } from './soft-tissue-mass/soft-tissue-mass-characterization-two/soft-tissue-mass-characterization-two.component';
import { MusclesCharacterizationOneComponent } from './muscles/muscles-characterization-one/muscles-characterization-one.component';
import { MusclesCharacterizationTwoComponent } from './muscles/muscles-characterization-two/muscles-characterization-two.component';
import { MusclesComponent } from './muscles/muscles.component';
import { TendonsComponent } from './tendons/tendons.component';

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
    FindingColumnModule,
    SliderNumberTripleInputModule,
    InfoIconModule,
    SliderNumberInputModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    BladderComponent,
    AscitesComponent,
    PeritonealNodulesComponent,
    VesselsUreterComponent,
    UrinaryBladderWallThickeningComponent,
    ThickeningCharacterizationOneComponent,
    ThickeningCharacterizationTwoComponent,
    UrinaryBladderDiverticulumComponent,
    UrinaryBladderStandardVariationAnomaliesComponent,
    UrinaryBladderTraumaComponent,
    SharedUrinaryBladderColumnComponent,
    PeripheralNerveSheathTumorComponent,
    SoftTissueMassComponent,
    SoftTissueMassCharacterizationOneComponent,
    SoftTissueMassCharacterizationTwoComponent,
    MusclesComponent,
    MusclesCharacterizationOneComponent,
    MusclesCharacterizationTwoComponent,
    TendonsComponent
  ]
})
export class BladderModule {}
