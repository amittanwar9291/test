import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BasalNucleiFindingUiModel } from '@models/headCT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { Subscription } from 'rxjs';
import { MarginTypeEnum } from '@enums/headCT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headCT/common/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/headCT/common/shape-type.enum';
import { DensityTypeEnum } from '@enums/headCT/basal-nuclei/density-type.enum';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: BasalNucleiFindingUiModel;

  isWeightingTypeDWISubscription: Subscription;
  isWeightingTypeDWI: boolean;

  marginType = MarginTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  shapeType = ShapeTypeEnum;
  densityType = DensityTypeEnum;

  resetBothPlanes(): void {
    if (!this.model.size) {
      this.model.size2ndPlane = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.size2ndPlane) {
      this.model.size3rdPlane = null;
    }
  }
}
