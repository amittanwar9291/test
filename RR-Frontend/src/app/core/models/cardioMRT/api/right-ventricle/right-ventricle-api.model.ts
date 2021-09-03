import { ReportModelBase } from '@models/report-model-base';

import { FindingTypeEnum, FunctionTypeEnum, RightVentricleTypeEnum } from '@enums/cardioMRT';

export class RightVentricleApiModel extends ReportModelBase {
  findingType: FindingTypeEnum;

  isMyocardialEdema: boolean;
  myocardialEdemaType: RightVentricleTypeEnum;
  isWallThickening: boolean;
  wallThickeningType: RightVentricleTypeEnum;
  isWallThinning: boolean;
  wallThinningType: RightVentricleTypeEnum;
  isMicroAneurysm: boolean;
  isOverOneLesion: boolean;
  isFatSignalInMyocardium: boolean;

  functionType: FunctionTypeEnum;
  lgeType: RightVentricleTypeEnum;

  constructor() {
    super();

    this.findingType = FindingTypeEnum.None;

    this.isMyocardialEdema = false;
    this.myocardialEdemaType = RightVentricleTypeEnum.None;
    this.isWallThickening = false;
    this.wallThickeningType = RightVentricleTypeEnum.None;
    this.isWallThinning = false;
    this.wallThinningType = RightVentricleTypeEnum.None;
    this.isMicroAneurysm = false;
    this.isOverOneLesion = false;
    this.isFatSignalInMyocardium = false;

    this.functionType = FunctionTypeEnum.None;
    this.lgeType = RightVentricleTypeEnum.None;
  }
}
