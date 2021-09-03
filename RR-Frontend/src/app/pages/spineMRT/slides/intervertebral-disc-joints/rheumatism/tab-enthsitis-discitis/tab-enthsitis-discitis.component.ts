import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { AnderssonFractureTypesEnum, EntheitisTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints';
import { IntervertebralDiscJointsHelperService } from '../../intervertebral-disc-joints-helper.service';
import { Subscription } from 'rxjs';
import { AppConfig } from '../../../../../../app.config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { ImageFileTypeEnum } from '@enums/spineMRT/intervertebral-disc-joints/image-file-type.enum';

@Component({
  selector: 'rr-tab-enthsitis-discitis',
  templateUrl: './tab-enthsitis-discitis.component.html',
  styleUrls: ['./tab-enthsitis-discitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TabEnthsitisDiscitisComponent implements OnInit, OnDestroy {
  @Input() model: IntervertebralDiscJointsFindingUiModel;
  entheitisTypesEnum = EntheitisTypesEnum;
  anderssonFractureTypesEnum = AnderssonFractureTypesEnum;
  isCMYes: boolean;
  isCMYesSubscription: Subscription;
  spondylitisNumberTypeArray: DropdownModel[];
  translateSubscription: Subscription;
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

  discitisReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_05_001_05',
    'uni_05_002_05',
    'uni_05_003_05',
    'uni_05_004_05',
    'uni_05_005_05',
    'uni_05_006_05',
    'uni_05_007_05'
  );

  constructor(
    private translateService: TranslateService,
    private intervertebralDiscJointsHelperService: IntervertebralDiscJointsHelperService
  ) {}

  ngOnInit() {
    this.isCMYesSubscription = this.intervertebralDiscJointsHelperService.isCMYes.subscribe(v => (this.isCMYes = v));
    this.translateSubscription = this.translateService
      .stream('spineMRT.disc.spondylitisNumberTypeArray.options')
      .subscribe((out: DropdownModel[]) => {
        this.spondylitisNumberTypeArray = Object.values(out);
      });
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

  clearAllFlorideImages() {
    return this.intervertebralDiscJointsHelperService.clearFewPictures(this.model, [
      this.imageFileTypeEnum.AnteriorImageFile,
      this.imageFileTypeEnum.MarginalisImageFile,
      this.imageFileTypeEnum.PosteriorImageFile
    ]);
  }

  ngOnDestroy() {
    this.isCMYesSubscription.unsubscribe();
    this.translateSubscription.unsubscribe();
  }
}
