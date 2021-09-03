import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';

import {
  ContrastEnhancementQuantitativeTypeEnum,
  FormTypeEnum,
  GastrointestinalHomogeneityTypeEnum,
  MarginTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/common';
import { IntestinalMassExtensionTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/intestinal-mass';

@Component({
  selector: 'rr-intestinal-mass-characterization-one',
  templateUrl: './intestinal-mass-characterization-one.component.html',
  styleUrls: ['./intestinal-mass-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IntestinalMassCharacterizationOneComponent {
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() isDWIInAnySequence: boolean;
  @Input() isCMReinforced: boolean;

  marginType = MarginTypeEnum;
  homogeneityType = GastrointestinalHomogeneityTypeEnum;
  formType = FormTypeEnum;
  cmEnhancementHomogeneityType = GastrointestinalHomogeneityTypeEnum;
  contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum;
  intestinalMassExtensionType = IntestinalMassExtensionTypeEnum;
}
