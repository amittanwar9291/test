import { FindingBase } from '@models/shared/finding/finding.base';

import { IndicationFindingTypeEnum, KnownTypeEnum, StatusTypeEnum } from '@enums/cardioMRT';

export class IndicationFindingUiModel extends FindingBase {
  // Common
  indicationFindingType: IndicationFindingTypeEnum;
  isSuspicionOf: boolean;

  // CoronaryHeartDisease
  statusType: StatusTypeEnum;
  knownType: KnownTypeEnum;
  isECG: boolean;
  isEchocardiography: boolean;
  isSPECT: boolean;
  isPET: boolean;
  isCT: boolean;

  constructor() {
    super();

    // Common
    this.indicationFindingType = IndicationFindingTypeEnum.None;
    this.isSuspicionOf = false;

    // CoronaryHeartDisease
    this.statusType = StatusTypeEnum.None;
    this.knownType = KnownTypeEnum.None;
    this.isECG = false;
    this.isEchocardiography = false;
    this.isSPECT = false;
    this.isPET = false;
    this.isCT = false;
  }
}
