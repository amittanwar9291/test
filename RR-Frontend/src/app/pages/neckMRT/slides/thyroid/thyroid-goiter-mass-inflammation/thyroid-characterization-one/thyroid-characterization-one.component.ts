import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HomogeneityTypeEnum } from '@enums/neckMRT/thyroid/common/homogeneity-type.enum';
import { MarginTypeEnum } from '@enums/neckMRT/thyroid/common/margin-type.enum';
import { GrowthTypeEnum } from '@enums/neckMRT/thyroid/thyroid-goiter-mass-inflammation/growth-type.enum';
import { MeasurementTypeEnum } from '@enums/neckMRT/thyroid/thyroid-goiter-mass-inflammation/measurement-type.enum';
import { TotalVolumeTypeEnum } from '@enums/neckMRT/thyroid/common/total-volume-type.enum';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { CalculatedFieldService } from '../../calculated-field-service/calculated-field.service';

@Component({
  selector: 'rr-thyroid-characterization-one',
  templateUrl: './thyroid-characterization-one.component.html',
  styleUrls: ['./thyroid-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ThyroidCharacterizationOneComponent {
  @Input() model: ThyroidFindingUiModel;

  measurementType = MeasurementTypeEnum;
  totalVolumeType = TotalVolumeTypeEnum;
  growthType = GrowthTypeEnum;
  marginType = MarginTypeEnum;
  homogeneityType = HomogeneityTypeEnum;

  inputDisable(name: string): boolean {
    switch (name) {
      case nameof<ThyroidFindingUiModel>(m => m.sizeRightLobeSecondPlaneInMm): {
        return this.model.sizeRightLobeInMm === null;
      }
      case nameof<ThyroidFindingUiModel>(m => m.sizeRightLobeThirdPlaneInMm): {
        return this.model.sizeRightLobeInMm === null || this.model.sizeRightLobeSecondPlaneInMm === null;
      }
      case nameof<ThyroidFindingUiModel>(m => m.sizeLeftLobeSecondPlaneInMm): {
        return this.model.sizeLeftLobeInMm === null;
      }
      case nameof<ThyroidFindingUiModel>(m => m.sizeLeftLobeThirdPlaneInMm): {
        return this.model.sizeLeftLobeInMm === null || this.model.sizeLeftLobeSecondPlaneInMm === null;
      }
      case nameof<ThyroidFindingUiModel>(m => m.secondPlaneInMm): {
        return this.model.sizeInMm === null;
      }
      case nameof<ThyroidFindingUiModel>(m => m.thirdPlaneInMm): {
        return this.model.sizeInMm === null || this.model.secondPlaneInMm === null;
      }
    }
  }

  resetBothPlanes(): void {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.resetThirdRightPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }

  resetBothRightPlanes(): void {
    CalculatedFieldService.resetBothRightPlanes(this.model);
  }

  resetThirdRightPlane(): void {
    CalculatedFieldService.resetThirdRightPlane(this.model);
  }

  resetBothLeftPlanes(): void {
    CalculatedFieldService.resetBothLeftPlanes(this.model);
  }

  resetThirdLeftPlane(): void {
    CalculatedFieldService.resetThirdLeftPlane(this.model);
  }

  calculateTotalVolume(): void {
    CalculatedFieldService.calculateTotalVolume(this.model);
  }
}
