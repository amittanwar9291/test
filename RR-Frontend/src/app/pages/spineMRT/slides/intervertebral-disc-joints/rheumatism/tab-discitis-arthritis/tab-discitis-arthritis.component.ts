import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { AnderssonFractureTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { ImageFileTypeEnum } from '@enums/spineMRT/intervertebral-disc-joints/image-file-type.enum';
import { IntervertebralDiscJointsHelperService } from '../../intervertebral-disc-joints-helper.service';

@Component({
  selector: 'rr-tab-discitis-arthritis',
  templateUrl: './tab-discitis-arthritis.component.html',
  styleUrls: ['./tab-discitis-arthritis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TabDiscitisArthritisComponent {
  @Input() model: IntervertebralDiscJointsFindingUiModel;
  anderssonFractureTypesEnum = AnderssonFractureTypesEnum;
  imageFileTypeEnum = ImageFileTypeEnum;
  elementsRrIds = new ReferencePictureRRIds(
    'uni_05_001_01',
    'uni_05_002_01',
    'uni_05_003_01',
    'uni_05_004_01',
    'uni_05_005_01',
    'uni_05_006_01',
    'uni_05_007_01'
  );

  constructor(private intervertebralDiscJointsHelperService: IntervertebralDiscJointsHelperService) {}

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.spineMRT.disc.fileUpload;
  }

  clearImage() {
    if (this.model.isAnderssonLesion) {
      return;
    }
    this.intervertebralDiscJointsHelperService.clearPicture(this.model, this.imageFileTypeEnum.DiscitisImageFile);
  }
}
