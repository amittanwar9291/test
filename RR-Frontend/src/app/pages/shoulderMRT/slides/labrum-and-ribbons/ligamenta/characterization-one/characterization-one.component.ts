import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AppConfig } from 'app/app.config';

import { LabrumAndRibbonsFindingUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-findings-ui.model';

import { PulleyLesionDetailsType, LigGlenoIGHLLocalizationType } from '@enums/shoulderMRT/labrum-and-ribbons';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['../../labrum-and-ribbons.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: LabrumAndRibbonsFindingUiModel;
  @Input() characterizationCheckboxGroup: string;

  rupturePulleyLesionAfterHabermayer: typeof PulleyLesionDetailsType;
  ruptureLigGlenoIGHLLocalization: typeof LigGlenoIGHLLocalizationType;

  constructor() {
    this.rupturePulleyLesionAfterHabermayer = PulleyLesionDetailsType;
    this.ruptureLigGlenoIGHLLocalization = LigGlenoIGHLLocalizationType;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.shoulderMRT.labrumAndRibbons.fileUpload;
  }
}
