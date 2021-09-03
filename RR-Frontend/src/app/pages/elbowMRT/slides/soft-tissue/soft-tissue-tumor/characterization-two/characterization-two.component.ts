import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { HomogeneityType, ContrastEnhancementQuantitativeType, HeterogenousType } from '@enums/elbowMRT/soft-tissue/';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['../soft-tissue-tumor.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() isTechnologyCMReinforcedChecked: boolean;

  contrastEnhancementQuantitativeType: typeof ContrastEnhancementQuantitativeType;
  caEnhancementHomogeneityType: typeof HomogeneityType;
  heterogenousType: typeof HeterogenousType;

  constructor() {
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType;
    this.caEnhancementHomogeneityType = HomogeneityType;
    this.heterogenousType = HeterogenousType;
  }
}
