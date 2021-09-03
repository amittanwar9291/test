import { SequenceApiBaseModel } from '@models/shared/newTechnology/api/sequence-api-base.model';

export class SequenceApiModel extends SequenceApiBaseModel {
  // First column
  isChemicalShiftImaging: boolean;
  isCineImaging: boolean;
  isMrcp: boolean;

  // Second column
  isPostContrast: boolean;
  isSubtraction: boolean;
  isB0: boolean;
  isB50: boolean;
  isB100: boolean;
  isB800: boolean;
  isB1000: boolean;
  isADCMap: boolean;

  constructor() {
    super();

    // First column
    this.isChemicalShiftImaging = false;
    this.isCineImaging = false;
    this.isMrcp = false;

    // Second column
    this.isPostContrast = false;
    this.isSubtraction = false;
    this.isB0 = false;
    this.isB50 = false;
    this.isB100 = false;
    this.isB800 = false;
    this.isB1000 = false;
    this.isADCMap = false;
  }
}
