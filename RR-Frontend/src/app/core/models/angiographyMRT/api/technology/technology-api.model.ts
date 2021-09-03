import { TechnologyMrtBaseApiModel } from '@models/shared/newTechnology/api/technology-mrt-base-api.model';
import { MethodApiModel } from '@models/angiographyMRT/api/technology/method-api.model';

import { PositionTypeEnum } from '@enums/pelvisMRT/technology/position-type.enum';

export class TechnologyApiModel extends TechnologyMrtBaseApiModel<MethodApiModel> {
  // Sequences first column custom controls
  positionType: PositionTypeEnum;

  // Contrast medium custom controls
  isIntravenous: boolean;

  // Sequences fourth column
  isPulsationOrBreathing: boolean;
  isSusceptibilityArtifacts: boolean;
  isInadequateBolusTiming: boolean;

  constructor() {
    super();

    // Sequences first column custom controls
    this.positionType = PositionTypeEnum.None;

    // Contrast medium custom controls
    this.isIntravenous = false;

    // Sequences fourth column
    this.isPulsationOrBreathing = false;
    this.isSusceptibilityArtifacts = false;
    this.isInadequateBolusTiming = false;
  }
}
