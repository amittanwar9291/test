import { FindingBase } from '@models/shared/finding/finding.base';
import { Guid } from '@models/shared/guid/guid';

export class CorrelationApiModel extends FindingBase {
  mammographyFindingId: string;
  mammographyFindingType: string;
  isNoCorrelation: boolean;
  ultrasoundFindingId: string;
  ultrasoundFindingType: string;

  constructor() {
    super();

    this.mammographyFindingId = Guid.createEmpty();
    this.mammographyFindingType = 'None';
    this.isNoCorrelation = false;
    this.ultrasoundFindingId = null;
    this.ultrasoundFindingType = 'None';
  }
}
