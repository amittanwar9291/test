import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { LocalizationAxialType, LocalizationRelatedJointSpaceLevelType } from '@enums/elbowMRT/soft-tissue/';

@Component({
  selector: 'rr-abcess',
  templateUrl: './abcess.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AbcessComponent {
  @Input() model: SoftTissueFindingUiModel;

  localizationAxialType: typeof LocalizationAxialType;
  localizationRelatedJointSpaceLevelType: typeof LocalizationRelatedJointSpaceLevelType;

  constructor() {
    this.localizationAxialType = LocalizationAxialType;
    this.localizationRelatedJointSpaceLevelType = LocalizationRelatedJointSpaceLevelType;
  }
}
