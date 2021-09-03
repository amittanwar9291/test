import { FindingCorrelationOptionModel } from '@models/shared/page-correlation/ui/finding-correlation-option.model';

export class SummaryFindingCorrelationOptionUiModel {
  leftFindings: FindingCorrelationOptionModel[];
  rightFindings: FindingCorrelationOptionModel[];

  constructor() {
    this.leftFindings = [];
    this.rightFindings = [];
  }
}
