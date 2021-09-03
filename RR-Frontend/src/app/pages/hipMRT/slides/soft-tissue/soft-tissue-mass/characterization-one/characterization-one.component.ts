import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HistologyKnownTypeEnum, HomogeneityTypeEnum, MarginTypeEnum, SideTypeEnum } from '@enums/hipMRT/soft-tissue';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() diffDiagnosisFullOptions: DropdownModel[];

  descriptionType: typeof DescriptionTypeEnum;
  sideType: typeof SideTypeEnum;
  histologyKnownTypeEnum: typeof HistologyKnownTypeEnum;
  marginType: typeof MarginTypeEnum;
  homogeneityType: typeof HomogeneityTypeEnum;

  constructor() {
    this.descriptionType = DescriptionTypeEnum;
    this.sideType = SideTypeEnum;
    this.histologyKnownTypeEnum = HistologyKnownTypeEnum;
    this.marginType = MarginTypeEnum;
    this.homogeneityType = HomogeneityTypeEnum;
  }

  resetBothPlanes(): void {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }

  resetDifferentialDiagnosisDependentFields(): void {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.isSubordinated = false;
  }
}
