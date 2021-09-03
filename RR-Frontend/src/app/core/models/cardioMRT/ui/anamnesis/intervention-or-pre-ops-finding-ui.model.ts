import { FindingBase } from '@models/shared/finding/finding.base';

import { AorticValveTypeEnum, InterventionOrPreOpsFindingTypeEnum, MitralValveTypeEnum } from '@enums/cardioMRT';

export class InterventionOrPreOpsFindingUiModel extends FindingBase {
  // Common
  interventionOrPreOpsFindingType: InterventionOrPreOpsFindingTypeEnum;

  // ValveReplacement
  isAorticValve: boolean;
  aorticValveType: AorticValveTypeEnum;
  isMitralValve: boolean;
  mitralValveType: MitralValveTypeEnum;

  // RVOTIntervention
  isPulmonaryArteryBandingPAB: boolean;

  constructor() {
    super();

    // Common
    this.interventionOrPreOpsFindingType = InterventionOrPreOpsFindingTypeEnum.None;

    // ValveReplacement
    this.isAorticValve = false;
    this.aorticValveType = AorticValveTypeEnum.None;
    this.isMitralValve = false;
    this.mitralValveType = MitralValveTypeEnum.None;

    // RVOTIntervention
    this.isPulmonaryArteryBandingPAB = false;
  }
}
