import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HomogeneityTypeEnum, LocalizationTypeEnum, MarginTypeEnum, ShapeTypeEnum } from '@enums/neckMRT/thyroid';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';

@Component({
  selector: 'rr-salivary-characterization-one',
  templateUrl: './salivary-characterization-one.component.html',
  styleUrls: ['./salivary-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SalivaryCharacterizationOneComponent {
  @Input() model: ThyroidFindingUiModel;
  @Input() isDWI: boolean;

  localizationType = LocalizationTypeEnum;
  marginType = MarginTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  shapeType = ShapeTypeEnum;

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
