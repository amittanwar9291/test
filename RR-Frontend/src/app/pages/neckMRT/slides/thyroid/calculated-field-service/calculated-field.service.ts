import { TotalVolumeTypeEnum } from '@enums/neckMRT/thyroid';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';

export class CalculatedFieldService {
  static resetBothRightPlanes(model: ThyroidFindingUiModel): void {
    if (model.sizeRightLobeInMm === null) {
      model.sizeRightLobeSecondPlaneInMm = null;
      this.resetThirdRightPlane(model);
    }
  }

  static resetThirdRightPlane(model: ThyroidFindingUiModel): void {
    if (model.sizeRightLobeSecondPlaneInMm === null) {
      model.sizeRightLobeThirdPlaneInMm = null;
    }
  }

  static resetBothLeftPlanes(model: ThyroidFindingUiModel): void {
    if (model.sizeLeftLobeInMm === null) {
      model.sizeLeftLobeSecondPlaneInMm = null;
      this.resetThirdLeftPlane(model);
    }
  }

  static resetThirdLeftPlane(model: ThyroidFindingUiModel): void {
    if (model.sizeLeftLobeSecondPlaneInMm === null) {
      model.sizeLeftLobeThirdPlaneInMm = null;
    }
  }

  static calculateTotalVolume(model: ThyroidFindingUiModel): void {
    if (
      !model.sizeLeftLobeInMm ||
      !model.sizeLeftLobeSecondPlaneInMm ||
      !model.sizeLeftLobeThirdPlaneInMm ||
      !model.sizeRightLobeInMm ||
      !model.sizeRightLobeSecondPlaneInMm ||
      !model.sizeRightLobeThirdPlaneInMm ||
      model.totalVolumeType !== TotalVolumeTypeEnum.AutomaticCalculation
    ) {
      model.automaticCalculationInMl = null;
      return;
    } else {
      const leftLobe = model.sizeLeftLobeInMm * model.sizeLeftLobeSecondPlaneInMm * model.sizeLeftLobeThirdPlaneInMm;
      const rightLobe = model.sizeRightLobeInMm * model.sizeRightLobeSecondPlaneInMm * model.sizeRightLobeThirdPlaneInMm;
      model.automaticCalculationInMl = Math.round((leftLobe + rightLobe) * 0.529);
    }
  }
}
