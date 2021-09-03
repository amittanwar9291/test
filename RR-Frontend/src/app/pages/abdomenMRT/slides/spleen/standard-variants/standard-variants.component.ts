import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PlantVariationPathologicalAnatomyTypeEnum } from '@enums/abdomenMRT/spleen';
import { SpleenFindingUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-ui.model';

@Component({
  selector: 'rr-standard-variants',
  templateUrl: './standard-variants.component.html',
  styleUrls: ['./standard-variants.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StandardVariantsComponent {
  @Input() model: SpleenFindingUiModel;

  plantVariationPathologicalAnatomyTypeEnum = PlantVariationPathologicalAnatomyTypeEnum;

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

  get isPolyspleniaOrSplenosisOrSubsidiarySpleen(): boolean {
    return [
      PlantVariationPathologicalAnatomyTypeEnum.Polysplenia,
      PlantVariationPathologicalAnatomyTypeEnum.Splenosis,
      PlantVariationPathologicalAnatomyTypeEnum.SubsidiarySpleen
    ].includes(this.model.plantVariationPathologicalAnatomyType);
  }
}
