import { Component, OnInit } from '@angular/core';

import { AreaOfExaminationUiModel } from '@models/cardioMRT/ui/area-of-examination/area-of-examination-ui.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CardioScoresService } from '@services/cardioMRT/cardio-scores.service';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { AnamnesisUiModel } from '@models/cardioMRT/ui/anamnesis/anamnesis-ui.model';

@Component({
  selector: 'rr-area-of-examination',
  templateUrl: './area-of-examination.component.html'
})
export class AreaOfExaminationComponent extends SlideBaseComponent<AreaOfExaminationUiModel> implements OnInit {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private cardioScoresService: CardioScoresService
  ) {
    super(navService, slideRequestService, changeDetectionService, AreaOfExaminationUiModel, commonServices);
  }

  ngOnInit() {
    super.ngOnInit();

    this.registerGetCallback(() => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
    });

    this.addPageConnection(
      2,
      AnamnesisUiModel,
      () => this.model.patientInformation.gender !== GenderTypeEnum.None,
      (model: AnamnesisUiModel) => {
        model.escScore = this.cardioScoresService.calculateEscScore(
          model,
          this.model.patientInformation.age,
          this.model.patientInformation.gender
        );
      }
    );
  }
}
