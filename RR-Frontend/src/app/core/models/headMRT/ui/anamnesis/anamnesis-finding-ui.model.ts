import { FindingBase } from '@models/shared/finding/finding.base';
import { AnamnesisFindingTypeEnum } from '@enums/headMRT/anamnesis';

export class AnamnesisFindingUiModel extends FindingBase {
  // Common
  findingType: AnamnesisFindingTypeEnum;

  constructor() {
    super();

    // Common
    this.findingType = AnamnesisFindingTypeEnum.None;
  }
}
