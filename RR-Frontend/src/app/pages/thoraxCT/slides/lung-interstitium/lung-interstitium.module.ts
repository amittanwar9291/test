import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { TranslateModule } from '@ngx-translate/core';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { LungInterstitiumComponent } from './lung-interstitium.component';
import { DifferentialDiagnosisComponent } from './differential-diagnosis/differential-diagnosis.component';

import { DescriptionTypeModule } from '@controls/description-type/description-type.module';

import { ThoraxCTLocalizersModule } from '../../shared/thoraxCT-localizers.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { LocalizationComponent } from './localization/localization.component';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NodularChangesComponent } from './characterization/nodular-changes/nodular-changes.component';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { ReticulationsComponent } from './characterization/reticulations/reticulations.component';
import { DecreasedParenchymalDensityComponent } from './characterization/decreased-parenchymal-density/decreased-parenchymal-density.component';
import { IncreasedParenchymalDensityComponent } from './characterization/increased-parenchymal-density/increased-parenchymal-density.component';
import { OtherParenchymalPatternsComponent } from './characterization/other-parenchymal-patterns/other-parenchymal-patterns.component';
import { EmphysemaComponent } from './characterization/emphysema/emphysema.component';
import { BronchialTubesComponent } from './characterization/bronchial-tubes/bronchial-tubes.component';
import { ThoraxSharedLocalizersModule } from '@sharedPages/thorax/localizers/thorax-shared-localizers.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
@NgModule({
  imports: [
    CommonModule,
    CommonImportsModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    RadioButtonModule,
    CheckboxModule,
    TabViewModule,
    DropdownModule,
    DescriptionTypeModule,
    ThoraxCTLocalizersModule,
    InfoIconModule,
    FindingColumnModule,
    ReferencePictureModule,
    NumberInputModule,
    ThoraxSharedLocalizersModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    LungInterstitiumComponent,
    DifferentialDiagnosisComponent,
    LocalizationComponent,
    NodularChangesComponent,
    ReticulationsComponent,
    DecreasedParenchymalDensityComponent,
    IncreasedParenchymalDensityComponent,
    OtherParenchymalPatternsComponent,
    EmphysemaComponent,
    BronchialTubesComponent
  ]
})
export class LungInterstitiumModule {}
