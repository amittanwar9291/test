import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdrenalGlandsComponent } from './adrenal-glands.component';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { CheckboxModule } from 'primeng/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { TabViewModule } from 'primeng/tabview';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { MassComponent } from './mass/mass.component';
import { AdrenalHyperplasiaComponent } from './adrenal-hyperplasia/adrenal-hyperplasia.component';
import { CharacterizationOneComponent } from './mass/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './mass/characterization-two/characterization-two.component';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { ExpansionInputsGroupModule } from '@controls/expansion-inputs-group/expansion-inputs-group.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

@NgModule({
  declarations: [
    AdrenalGlandsComponent,
    MassComponent,
    AdrenalHyperplasiaComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    CommonImportsModule,
    FindingColumnModule,
    NumberInputModule,
    CheckboxModule,
    TranslateModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    SignalSliderModule,
    ExpansionInputsGroupModule,
    ReferencePictureModule
  ]
})
export class AdrenalGlandsModule {}
