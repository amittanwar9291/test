import { FileUiModel } from '@models/shared/uploader/file-ui.model';

export class ReferencePictureUiModel {
  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileUiModel;
  imageFileId: string;

  constructor() {
    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;
  }
}
