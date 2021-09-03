import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { AnamnesisUiModel } from '@models/kneeMRT/ui/anamnesis/anamnesis-ui.model';
import { KneeCross } from '@models/kneeMRT/ui/knee/knee-cross.model';
import { AnamnesisValidationModel } from '@models/kneeMRT/ui/anamnesis/anamnesis-validation.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import {
  TraumaTypeEnum,
  TraumaVelocityTypeEnum,
  CartilageTransplantationTypeEnum,
  InstabilityLocalizationTypeEnum,
  KneePainLocalizationTypeEnum
} from '@enums/kneeMRT/anamnesis/';

@Component({
  selector: 'rr-knee-mrt-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  traumaType: typeof TraumaTypeEnum;
  traumaVelocityType: typeof TraumaVelocityTypeEnum;
  cartilageTransplantationType: typeof CartilageTransplantationTypeEnum;
  instabilityLocalizationType: typeof InstabilityLocalizationTypeEnum;
  kneePainLocalizationType: typeof KneePainLocalizationTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices, AnamnesisValidationModel);

    this.traumaType = TraumaTypeEnum;
    this.traumaVelocityType = TraumaVelocityTypeEnum;
    this.cartilageTransplantationType = CartilageTransplantationTypeEnum;
    this.instabilityLocalizationType = InstabilityLocalizationTypeEnum;
    this.kneePainLocalizationType = KneePainLocalizationTypeEnum;
  }

  clearTraumaDetails() {
    this.model.traumaType = TraumaTypeEnum.None;
    this.model.traumaVelocityType = TraumaVelocityTypeEnum.None;
    this.model.dateOfTrauma = new MonthYearModel();
  }

  clearLuxation() {
    this.model.dateOfLuxation = new MonthYearModel();
  }

  clearResectionLocation() {
    this.model.resectionLocation = new KneeCross();
  }

  clearSutureLocation() {
    this.model.sutureLocation = new KneeCross();
  }

  clearMeniscusSurgery() {
    this.model.isResection = false;
    this.model.isSuture = false;
    this.clearResectionLocation();
    this.clearSutureLocation();
  }
}
