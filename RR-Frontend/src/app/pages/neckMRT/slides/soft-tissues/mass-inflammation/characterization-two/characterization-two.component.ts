import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { SoftTissuesFindingUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { HomogeneityTypeEnum, MarginTypeEnum } from '@enums/neckMRT/soft-tissues/mass-inflammation';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: SoftTissuesFindingUiModel;
  @Input() shapeDifferentialDiagnosisOptions: DropdownModel[];
  @Input() isDWI: boolean;

  marginType: typeof MarginTypeEnum;
  homogeneityType: typeof HomogeneityTypeEnum;

  constructor() {
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
}
