import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { MarginTypeEnum } from '@enums/headCT/common/margin-type.enum';
import { DensityTypeEnum } from '@enums/headCT/common/density-type.enum';
import { HomogeneityTypeEnum } from '@enums/headCT/common/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/headCT/common/shape-type.enum';

@Component({
  selector: 'rr-mass-characterization-one-tab',
  templateUrl: './mass-characterization-one-tab.component.html',
  styleUrls: ['./mass-characterization-one-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassCharacterizationOneTabComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;

  marginTypeEnum = MarginTypeEnum;
  densityTypeEnum = DensityTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;

  resetSecondAndThirdPlane(): void {
    if (!this.model.size) {
      this.model.secondPlane = null;
      this.model.thirdPlane = null;
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlane) {
      this.model.thirdPlane = null;
    }
  }
}
