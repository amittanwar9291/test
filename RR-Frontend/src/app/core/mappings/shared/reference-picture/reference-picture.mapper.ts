import { Injectable } from '@angular/core';

import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { ReferencePictureApiModel } from '@models/shared/reference-picture/reference-picture-api.model';
import { FileUiModel } from '@models/shared/uploader/file-ui.model';
import { FileApiModel } from '@models/shared/uploader/file-api.model';

@Injectable({
  providedIn: 'root'
})
export class ReferencePictureMapper {
  mapToUI(pictureNumber: string, serialNumber: string, uploadedImageFile: FileApiModel, imageFileId: string): ReferencePictureUiModel {
    return {
      pictureNumber,
      serialNumber,
      uploadedImageFile: uploadedImageFile ? (uploadedImageFile as FileUiModel) : null,
      imageFileId
    };
  }

  mapToAPI(source: ReferencePictureUiModel): ReferencePictureApiModel {
    return {
      pictureNumber: source.pictureNumber,
      serialNumber: source.serialNumber,
      uploadedImageFile: source.uploadedImageFile ? (source.uploadedImageFile as FileApiModel) : null,
      imageFileId: source.imageFileId
    };
  }
}
