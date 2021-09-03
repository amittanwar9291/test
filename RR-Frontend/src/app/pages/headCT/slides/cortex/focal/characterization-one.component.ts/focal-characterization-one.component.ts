import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CortexFindingUiModel } from '@models/headCT/ui/cortex/cortex-finding-ui-model';
import { ConfigurationTypeEnum } from '@enums/headCT/cortex/focal/configuration-type.enum';
import { MarginTypeEnum, HomogeneityTypeEnum, ShapeTypeEnum } from '@enums/shared/head/cortex/common';
import { DensityTypeEnum } from '@enums/headCT/common/density-type.enum';

@Component({
  selector: 'rr-focal-characterization-one',
  templateUrl: './focal-characterization-one.component.html',
  styleUrls: ['./focal-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FocalCharacterizationOneComponent {
  @Input() model: CortexFindingUiModel;
  @Input() isExaminationArea: boolean;

  marginEnum = MarginTypeEnum;
  homogeneityEnum = HomogeneityTypeEnum;
  shapeEnum = ShapeTypeEnum;
  configurationEnum = ConfigurationTypeEnum;
  densityNonenhancedeEnum = DensityTypeEnum;

  resetSizeInput() {
    if (!this.model.size) {
      this.model.size2ndPlane = null;
      this.model.size3rdPlane = null;
    } else if (!this.model.size2ndPlane) {
      this.model.size3rdPlane = null;
    }
  }
  resetMaxSizeInPreviousInput() {
    if (!this.model.maxSizeInPreviousExamination) {
      this.model.secondPlane = null;
      this.model.thirdPlane = null;
    } else if (!this.model.secondPlane) {
      this.model.thirdPlane = null;
    }
  }
}
