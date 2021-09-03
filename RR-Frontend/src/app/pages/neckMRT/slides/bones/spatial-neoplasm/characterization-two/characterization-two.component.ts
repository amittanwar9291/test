import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { CorticalBoneTypeEnum, HomogeneityTypeEnum, MarginTypeEnum, ShapeTypeEnum } from '@enums/neckMRT/bones';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: BonesFindingUiModel;

  marginType: typeof MarginTypeEnum;
  homogeneityType: typeof HomogeneityTypeEnum;
  shapeType: typeof ShapeTypeEnum;
  corticalBoneType: typeof CorticalBoneTypeEnum;

  constructor() {
    this.marginType = MarginTypeEnum;
    this.homogeneityType = HomogeneityTypeEnum;
    this.shapeType = ShapeTypeEnum;
    this.corticalBoneType = CorticalBoneTypeEnum;
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
