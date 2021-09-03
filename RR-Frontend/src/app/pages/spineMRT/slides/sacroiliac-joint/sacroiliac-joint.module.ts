import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { TranslateModule } from '@ngx-translate/core';

import { SpineSharedLocalizersModule } from '@sharedPages/spine/localizers/spine-shared-localizers.module';

import { SacroiliacJointComponent } from './sacroiliac-joint.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SparccScoreEditorDialogComponent } from './sparcc-score-editor-dialog/sparcc-score-editor-dialog.component';
import { SpineLocalizersModule } from '../../shared/spine-localizers.module';
import { SparccEditorConfirmDialogModule } from '../../../../shared/dialogs/sparcc-editor-confirm-dialog/sparcc-editor-confirm-dialog.module';
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
    FormsModule,
    CommonImportsModule,
    SpineSharedLocalizersModule,
    FindingColumnModule,
    NumberInputModule,
    SpineLocalizersModule,
    SparccEditorConfirmDialogModule,
    DifferentialDiagnosisDropdownModule
  ],
  declarations: [SacroiliacJointComponent, SparccScoreEditorDialogComponent]
})
export class SacroiliacJointModule {}
