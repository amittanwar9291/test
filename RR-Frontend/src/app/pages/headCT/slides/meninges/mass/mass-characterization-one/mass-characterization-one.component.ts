import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';
import { DensityTypeEnum } from '@enums/headCT/common/density-type.enum';
import { ShapeTypeEnum } from '@enums/headCT/common/shape-type.enum';
import { HomogeneityTypeEnum } from '@enums/headCT/common/homogeneity-type.enum';
import { MarginTypeEnum } from '@enums/headCT/common/margin-type.enum';

@Component({
  selector: 'rr-mass-characterization-one',
  templateUrl: './mass-characterization-one.component.html',
  styleUrls: ['./mass-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassCharacterizationOneComponent {
  @Input() model: MeningesFindingUiModel;

  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;
  densityTypeEnum = DensityTypeEnum;

  onSizeInMmChange() {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    }
  }

  onSecondPlaneInMmChange() {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
}
