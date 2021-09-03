import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { CloseButtonModule } from '@controls/close-button/close-button.module';

import { CardioMorphologyEditDialogComponent } from './cardio-morphology-edit-dialog/cardio-morphology-edit-dialog.component';
import { CardioRelaxationTimeEditDialogComponent } from './cardio-relaxation-time-edit-dialog/cardio-relaxation-time-edit-dialog.component';
import { CardioLocalizersModule } from '../../../shared/cardio-localizers.module';
import { CardioSingleCircleEditDialogComponent } from './cardio-single-circle-edit-dialog/cardio-single-circle-edit-dialog.component';
import { CommonImportsModule } from '../../../../../shared/common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule, CardioLocalizersModule, CloseButtonModule, CommonImportsModule],
  declarations: [CardioMorphologyEditDialogComponent, CardioRelaxationTimeEditDialogComponent, CardioSingleCircleEditDialogComponent],
  entryComponents: [CardioMorphologyEditDialogComponent, CardioRelaxationTimeEditDialogComponent, CardioSingleCircleEditDialogComponent]
})
export class CardioLocalizerEditDialogsModule {}
