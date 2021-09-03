import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { AtlantooccipitalDistanceTypesEnum, SpinalCanalStenosisTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints';
import { Subscription } from 'rxjs';
import { IntervertebralDiscJointsHelperService } from '../../intervertebral-disc-joints-helper.service';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { ImageFileTypeEnum } from '@enums/spineMRT/intervertebral-disc-joints/image-file-type.enum';

@Component({
  selector: 'rr-tab-arthritis-periostitis',
  templateUrl: './tab-arthritis-periostitis.component.html',
  styleUrls: ['./tab-arthritis-periostitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TabArthritisPeriostitisComponent implements OnInit, OnDestroy {
  @Input() model: IntervertebralDiscJointsFindingUiModel;
  atlantooccipitalDistanceTypesEnum = AtlantooccipitalDistanceTypesEnum;
  spinalCanalStenosisTypesEnum = SpinalCanalStenosisTypesEnum;
  imageFileTypeEnum = ImageFileTypeEnum;
  isCMYes: boolean;
  isCMYesSubscription: Subscription;

  periostitisReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_05_001_06',
    'uni_05_002_06',
    'uni_05_003_06',
    'uni_05_004_06',
    'uni_05_005_06',
    'uni_05_006_06',
    'uni_05_007_06'
  );

  constructor(private intervertebralDiscJointsHelperService: IntervertebralDiscJointsHelperService) {}

  ngOnInit() {
    this.isCMYesSubscription = this.intervertebralDiscJointsHelperService.isCMYes.subscribe(v => (this.isCMYes = v));
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

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
  }
}
