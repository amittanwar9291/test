import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { TendonsAndMusclesFindingUiModel } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-finding-ui.model';

import { LocalizationTypeEnum } from '@enums/elbowMRT/musles-and-tendons/localization-type.enum';
import { TearTypeEnum } from '@enums/elbowMRT/musles-and-tendons/tear-type.enum';
import { TendinopathyPronatorThickeningTypeEnum } from '@enums/elbowMRT/musles-and-tendons/tendinopathy-pronator-thickening-type.enum';
import { CompleteRuptureRetractionTypeEnum } from '@enums/elbowMRT/musles-and-tendons/complete-rupture-retraction-type.enum';

@Component({
  selector: 'rr-epicondylitis',
  templateUrl: './epicondylitis.component.html',
  styleUrls: ['./epicondylitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EpicondylitisComponent {
  @Input() model: TendonsAndMusclesFindingUiModel;

  localizationType: typeof LocalizationTypeEnum;
  tearType: typeof TearTypeEnum;
  tendinopathyPronatorThickeningType: typeof TendinopathyPronatorThickeningTypeEnum;
  completeRuptureRetractionType: typeof CompleteRuptureRetractionTypeEnum;

  constructor() {
    this.localizationType = LocalizationTypeEnum;
    this.tearType = TearTypeEnum;
    this.tendinopathyPronatorThickeningType = TendinopathyPronatorThickeningTypeEnum;
    this.completeRuptureRetractionType = CompleteRuptureRetractionTypeEnum;
  }
}
