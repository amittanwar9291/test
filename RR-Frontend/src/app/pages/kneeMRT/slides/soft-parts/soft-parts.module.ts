import { DynamicBaseModule } from '@abstractions/dynamic-base/dynamic-base.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DescriptionTypeModule } from '@controls/description-type/description-type.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { InfoIconComponent } from '@controls/info-icon/info-icon.component';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

import { KneeLocalizersModule } from '../../shared/knee-localizers.module';

import { ArticularEffusionComponent } from './articular-effusion/articular-effusion.component';
import { BursitisComponent } from './bursitis/bursitis.component';
import { HoffaFatBodyComponent } from './hoffa-fat-body/hoffa-fat-body.component';
import { SoftPartsFindingComponent } from './soft-parts-finding/soft-parts-finding.component';
import { SoftPartsComponent } from './soft-parts.component';
import { CharacterizationOneComponent } from './soft-tissue-tumor/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './soft-tissue-tumor/characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent } from './soft-tissue-tumor/differential-diagnosis/differential-diagnosis.component';
import { SoftTissueTumorComponent } from './soft-tissue-tumor/soft-tissue-tumor.component';
import { SynoviaDiffusComponent } from './synovia-diffus/synovia-diffus.component';
import { SynoviaComponent } from './synovia/synovia.component';
import { BicepsFemorisTendonComponent } from './tendons/biceps-femoris-tendon/biceps-femoris-tendon.component';
import { CharacterizationComponent } from './tendons/muskulatur-tendon/characterization/characterization.component';
import { FurtherFindingsComponent } from './tendons/muskulatur-tendon/further-findings/further-findings.component';
import { LocalizationComponent } from './tendons/muskulatur-tendon/localization/localization.component';
import { MuskulaturTendonComponent } from './tendons/muskulatur-tendon/muskulatur-tendon.component';
import { PatellarTendonComponent } from './tendons/patellar-tendon/patellar-tendon.component';
import { PesAnserinusTendonComponent } from './tendons/pes-anserinus-tendon/pes-anserinus-tendon.component';
import { PoplitealTendonComponent } from './tendons/popliteal-tendon/popliteal-tendon.component';
import { QuadricepsTendonComponent } from './tendons/quadriceps-tendon/quadriceps-tendon.component';
import { TractusIlotibialisTendonComponent } from './tendons/tractus-ilotibialis-tendon/tractus-ilotibialis-tendon.component';
import { VesselsNervesTendonComponent } from './tendons/vessels-nerves-tendon/vessels-nerves-tendon.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    SliderNumberTripleInputModule,
    MultiValueDropdownModule,
    DynamicBaseModule,
    DescriptionTypeModule,
    KneeLocalizersModule,
    CommonImportsModule,
    InfoIconModule,
    NumberInputModule,
    SignalSliderModule,
    TabViewModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    ArticularEffusionComponent,
    SoftPartsFindingComponent,
    SynoviaComponent,
    HoffaFatBodyComponent,
    BursitisComponent,
    QuadricepsTendonComponent,
    BicepsFemorisTendonComponent,
    PoplitealTendonComponent,
    TractusIlotibialisTendonComponent,
    PesAnserinusTendonComponent,
    MuskulaturTendonComponent,
    VesselsNervesTendonComponent,
    SoftPartsComponent,
    PatellarTendonComponent,
    SynoviaDiffusComponent,
    LocalizationComponent,
    CharacterizationComponent,
    FurtherFindingsComponent,
    SoftTissueTumorComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    DifferentialDiagnosisComponent
  ],
  exports: [DifferentialDiagnosisComponent],
  entryComponents: [InfoIconComponent]
})
export class SoftPartsModule {}
