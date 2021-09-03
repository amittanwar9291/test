import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparccEditorConfirmDialogComponent } from './sparcc-editor-confirm-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SparccEditorConfirmDialogComponent],
  imports: [CommonModule, TranslateModule]
})
export class SparccEditorConfirmDialogModule {}
