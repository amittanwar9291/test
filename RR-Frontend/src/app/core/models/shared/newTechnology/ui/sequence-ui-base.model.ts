import { FindingBase } from '@models/shared/finding/finding.base';

import { MethodTypeEnum, OrientationTypeEnum } from '@enums/shared/technology';
import { WeightingTypeEnum } from '@enums/shared/technology/weighting-type.enum';

export class SequenceUiBaseModel extends FindingBase {
  /**
   * TODO verify if all those props are used in all third pages sequences (if not - remove such a prop from this model and API model).
   * It's left intentionally unchanged because I don't know if some of those properties are not used in other 3rd pages that were not
   * redesigned yet.
   */
  weightingType: WeightingTypeEnum; // this prop should be common for all 3rd pages for sure, cardioMRT
  methodType: MethodTypeEnum;
  sequenceType: string; // common for at least mammaMRT, shoulderMRT, kneeMRT, cardioMRT
  orientationType: OrientationTypeEnum; // common for at least mammaMRT, shoulderMRT, kneeMRT, cardioMRT, headMRT
  isSaturatedFat: boolean; // common for at least mammaMRT, shoulderMRT, kneeMRT, headMRT
  is3D: boolean; // common for at least mammaMRT, shoulderMRT, kneeMRT, headMRT
  isParallelImaging: boolean; // common for at least mammaMRT, shoulderMRT, kneeMRT, headMRT

  constructor() {
    super();
    this.weightingType = WeightingTypeEnum.None;
    this.methodType = MethodTypeEnum.None;
    this.sequenceType = 'None';
    this.orientationType = OrientationTypeEnum.None;
    this.isSaturatedFat = false;
    this.is3D = false;
    this.isParallelImaging = false;
  }
}
