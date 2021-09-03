import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { Subscription } from 'rxjs';
import { IntervertebralDiscJointsHelperService } from '../../intervertebral-disc-joints-helper.service';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { ImageFileTypeEnum } from '@enums/spineMRT/intervertebral-disc-joints/image-file-type.enum';

@Component({
  selector: 'rr-tab-periastitis',
  templateUrl: './tab-periostitis.component.html',
  styleUrls: ['./tab-periostitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TabPeriostitisComponent implements OnInit, OnDestroy {
  @Input() model: IntervertebralDiscJointsFindingUiModel;
  imageFileTypeEnum = ImageFileTypeEnum;

  isCMYes: boolean;
  isCMYesSubscription: Subscription;

  periostitisReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_05_001_02',
    'uni_05_002_02',
    'uni_05_004_02',
    'uni_05_003_02',
    'uni_05_005_02',
    'uni_05_006_02',
    'uni_05_007_02'
  );

  constructor(private intervertebralDiscJointsHelperService: IntervertebralDiscJointsHelperService) {}

  ngOnInit() {
    this.isCMYesSubscription = this.intervertebralDiscJointsHelperService.isCMYes.subscribe(v => (this.isCMYes = v));
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.spineMRT.disc.fileUpload;
  }

  clearImage() {
    if (this.model.isIrregularThickeningOfTheCorticalBone) {
      return;
    }
    this.intervertebralDiscJointsHelperService.clearPicture(this.model, this.imageFileTypeEnum.PeriostitisImageFile);
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }
}
