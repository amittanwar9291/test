import { FindingBase } from '@models/shared/finding/finding.base';
import { MethodTypeEnum, OrientationTypeEnum } from '@enums/shared/technology';
import { WeightingTypeEnum } from '@enums/shared/technology/weighting-type.enum';

export class SequenceApiBaseModel extends FindingBase {
  weightingType: WeightingTypeEnum;
  methodType: MethodTypeEnum;
  sequenceType: string;
  orientationType: OrientationTypeEnum;
  isSaturatedFat: boolean;
  is3D: boolean;
  isParallelImaging: boolean;

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
