import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { AorticModule } from '../../../angiographyMRT/shared/aortic.module';
import { ThoraxCTLocalizersModule } from '../../../thoraxCT/shared/thoraxCT-localizers.module';
import { MediastinumComponent } from './mediastinum.component';
import { MediastinumFindingComponent } from './mediastinum-finding/mediastinum-finding.component';
import { LymphNodesComponent } from './lymph-nodes/lymph-nodes.component';
import { CardioPulmonaryArteriesComponent } from './cardio-pulmonary-arteries/cardio-pulmonary-arteries.component';
import { CardioHeartComponent } from './cardio-heart/cardio-heart.component';
import { CardioThoracicAortaComponent } from './cardio-thoracic-aorta/cardio-thoracic-aorta.component';
import { MassComponent } from './mass/mass.component';
import { CharacterizationOneComponent } from './mass/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './mass/characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent } from './mass/differential-diagnosis/differential-diagnosis.component';
import { EsuphagusComponent } from './esuphagus/esuphagus.component';
import { TracheaComponent } from './trachea/trachea.component';

@NgModule({
  declarations: [
    MediastinumComponent,
    MediastinumFindingComponent,
    LymphNodesComponent,
    CardioPulmonaryArteriesComponent,
    CardioHeartComponent,
    CardioThoracicAortaComponent,
    MassComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    DifferentialDiagnosisComponent,
    EsuphagusComponent,
    TracheaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    TranslateModule,
    FindingColumnModule,
    CheckboxModule,
    CommonImportsModule,
    NumberInputModule,
    ThoraxCTLocalizersModule,
    DifferentialDiagnosisDropdownModule,
    AorticModule,
    TabViewModule,
    SignalSliderModule,
    DropdownModule
  ]
})
export class MediastinumModule {}
