import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';

import { Subscription } from 'rxjs';

import {
  ContrastEnhancementQuantitativeTypeEnum,
  GastrointestinalDifferentialDiagnosisTypeEnum,
  GastrointestinalHomogeneityTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/common';

@Component({
  selector: 'rr-gastric-mass-characterization-two',
  templateUrl: './gastric-mass-characterization-two.component.html',
  styleUrls: ['./gastric-mass-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class GastricMassCharacterizationTwoComponent {
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() isDWIInAnySequence: boolean;
  @Input() isCMReinforced: boolean;

  subscriptions: Subscription[] = [];
  differentialDiagnosisType = GastrointestinalDifferentialDiagnosisTypeEnum;
  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityType = GastrointestinalHomogeneityTypeEnum;
  cmEnhancementHomogeneityType = GastrointestinalHomogeneityTypeEnum;
}
