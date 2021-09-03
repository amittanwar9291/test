import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CenterspecificPreferenceDeleteConfirmDialogComponent } from './centerspecific-preference-delete-confirm-dialog.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  exports: [CenterspecificPreferenceDeleteConfirmDialogComponent],
  declarations: [CenterspecificPreferenceDeleteConfirmDialogComponent]
})
export class CenterspecificPreferenceDeleteConfirmDialogModule {}
