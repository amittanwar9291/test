import { ReportModelBase } from '@models/report-model-base';
import { CapsuleAndRibbonsFindingApiModel } from '@models/handMRT/api/capsule-and-ribbons/capsule-and-ribbons-finding-api.model';

export class CapsuleAndRibbonsApiModel extends ReportModelBase {
  findings: CapsuleAndRibbonsFindingApiModel[];
  areFindings: string;

  constructor() {
    super();
    this.findings = [new CapsuleAndRibbonsFindingApiModel()];
    this.areFindings = 'None';
  }
}
