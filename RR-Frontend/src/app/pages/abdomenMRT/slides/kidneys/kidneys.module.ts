import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { ExpansionInputsGroupModule } from '@controls/expansion-inputs-group/expansion-inputs-group.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { AnomaliesAndNormVariantsComponent } from './anomalies-and-norm-variants/anomalies-and-norm-variants.component';
import { DecreasedRenalVolumeComponent } from './decreased-renal-volume/decreased-renal-volume.component';
import { IncreasedRenalVolumeComponent } from './increased-renal-volume/increased-renal-volume.component';
import { KidneysComponent } from './kidneys.component';
import { MassDifferentialDiagnosisComponent } from './mass/differential-diagnosis/mass-differential-diagnosis.component';
import { LocalizationComponent } from './mass/localization/localization.component';
import { MassComponent } from './mass/mass.component';
import { ObstructiveNephropathyComponent } from './obstructive-nephropathy/obstructive-nephropathy.component';
import { VascularNephropathyComponent } from './vascular-nephropathy/vascular-nephropathy.component';
import { CharacterizationOneComponent as ObstructiveCharacterizationOneComponent } from 'app/pages/abdomenMRT/slides/kidneys/obstructive-nephropathy/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent as ObstructiveCharacterizationTwoComponent } from 'app/pages/abdomenMRT/slides/kidneys/obstructive-nephropathy/characterization-two/characterization-two.component';
import { CharacterizationOneComponent as MassCharacterizationOneComponent } from 'app/pages/abdomenMRT/slides/kidneys/mass/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent as MassCharacterizationTwoComponent } from 'app/pages/abdomenMRT/slides/kidneys/mass/characterization-two/characterization-two.component';
import { CharacterizationOneComponent as RenalCharacterizationOneComponent } from './increased-renal-volume/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent as RenalCharacterizationTwoComponent } from './increased-renal-volume/characterization-two/characterization-two.component';
import { CharacterizationComponent } from './decreased-renal-volume/characterization/characterization.component';
import { DifferentialDiagnosisComponent as RenalDifferentialDiagnosisComponent } from './decreased-renal-volume/differential-diagnosis/differential-diagnosis.component';

@NgModule({
  declarations: [
    KidneysComponent,
    AnomaliesAndNormVariantsComponent,
    ObstructiveNephropathyComponent,
    VascularNephropathyComponent,
    MassComponent,
    DecreasedRenalVolumeComponent,
    IncreasedRenalVolumeComponent,
    LocalizationComponent,
    MassDifferentialDiagnosisComponent,
    CharacterizationComponent,
    ObstructiveCharacterizationOneComponent,
    ObstructiveCharacterizationTwoComponent,
    MassCharacterizationOneComponent,
    MassCharacterizationTwoComponent,
    RenalCharacterizationOneComponent,
    RenalCharacterizationTwoComponent,
    RenalDifferentialDiagnosisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    FindingColumnModule,
    TranslateModule,
    CommonImportsModule,
    DifferentialDiagnosisDropdownModule,
    CheckboxModule,
    TabViewModule,
    DropdownModule,
    NumberInputModule,
    ReferencePictureModule,
    ExpansionInputsGroupModule,
    SignalSliderModule,
    SliderNumberTripleInputModule
  ]
})
export class KidneysModule {}
