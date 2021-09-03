import {
  MStageTypeEnum,
  NStageHPVMinusTypeEnum,
  NStageHPVPlusTypeEnum,
  NStageTypeEnum,
  TNMClassificationTypeEnum,
  TStageTypeEnum
} from '@enums/neckMRT/summary';

import { FindingBase } from '@models/shared/finding/finding.base';

export class TNMClassificationUiModel extends FindingBase {
  classificationType: TNMClassificationTypeEnum;
  tStageType: TStageTypeEnum;
  nStageType: NStageTypeEnum;
  mStageType: MStageTypeEnum;
  nStageHPVMinusType: NStageHPVMinusTypeEnum;
  nStageHPVPlusType: NStageHPVPlusTypeEnum;
  isT0: boolean;

  constructor() {
    super();
    this.classificationType = TNMClassificationTypeEnum.None;
    this.tStageType = TStageTypeEnum.None;
    this.nStageType = NStageTypeEnum.None;
    this.mStageType = MStageTypeEnum.None;
    this.nStageHPVMinusType = NStageHPVMinusTypeEnum.None;
    this.nStageHPVPlusType = NStageHPVPlusTypeEnum.None;
    this.isT0 = false;
  }
}
