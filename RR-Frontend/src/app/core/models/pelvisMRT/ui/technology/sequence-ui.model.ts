import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';

export class SequenceUiModel extends SequenceUiBaseModel {
  // First column
  isCineImaging: boolean;
  isHighResolution: boolean;
  isDefaecography: boolean;

  // Second column
  isPostContrast: boolean;
  isSubtraction: boolean;
  isB0: boolean;
  isB50: boolean;
  isB100: boolean;
  isB800: boolean;
  isB1000: boolean;
  isB1400: boolean;
  isCalculated: boolean;
  isADCMap: boolean;

  constructor() {
    super();

    // First column
    this.isCineImaging = false;
    this.isHighResolution = false;
    this.isDefaecography = false;

    // Second column
    this.isPostContrast = false;
    this.isSubtraction = false;
    this.isB0 = false;
    this.isB50 = false;
    this.isB100 = false;
    this.isB800 = false;
    this.isB1000 = false;
    this.isB1400 = false;
    this.isCalculated = false;
    this.isADCMap = false;
  }
}
