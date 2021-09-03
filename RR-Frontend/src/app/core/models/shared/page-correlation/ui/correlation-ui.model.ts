import { FindingBase } from '@models/shared/finding/finding.base';
import { Guid } from '@models/shared/guid/guid';

export class CorrelationUiModel extends FindingBase {
  leftFindingId: string;
  leftFindingType: string;
  isNoCorrelation: boolean;
  rightFindingId: string;
  rightFindingType: string;
  rightFindingSelectedOption: string;

  constructor() {
    super();

    this.leftFindingId = Guid.createEmpty();
    this.leftFindingType = 'None';
    this.isNoCorrelation = false;
    this.rightFindingId = null;
    this.rightFindingType = 'None';
    this.rightFindingSelectedOption = 'None';
  }
}
