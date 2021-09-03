import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';
import { SequenceUiModel } from './sequence-ui.model';

import { PositionTypeEnum } from '@enums/pelvisMRT/technology/position-type.enum';
import { SpasmolysisTypeEnum } from '@enums/pelvisMRT/technology/spalmolysis-type.enum';

export class TechnologyUiModel extends TechnologyMrtBaseUiModel<SequenceUiModel> {
  // Contrast medium custom controls
  isIntravenous: boolean;

  // Sequences first column custom controls
  positionType: PositionTypeEnum;

  // Sequences fourth column custom controls
  isSpasmolysis: boolean;
  spasmolysisType: SpasmolysisTypeEnum;
  isOralContrast: boolean;
  isVaginalContrast: boolean;
  isRectalContrast: boolean;
  isPulsationOrBreathing: boolean;
  isSusceptibilityArtifacts: boolean;
  isChemicalShift: boolean;
  isIncorrectSubtraction: boolean;

  constructor() {
    super(SequenceUiModel);

    // Contrast medium custom controls
    this.isIntravenous = false;

    // Sequences first column custom controls
    this.positionType = PositionTypeEnum.None;

    // Sequences fourth column custom controls
    this.isSpasmolysis = false;
    this.spasmolysisType = SpasmolysisTypeEnum.None;
    this.isOralContrast = false;
    this.isVaginalContrast = false;
    this.isRectalContrast = false;
    this.isPulsationOrBreathing = false;
    this.isSusceptibilityArtifacts = false;
    this.isChemicalShift = false;
    this.isIncorrectSubtraction = false;
  }
}
