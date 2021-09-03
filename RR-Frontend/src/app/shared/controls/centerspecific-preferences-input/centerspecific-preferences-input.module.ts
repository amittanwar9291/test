import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CenterspecificPreferencesInputComponent } from '@controls/centerspecific-preferences-input/centerspecific-preferences-input.component';

import { CommonImportsModule } from '../../common-imports/common-imports.module';
import { TranslateModule } from '@ngx-translate/core';
import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { DropdownModule } from 'primeng/dropdown';
import { CenterspecificPreferenceDeleteConfirmDialogComponent } from '../../dialogs/centerspecific-preference-delete-confirm-dialog/centerspecific-preference-delete-confirm-dialog.component';
import { CenterspecificPreferenceDeleteConfirmDialogModule } from '../../dialogs/centerspecific-preference-delete-confirm-dialog/centerspecific-preference-delete-confirm-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    TranslateModule,
    MultiValueDropdownModule,
    DropdownModule,
    CenterspecificPreferenceDeleteConfirmDialogModule
  ], // TODO check if TranslateModule and MultiValueDropdownModule are necessary
  declarations: [CenterspecificPreferencesInputComponent],
  exports: [CenterspecificPreferencesInputComponent],
  entryComponents: [CenterspecificPreferenceDeleteConfirmDialogComponent]
})
export class CenterspecificPreferencesInputModule {}
