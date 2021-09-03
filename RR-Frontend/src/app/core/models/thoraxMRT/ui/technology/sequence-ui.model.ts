import { SequenceUiBaseModel } from '@models/shared/newTechnology/ui/sequence-ui-base.model';

export class SequenceUiModel extends SequenceUiBaseModel {
  isRespiratoryTriggering: boolean;
  isPostContrast: boolean;
  isECGTriggering: boolean;
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
    this.isRespiratoryTriggering = false;
    this.isPostContrast = false;
    this.isECGTriggering = false;
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
