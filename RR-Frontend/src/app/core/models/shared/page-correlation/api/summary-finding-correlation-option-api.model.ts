import { FindingCorrelationOptionModel } from '@models/shared/page-correlation/ui/finding-correlation-option.model';

export class SummaryFindingCorrelationOptionApiModel {
  mammographyFindings: FindingCorrelationOptionModel[];
  ultrasoundFindings: FindingCorrelationOptionModel[];

  constructor() {
    this.mammographyFindings = [];
    this.ultrasoundFindings = [];
  }
}
