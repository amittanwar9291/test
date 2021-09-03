import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';
import { Observable } from 'rxjs/internal/Observable';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { AppConfig } from '../../../../app.config';
import { FileService } from '@services/shared/file-service/file.service';

export class SpineCTSoftTissuesLargeLocalizerConfig {
  localizerType: 'standard' | 'directional';
  model: SpineLocation | SpineDirectionalLocation;

  constructor(localizerType: 'standard' | 'directional', model?: SpineLocation | SpineDirectionalLocation) {
    this.localizerType = localizerType;
    this.model = model ? model : null;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SoftTissuesHelperService {
  constructor(private fileService: FileService) {}

  largeLocalizerOpenedConfig = new BehaviorSubject<SpineCTSoftTissuesLargeLocalizerConfig>(null);
  isCMYes = new BehaviorSubject<boolean>(null);
  activeTabIndex = new BehaviorSubject<number>(0);
  reportId = null;

  clearImage(imageId: string): Promise<any> {
    const fileUploadUrl = AppConfig.settings.servicesUrls.spineCT.softTissues.fileUpload;
    const route = `${fileUploadUrl}/${this.reportId}/${imageId}`;
    return this.fileService.delete(route);
  }
}
