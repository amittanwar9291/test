import { TechnologyMrtBaseUiModel } from '@models/shared/newTechnology/ui/technology-mrt-base-ui.model';
import { SequenceUiModel } from './sequence-ui.model';

import { SpasmolysisTypeEnum } from '@enums/abdomenMRT/technology/spalmolysis-type.enum';

export class TechnologyUiModel extends TechnologyMrtBaseUiModel<SequenceUiModel> {
  // Contrast medium custom controls
  isIntravenous: boolean;

  // Sequences last
  // Oral tab
  isEnteroclysis: boolean;
  isOralContrast: boolean;
  isMaskingOrLiquidMatrix: boolean;
  // Other tab
  isRectalContrast: boolean;
  isVaginalContrast: boolean;
  isUrinaryBladderContrast: boolean;

  spasmolysisType: SpasmolysisTypeEnum;
  isPulsationOrBreathing: boolean;
  isSusceptibilityArtifacts: boolean;
  isChemicalShift: boolean;
  isIncorrectSubtraction: boolean;
  imageQualityType: number;

  constructor() {
    super(SequenceUiModel);

    // Contrast medium custom controls
    this.isIntravenous = false;

    // Sequences last
    this.isEnteroclysis = false;
    this.isOralContrast = false;
    this.isMaskingOrLiquidMatrix = false;
    // Other tab
    this.isRectalContrast = false;
    this.isVaginalContrast = false;
    this.isUrinaryBladderContrast = false;

    this.spasmolysisType = SpasmolysisTypeEnum.None;
    this.isPulsationOrBreathing = false;
    this.isSusceptibilityArtifacts = false;
    this.isChemicalShift = false;
    this.isIncorrectSubtraction = false;
    this.imageQualityType = 0;
  }
}
