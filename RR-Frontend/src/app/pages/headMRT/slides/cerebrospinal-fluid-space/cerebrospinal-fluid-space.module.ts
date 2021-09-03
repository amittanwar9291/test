import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CerebrospinalFluidSpaceComponent } from './cerebrospinal-fluid-space.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NormVariantVentricleComponent } from './norm-variant-ventricle/norm-variant-ventricle.component';
import { VentricleConfigurationComponent } from './ventricle-configuration/ventricle-configuration.component';
import { TabViewModule } from 'primeng/tabview';
import { LocalizationTabComponent } from './ventricle-configuration/ventricle-localization-tab/ventricle-localization-tab.component';
import { DifferentialDiagnosisTabComponent } from './ventricle-configuration/ventricle-differential-diagnosis-tab/ventricle-differential-diagnosis-tab.component';
import { MassComponent } from './mass/mass.component';
import { MassLocalizationTabComponent } from './mass/mass-localization-tab/mass-localization-tab.component';
import { MassDifferentialDiagnosisTabComponent } from './mass/mass-differential-diagnosis-tab/mass-differential-diagnosis-tab.component';
import { SubarachnoidHemorrhageComponent } from './subarachnoid-hemorrhage/subarachnoid-hemorrhage.component';
import { SubarachnoidLocalizationTabComponent } from './subarachnoid-hemorrhage/subarachnoid-localization-tab/subarachnoid-localization-tab.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { VentricleConfigurationCharacterizationTabComponent } from './ventricle-configuration/ventricle-configuration-characterization-tab/ventricle-configuration-characterization-tab.component';
import { DropdownModule } from 'primeng/dropdown';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { MassCharacterizationOneTabComponent } from './mass/mass-characterization-one-tab/mass-characterization-one-tab.component';
import { MassCharacterizationTwoTabComponent } from './mass/mass-characterization-two-tab/mass-characterization-two-tab.component';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { SubarachnoidCharacterizationTabComponent } from './subarachnoid-hemorrhage/subarachnoid-characterization-tab/subarachnoid-characterization-tab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    CheckboxModule,
    FindingColumnModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    DropdownModule,
    NumberInputModule,
    SignalSliderModule
  ],
  declarations: [
    CerebrospinalFluidSpaceComponent,
    NormVariantVentricleComponent,
    VentricleConfigurationComponent,
    DifferentialDiagnosisTabComponent,
    LocalizationTabComponent,
    MassComponent,
    MassLocalizationTabComponent,
    MassDifferentialDiagnosisTabComponent,
    SubarachnoidHemorrhageComponent,
    SubarachnoidLocalizationTabComponent,
    VentricleConfigurationCharacterizationTabComponent,
    MassCharacterizationOneTabComponent,
    MassCharacterizationTwoTabComponent,
    SubarachnoidCharacterizationTabComponent
  ]
})
export class CerebrospinalFluidSpaceModule {}
