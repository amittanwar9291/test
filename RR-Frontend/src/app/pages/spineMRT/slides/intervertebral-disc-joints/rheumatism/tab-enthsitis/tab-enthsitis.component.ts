import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { EntheitisTypesEnum, PathologyTypesEnum, SpondylitisNumberTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints';
import { Subscription } from 'rxjs';
import { IntervertebralDiscJointsHelperService } from '../../intervertebral-disc-joints-helper.service';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { ImageFileTypeEnum } from '@enums/spineMRT/intervertebral-disc-joints/image-file-type.enum';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

@Component({
  selector: 'rr-tab-enthsitis',
  templateUrl: './tab-enthsitis.component.html',
  styleUrls: ['./tab-enthsitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TabEnthsitisComponent implements OnInit, OnDestroy {
  @Input() model: IntervertebralDiscJointsFindingUiModel;
  entheitisTypesEnum = EntheitisTypesEnum;
  pathologyTypesEnum = PathologyTypesEnum;
  spondylitisNumberTypesEnum = SpondylitisNumberTypesEnum;
  isCMYes: boolean;
  isCMYesSubscription: Subscription;
  imageFileTypeEnum = ImageFileTypeEnum;

  anteriorReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_05_001_02',
    'uni_05_002_02',
    'uni_05_003_02',
    'uni_05_004_02',
    'uni_05_005_02',
    'uni_05_006_02',
    'uni_05_007_02'
  );

  posteriorReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_05_001_03',
    'uni_05_002_03',
    'uni_05_003_03',
    'uni_05_004_03',
    'uni_05_005_03',
    'uni_05_006_03',
    'uni_05_007_03'
  );

  marginalisReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_05_001_04',
    'uni_05_002_04',
    'uni_05_003_04',
    'uni_05_004_04',
    'uni_05_005_04',
    'uni_05_006_04',
    'uni_05_007_04'
  );

  constructor(private intervertebralDiscJointsHelperService: IntervertebralDiscJointsHelperService) {}

  ngOnInit() {
    this.isCMYesSubscription = this.intervertebralDiscJointsHelperService.isCMYes.subscribe(v => (this.isCMYes = v));
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.spineMRT.disc.fileUpload;
  }

  clearImage(shouldNotBeClear, imageToClear: ImageFileTypeEnum): Promise<any> {
    if (shouldNotBeClear) {
      return;
    }
    return this.intervertebralDiscJointsHelperService.clearPicture(this.model, imageToClear);
  }

  clearAllImages() {
    return this.intervertebralDiscJointsHelperService.clearFewPictures(this.model, [
      this.imageFileTypeEnum.AnteriorImageFile,
      this.imageFileTypeEnum.MarginalisImageFile,
      this.imageFileTypeEnum.PosteriorImageFile
    ]);
  }
}
