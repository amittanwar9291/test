import { Component, OnInit } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { RatingUiModel } from '@models/mammaMRT/ui/rating/rating-ui.model';
import { AnatomyEnhancementUi } from '@models/mammaMRT/ui/anatomy-enhancement/anatomy-enhancement-ui.model';

import { NavigationService } from '@services/shared/navigation/navigation.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import {
  FurtherActionTypeEnum,
  BiopsyLocalizationTypeEnum,
  BiopsyModalityTypeEnum,
  DateTypeEnum,
  LocationTypeEnum
} from '@enums/mammaMRT/rating';
import { GlandularBodyEnum } from '@enums/mammaMRT/anatomy-enhancement';

@Component({
  selector: 'rr-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent extends SlideBaseComponent<RatingUiModel> implements OnInit {
  furtherActionType: typeof FurtherActionTypeEnum;
  biopsyLocalizationType: typeof BiopsyLocalizationTypeEnum;
  biopsyModalityType: typeof BiopsyModalityTypeEnum;
  ultrasoundDateType: typeof DateTypeEnum;
  ultrasoundLocationType: typeof LocationTypeEnum;
  mammographyDateType: typeof DateTypeEnum;
  mammographyLocationType: typeof LocationTypeEnum;
  mriDateType: typeof DateTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, RatingUiModel, commonServices);

    this.furtherActionType = FurtherActionTypeEnum;
    this.biopsyLocalizationType = BiopsyLocalizationTypeEnum;
    this.biopsyModalityType = BiopsyModalityTypeEnum;
    this.ultrasoundDateType = DateTypeEnum;
    this.ultrasoundLocationType = LocationTypeEnum;
    this.mammographyDateType = DateTypeEnum;
    this.mammographyLocationType = LocationTypeEnum;
    this.mriDateType = DateTypeEnum;
    this.registerConnection();
  }

  private registerConnection() {
    this.registerConnectionCallback(5, AnatomyEnhancementUi, (remoteModel: AnatomyEnhancementUi) => {
      switch (remoteModel.glandularBody) {
        case GlandularBodyEnum.AlmostEntirelyFat: {
          this.model.acrDensityIndex = 1;
          break;
        }
        case GlandularBodyEnum.ScatteredFibroglandularTissue: {
          this.model.acrDensityIndex = 2;
          break;
        }
        case GlandularBodyEnum.HeterogeneousFibroglandularTissue: {
          this.model.acrDensityIndex = 3;
          break;
        }
        case GlandularBodyEnum.ExtremeFibroglandularTissue: {
          this.model.acrDensityIndex = 4;
          break;
        }
      }
    });
  }
}
