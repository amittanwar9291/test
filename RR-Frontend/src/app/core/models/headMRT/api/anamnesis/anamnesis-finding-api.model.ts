import { FindingBase } from '@models/shared/finding/finding.base';

import { AnamnesisFindingTypeEnum } from '@enums/headMRT/anamnesis';

export class AnamnesisFindingApiModel extends FindingBase {
  // Common
  findingType: AnamnesisFindingTypeEnum;
  isSuspectedDiagnosis: boolean;

  constructor() {
    super();

    // Common
    this.findingType = AnamnesisFindingTypeEnum.None;
    this.isSuspectedDiagnosis = false;
  }
}
