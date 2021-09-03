import { FileApiModel } from '@models/shared/uploader/file-api.model';

export class ReferencePictureApiModel {
  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileApiModel;
  imageFileId: string;

  constructor() {
    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;
  }
}
