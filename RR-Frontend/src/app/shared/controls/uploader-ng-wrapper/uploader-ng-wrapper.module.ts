import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { FileDeleteConfirmDialogModule } from '../../dialogs/file-delete-confirm-dialog/file-delete-confirm-dialog.module';
import { FileDeleteConfirmDialogComponent } from '../../dialogs/file-delete-confirm-dialog/file-delete-confirm-dialog.component';
import { UploaderNgWrapperComponent } from './uploader-ng-wrapper.component';
import { UploaderModule } from '@controls/uploader/uploader.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule, FileDeleteConfirmDialogModule, UploaderModule, CommonImportsModule],
  declarations: [UploaderNgWrapperComponent],
  exports: [UploaderNgWrapperComponent],
  entryComponents: [FileDeleteConfirmDialogComponent]
})
export class UploaderNgWrapperModule {}
