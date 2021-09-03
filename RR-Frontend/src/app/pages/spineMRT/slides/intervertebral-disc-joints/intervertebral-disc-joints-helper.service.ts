import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FileService } from '@services/shared/file-service/file.service';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { AppConfig } from '../../../../app.config';
import { ImageFileTypeEnum } from '@enums/spineMRT/intervertebral-disc-joints/image-file-type.enum';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { compact } from 'lodash';
import { NavigationService } from '@services/shared';
import { IntervertebralDiscJointsLargeLocalizerConfig } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-large-localizer-config.model';

@Injectable({
  providedIn: 'root'
})
export class IntervertebralDiscJointsHelperService {
  largeLocalizerOpened = new BehaviorSubject<IntervertebralDiscJointsLargeLocalizerConfig>(null);
  isCMYes = new BehaviorSubject<boolean>(null);

  imageEnumToModelProp = {
    MarginalisImageFile: 'marginalisReferencePicture',
    PosteriorImageFile: 'posteriorReferencePicture',
    AnteriorImageFile: 'anteriorReferencePicture',
    DiscitisImageFile: 'discitisReferencePicture',
    PeriostitisImageFile: 'periostitisReferencePicture'
  };

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.spineMRT.disc.fileUpload;
  }

  constructor(private fileService: FileService, public navService: NavigationService) {}

  clearPicture(model: IntervertebralDiscJointsFindingUiModel, imageToRemoveReference: ImageFileTypeEnum): Promise<any> {
    const imageToRemoveId: string = model[this.imageEnumToModelProp[imageToRemoveReference]].uploadedImageFile?.id;
    const clearReferencePicture = () => (model[this.imageEnumToModelProp[imageToRemoveReference]] = new ReferencePictureUiModel());
    if (imageToRemoveId) {
      const reportId = this.navService.getReportData().id;
      this.fileService.setRoute(`${AppConfig.settings.servicesUrls.spineMRT.disc.fileUpload}/${reportId}/${imageToRemoveId}`);
      return this.fileService.delete().then(() => clearReferencePicture());
    } else {
      clearReferencePicture();
    }
  }

  clearFewPictures(model: IntervertebralDiscJointsFindingUiModel, imagesToRemoveReference: ImageFileTypeEnum[]) {
    const imagesToRemoveIds: string[] = compact(
      imagesToRemoveReference.map(r => {
        if (model[this.imageEnumToModelProp[r]].uploadedImageFile?.id) {
          return model[this.imageEnumToModelProp[r]].uploadedImageFile.id;
        }
      })
    );
    const clearReferencePictures = () => {
      imagesToRemoveReference.forEach(imageToRemoveReference => {
        model[this.imageEnumToModelProp[imageToRemoveReference]] = new ReferencePictureUiModel();
      });
    };
    if (imagesToRemoveIds.length > 0) {
      this.fileService.setRoute(`${AppConfig.settings.servicesUrls.spineMRT.disc.fileUpload}`);
      return this.fileService.deleteMultiple(imagesToRemoveIds).then(() => clearReferencePictures());
    } else {
      clearReferencePictures();
    }
  }
}
