import { SequenceApiBaseModel } from '@models/shared/newTechnology/api/sequence-api-base.model';

export class SequenceApiModel extends SequenceApiBaseModel {
  isChemicalShiftImaging: boolean;
  isBreathHoldingTechnique: boolean;
  isSedation: boolean;
  isPostContrast: boolean;
  isPostContrastSubtraction: boolean;
  isPostContrastPerfusion: boolean;

  constructor() {
    super();
    this.isChemicalShiftImaging = false;
    this.isBreathHoldingTechnique = false;
    this.isSedation = false;
    this.isPostContrast = false;
    this.isPostContrastSubtraction = false;
    this.isPostContrastPerfusion = false;
  }
}
