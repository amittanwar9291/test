import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CerebrospinalFluidSpaceComponent } from './cerebrospinal-fluid-space.component';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { NormVariantVentricleComponent } from './norm-variant-ventricle/norm-variant-ventricle.component';
import { VentricleConfigurationComponent } from './ventricle-configuration/ventricle-configuration.component';
import { MassComponent } from './mass/mass.component';
import { SubarachnoidHemorrhageComponent } from './subarachnoid-hemorrhage/subarachnoid-hemorrhage.component';
import { VentricleConfigurationLocalizationConfigurationTabComponent } from './ventricle-configuration/ventricle-configuration-localization-configuration-tab/ventricle-configuration-localization-configuration-tab.component';
import { VentricleConfigurationCharacterizationTabComponent } from './ventricle-configuration/ventricle-configuration-characterization-tab/ventricle-configuration-characterization-tab.component';
import { VentricleConfigurationDifferentialDiagnosisTabComponent } from './ventricle-configuration/ventricle-configuration-differential-diagnosis-tab/ventricle-configuration-differential-diagnosis-tab.component';
import { MassLocalizationTabComponent } from './mass/mass-localization-tab/mass-localization-tab.component';
import { MassCharacterizationOneTabComponent } from './mass/mass-characterization-one-tab/mass-characterization-one-tab.component';
import { MassCharacterizationTwoTabComponent } from './mass/mass-characterization-two-tab/mass-characterization-two-tab.component';
import { MassDifferentialDiagnosisTabComponent } from './mass/mass-differential-diagnosis-tab/mass-differential-diagnosis-tab.component';
import { SubarachnoidHemorrhageLocalizationTabComponent } from './subarachnoid-hemorrhage/subarachnoid-hemorrhage-localization-tab/subarachnoid-hemorrhage-localization-tab.component';
import { SubarachnoidHemorrhageCharacterizationTabComponent } from './subarachnoid-hemorrhage/subarachnoid-hemorrhage-characterization-tab/subarachnoid-hemorrhage-characterization-tab.component';
import { TabViewModule } from 'primeng/tabview';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  declarations: [
    CerebrospinalFluidSpaceComponent,
    NormVariantVentricleComponent,
    VentricleConfigurationComponent,
    MassComponent,
    SubarachnoidHemorrhageComponent,
    VentricleConfigurationLocalizationConfigurationTabComponent,
    VentricleConfigurationCharacterizationTabComponent,
    VentricleConfigurationDifferentialDiagnosisTabComponent,
    MassLocalizationTabComponent,
    MassCharacterizationOneTabComponent,
    MassCharacterizationTwoTabComponent,
    MassDifferentialDiagnosisTabComponent,
    SubarachnoidHemorrhageLocalizationTabComponent,
    SubarachnoidHemorrhageCharacterizationTabComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    TabViewModule,
    TranslateModule,
    RadioButtonModule,
    FindingColumnModule,
    ReferencePictureModule,
    CheckboxModule,
    DropdownModule,
    NumberInputModule,
    DifferentialDiagnosisDropdownModule
  ]
})
export class CerebrospinalFluidSpaceModule {}
