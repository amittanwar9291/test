import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProstateComponent } from './prostate.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { PeripheralZoneComponent } from './peripheral-zone/peripheral-zone.component';
import { TransitionalZoneComponent } from './transitional-zone/transitional-zone.component';
import { CentralZoneComponent } from './central-zone/central-zone.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { CharacterizationOneComponent } from './tabs/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './tabs/characterization-two/characterization-two.component';
import { SizePiradsScoreComponent } from './tabs/size-pirads-score/size-pirads-score.component';
import { CharacterizationThreeComponent } from './tabs/characterization-three/characterization-three.component';
import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';
import { PelvisLocalizersModule } from '../../shared/pelvis.localizers.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { ResidualHemorrhageComponent } from './residual-hemorrhage/residual-hemorrhage.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    DropdownModule,
    CheckboxModule,
    DynamicComponentWrapperModule,
    InfoIconModule,
    NumberInputModule,
    TabViewModule,
    PelvisLocalizersModule,
    SliderNumberInputModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule
  ],
  exports: [PatientInformationComponent],
  declarations: [
    ProstateComponent,
    CentralZoneComponent,
    PeripheralZoneComponent,
    TransitionalZoneComponent,
    PatientInformationComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    SizePiradsScoreComponent,
    CharacterizationThreeComponent,
    ResidualHemorrhageComponent
  ]
})
export class ProstateModule {}
