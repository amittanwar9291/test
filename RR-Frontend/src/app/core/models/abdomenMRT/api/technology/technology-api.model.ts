import { TechnologyMrtBaseApiModel } from '@models/shared/newTechnology/api/technology-mrt-base-api.model';
import { SequenceApiModel } from './sequence-api.model';

import { SpasmolysisTypeEnum } from '@enums/abdomenMRT/technology/spalmolysis-type.enum';

export class TechnologyApiModel extends TechnologyMrtBaseApiModel<SequenceApiModel> {
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
  imageQualityType: string;

  constructor() {
    super();

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

    // Sequences last
    this.spasmolysisType = SpasmolysisTypeEnum.None;
    this.isPulsationOrBreathing = false;
    this.isSusceptibilityArtifacts = false;
    this.isChemicalShift = false;
    this.isIncorrectSubtraction = false;
    this.imageQualityType = 'None';
  }
}
