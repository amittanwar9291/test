import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';

export class SequenceUiModel extends SequenceUiBaseModel {
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
