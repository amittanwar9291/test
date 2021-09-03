import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';
import { MethodUiModel } from '@models/angiographyMRT/ui/technology/method-ui.model';

import { PositionTypeEnum } from '@enums/pelvisMRT/technology/position-type.enum';

export class TechnologyUiModel extends TechnologyMrtBaseUiModel<MethodUiModel> {
  // Sequences first column custom controls
  positionType: PositionTypeEnum;

  // Contrast medium custom controls
  isIntravenous: boolean;

  // Sequences fourth column
  isPulsationOrBreathing: boolean;
  isSusceptibilityArtifacts: boolean;
  isInadequateBolusTiming: boolean;

  constructor() {
    super(MethodUiModel);

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
