import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  HistologyConfirmedType,
  LocalizationAxialType,
  LocalizationRelatedJointSpaceLevelType,
  DemarcationType,
  HomogeneityType
} from '@enums/elbowMRT/soft-tissue/';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['../soft-tissue-tumor.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() differentialDiagnosis1Options: DropdownModel[];

  descriptionType: typeof DescriptionTypeEnum;
  histologyConfirmedType: typeof HistologyConfirmedType;
  localizationAxialType: typeof LocalizationAxialType;
  localizationRelatedJointSpaceLevelType: typeof LocalizationRelatedJointSpaceLevelType;
  demarcationType: typeof DemarcationType;
  mainHomogeneityType: typeof HomogeneityType;

  constructor() {
    this.descriptionType = DescriptionTypeEnum;
    this.histologyConfirmedType = HistologyConfirmedType;
    this.localizationAxialType = LocalizationAxialType;
    this.localizationRelatedJointSpaceLevelType = LocalizationRelatedJointSpaceLevelType;
    this.demarcationType = DemarcationType;
    this.mainHomogeneityType = HomogeneityType;
  }

  resetHistoryConfirmedBlock(): void {
    this.model.isHistologicallyConfirmed = false;
    this.model.histologyConfirmedType = HistologyConfirmedType.None;
  }

  resetIsSecondary(): void {
    this.model.isSecondary = false;
  }

  resetRelatedNumberInputs(): void {
    if (this.model.extensionSizeInMm === null) {
      this.model.extensionLevel2InMm = null;
    }
    if (this.model.extensionLevel2InMm === null) {
      this.model.extensionLevel3InMm = null;
    }
  }
}
