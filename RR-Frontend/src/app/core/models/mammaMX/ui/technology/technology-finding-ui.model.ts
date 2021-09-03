import { FindingBase } from '@models/shared/finding/finding.base';
import { TechnologyFindingType } from '@enums/mammaMX/technology';

export class TechnologyFindingUiModel extends FindingBase {
  findingType: TechnologyFindingType;
  isContrastAgentForGalactography: boolean;
  contrastVolumeInMl: number;

  constructor() {
    super();
    this.findingType = TechnologyFindingType.None;
    this.isContrastAgentForGalactography = false;
    this.contrastVolumeInMl = null;
  }
}
