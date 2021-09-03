import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { SoftTissueComponent } from './soft-tissue.component';

import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarInputModule } from '@controls/calendar-input/calendar-input.module';
import { ResetDialogModule } from 'app/shared/dialogs/reset-dialog/reset-dialog.module';
import { ResetDialogComponent } from 'app/shared/dialogs/reset-dialog/reset-dialog.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TabViewModule } from 'primeng/tabview';
import { HandLocalizersModule } from '../../shared/hand-localizers.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { ArticularEffusionComponent } from './articular-effusion/articular-effusion.component';
import { HaematomaComponent } from './haematoma/haematoma.component';
import { SoftTissueMassComponent } from './soft-tissue-mass/soft-tissue-mass.component';
import { AbscessComponent } from './abscess/abscess.component';
import { CharacterizationOneComponent } from './soft-tissue-mass/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './soft-tissue-mass/characterization-two/characterization-two.component';
import { DifferentialdiagnosisComponent } from './soft-tissue-mass/differentialdiagnosis/differentialdiagnosis.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    DropdownModule,
    RadioButtonModule,
    CheckboxModule,
    RadioButtonModule,
    CalendarInputModule,
    ResetDialogModule,
    CommonImportsModule,
    NumberInputModule,
    TabViewModule,
    HandLocalizersModule,
    SliderNumberTripleInputModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [
    SoftTissueComponent,
    ArticularEffusionComponent,
    HaematomaComponent,
    SoftTissueMassComponent,
    AbscessComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    DifferentialdiagnosisComponent
  ],
  entryComponents: [ResetDialogComponent]
})
export class SoftTissueModule {}
