import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { RightVentricleValidationModel } from '@models/cardioMRT/ui/right-ventricle/right-ventricle-validation.model';
import { RightVentricleUiModel } from '@models/cardioMRT/ui/right-ventricle/right-ventricle-ui.model';

import { FindingTypeEnum, FunctionTypeEnum, RightVentricleTypeEnum } from '@enums/cardioMRT';

@Component({
  selector: 'rr-right-ventricle',
  templateUrl: './right-ventricle.component.html',
  styleUrls: ['./right-ventricle.component.scss']
})
export class RightVentricleComponent extends SlideBaseComponent<RightVentricleUiModel> {
  findingType: typeof FindingTypeEnum;
  rightVentricleType: typeof RightVentricleTypeEnum;
  functionType: typeof FunctionTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, RightVentricleUiModel, commonServices, RightVentricleValidationModel);
    this.findingType = FindingTypeEnum;
    this.rightVentricleType = RightVentricleTypeEnum;
    this.functionType = FunctionTypeEnum;
  }
}
