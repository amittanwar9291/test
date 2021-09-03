import { Component } from '@angular/core';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AppConfig } from '../../../../app.config';
import { InstituteHttpService } from '@services/shared/settings/institute-http.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';

@Component({
  selector: 'rr-import-logo-dialog',
  templateUrl: './import-logo-dialog.component.html',
  styleUrls: ['./import-logo-dialog.component.scss']
})
export class ImportLogoDialogComponent extends ResizableBaseComponent {
  imageChangedEvent: Event;
  croppedImage: string;
  acceptedFormats = ['.png', '.jpg', '.jpeg'];

  constructor(
    public ref: DynamicDialogRef,
    private instituteHttpService: InstituteHttpService,
    private toastMessageService: ToastMessageService
  ) {
    super();
  }

  fileChangeEvent(event: Event): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  uploadLogo() {
    if (!this.croppedImage) {
      return;
    }
    const image = this.croppedImage.replace('data:image/png;base64,', '');
    this.instituteHttpService.uploadInstituteLogo(image).subscribe(response => {
      if (response.isSuccess) {
        this.toastMessageService.showSuccessToast('settings.toastMessages.instituteLogoUploaded');
        AppConfig.settings.customerLogo = 'data:image/png;base64,' + image;
      } else {
        this.toastMessageService.showErrorToast(response.reason);
      }
      this.ref.close(true);
    });
  }

  dialogCancel() {
    this.ref.close();
  }
}
