import { TechnologyMrtBaseApiModel } from '@models/shared/newTechnology/api/technology-mrt-base-api.model';
import { SequenceApiModel } from './sequence-api.model';

import { PositionTypeEnum } from '@enums/pelvisMRT/technology/position-type.enum';
import { SpasmolysisTypeEnum } from '@enums/pelvisMRT/technology/spalmolysis-type.enum';

export class TechnologyApiModel extends TechnologyMrtBaseApiModel<SequenceApiModel> {
  // Contrast medium custom controls
  isIntravenous: boolean;

  // Sequences first column custom controls
  positionType: PositionTypeEnum;

  // Sequences fourth column
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
    super();

    // Contrast medium custom controls
    this.isIntravenous = false;

    // Sequences first column custom controls
    this.positionType = PositionTypeEnum.None;

    // Sequences fourth column
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
