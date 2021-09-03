import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { LocalizationAxialType, LocalizationRelatedJointSpaceLevelType, HematomaCharacterizationType } from '@enums/elbowMRT/soft-tissue/';

@Component({
  selector: 'rr-hematoma',
  templateUrl: './hematoma.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class HematomaComponent {
  @Input() model: SoftTissueFindingUiModel;

  localizationAxialType: typeof LocalizationAxialType;
  localizationRelatedJointSpaceLevelType: typeof LocalizationRelatedJointSpaceLevelType;
  hematomaCharacterizationType: typeof HematomaCharacterizationType;

  constructor() {
    this.localizationAxialType = LocalizationAxialType;
    this.localizationRelatedJointSpaceLevelType = LocalizationRelatedJointSpaceLevelType;
    this.hematomaCharacterizationType = HematomaCharacterizationType;
  }
}
