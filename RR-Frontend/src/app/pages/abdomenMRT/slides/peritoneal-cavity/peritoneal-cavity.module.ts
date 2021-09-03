import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { DropdownModule } from 'primeng/dropdown';
import { PeritonealCavityComponent } from './peritoneal-cavity.component';
import { AscitesComponent } from './ascites/ascites.component';
import { PeritonitisComponent } from './peritonitis/peritonitis.component';
import { HemorrhageComponent } from './hemorrhage/hemorrhage.component';
import { PeritonealMassComponent } from './peritoneal-mass/peritoneal-mass.component';
import { RetroperitonealMassComponent } from './retroperitoneal-mass/retroperitoneal-mass.component';
import { MistyMesenteryComponent } from './misty-mesentery/misty-mesentery.component';
import { CharacterizationOneComponent } from './ascites/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './ascites/characterization-two/characterization-two.component';
import { LocalizationComponent } from './hemorrhage/localization/localization.component';
import { CharacterizationComponent } from './hemorrhage/characterization/characterization.component';
import { DifferentialDiagnosisComponent } from './peritoneal-mass/differential-diagnosis/differential-diagnosis.component';
import { LocalizationComponent as PeritonealMassLocalizationComponent } from './peritoneal-mass/localization/localization.component';
import { CharacterizationOneComponent as PeritonealMassCharacterizationOne } from './peritoneal-mass/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent as PeritonealMassCharacterizationTwo } from './peritoneal-mass/characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent as PeritonealMassDifferentialDiagnosisComponent } from './peritoneal-mass/differential-diagnosis/differential-diagnosis.component';
import { CharacterizationOneComponent as ReperitonealMassCharacterizationOne } from './retroperitoneal-mass/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent as ReperitonealMassCharacterizationTwo } from './retroperitoneal-mass/characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent as ReperitonealMassDifferentialDiagnosisComponent } from './retroperitoneal-mass/differential-diagnosis/differential-diagnosis.component';
import { ExpansionInputsGroupModule } from '@controls/expansion-inputs-group/expansion-inputs-group.module';

@NgModule({
  declarations: [
    PeritonealCavityComponent,
    AscitesComponent,
    PeritonitisComponent,
    HemorrhageComponent,
    PeritonealMassComponent,
    RetroperitonealMassComponent,
    MistyMesenteryComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    LocalizationComponent,
    CharacterizationComponent,
    DifferentialDiagnosisComponent,
    PeritonealMassLocalizationComponent,
    PeritonealMassCharacterizationOne,
    PeritonealMassCharacterizationTwo,
    PeritonealMassDifferentialDiagnosisComponent,
    ReperitonealMassDifferentialDiagnosisComponent,
    ReperitonealMassCharacterizationTwo,
    ReperitonealMassCharacterizationOne
  ],
  imports: [
    CommonModule,
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
    SignalSliderModule,
    ExpansionInputsGroupModule
  ]
})
export class PeritonealCavityModule {}
