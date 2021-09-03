import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { UploaderComponent } from './uploader.component';
import { FileDeleteConfirmDialogModule } from '../../dialogs/file-delete-confirm-dialog/file-delete-confirm-dialog.module';
import { FileDeleteConfirmDialogComponent } from '../../dialogs/file-delete-confirm-dialog/file-delete-confirm-dialog.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FileDeleteConfirmDialogModule],
  declarations: [UploaderComponent],
  exports: [UploaderComponent],
  entryComponents: [FileDeleteConfirmDialogComponent]
})
export class UploaderModule {}
