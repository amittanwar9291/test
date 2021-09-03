import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportLogoDialogComponent } from './import-logo-dialog/import-logo-dialog.component';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from '../../common-imports/common-imports.module';
import { BrowserModule } from '@angular/platform-browser';
import { ImageCropperModule } from 'ngx-image-cropper';
import { TranslateModule } from '@ngx-translate/core';
import { UploaderModule } from '@controls/uploader/uploader.module';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { AddOrEditDicomMapEntryDialogComponent } from './add-or-edit-dicom-map-entry-dialog/add-or-edit-dicom-map-entry-dialog.component';

@NgModule({
  declarations: [ImportLogoDialogComponent, DeleteConfirmDialogComponent, AddOrEditDicomMapEntryDialogComponent],
  imports: [CommonModule, FormsModule, CommonImportsModule, BrowserModule, ImageCropperModule, TranslateModule, UploaderModule],
  exports: [ImportLogoDialogComponent]
})
export class SettingsDialogsModule {}
