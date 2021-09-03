import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LymphaticSystemComponent } from './lymphatic-system.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { TabViewModule } from 'primeng/tabview';
import { LymphNodesComponent } from './lymph-nodes/lymph-nodes.component';
import { LocalizationComponent } from './lymph-nodes/localization/localization.component';
import { CharacterizationOneComponent } from './lymph-nodes/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './lymph-nodes/characterization-two/characterization-two.component';
import { DifferentialDiagnosisComponent } from './lymph-nodes/differential-diagnosis/differential-diagnosis.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { ExpansionInputsGroupModule } from '@controls/expansion-inputs-group/expansion-inputs-group.module';
import { DropdownModule } from 'primeng';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { SpineSharedLocalizersModule } from '@sharedPages/spine/localizers/spine-shared-localizers.module';

@NgModule({
  declarations: [
    LymphaticSystemComponent,
    LymphNodesComponent,
    LocalizationComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    DifferentialDiagnosisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    CheckboxModule,
    FindingColumnModule,
    TabViewModule,
    NumberInputModule,
    ExpansionInputsGroupModule,
    DropdownModule,
    ReferencePictureModule,
    SpineSharedLocalizersModule
  ]
})
export class LymphaticSystemModule {}
