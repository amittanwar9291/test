import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { FileDeleteConfirmDialogComponent } from './file-delete-confirm-dialog.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [FileDeleteConfirmDialogComponent]
})
export class FileDeleteConfirmDialogModule {}
