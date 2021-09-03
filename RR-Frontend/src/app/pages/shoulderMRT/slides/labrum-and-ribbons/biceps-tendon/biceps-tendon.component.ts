import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AppConfig } from 'app/app.config';

import { LabrumAndRibbonsFindingUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-findings-ui.model';

import {
  LongBicepsTendonType,
  PulleyLesionDetailsType,
  DislocationDetailsType,
  DislocationFromSulcusType
} from '@enums/shoulderMRT/labrum-and-ribbons/';

@Component({
  selector: 'rr-biceps-tendon',
  templateUrl: './biceps-tendon.component.html',
  styleUrls: ['../labrum-and-ribbons.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BicepsTendonComponent {
  @Input() model: LabrumAndRibbonsFindingUiModel;

  longBicepsTendonType: typeof LongBicepsTendonType;
  pulleyLesionBiceps: typeof PulleyLesionDetailsType;
  dislocationDetailsType: typeof DislocationDetailsType;
  dislocationFromSulcusType: typeof DislocationFromSulcusType;

  constructor() {
    this.longBicepsTendonType = LongBicepsTendonType;
    this.pulleyLesionBiceps = PulleyLesionDetailsType;
    this.dislocationDetailsType = DislocationDetailsType;
    this.dislocationFromSulcusType = DislocationFromSulcusType;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.shoulderMRT.labrumAndRibbons.fileUpload;
  }
}
