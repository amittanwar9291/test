import { ReportModelBase } from '@models/report-model-base';
import { CapsuleAndRibbonsFindingUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-finding-ui.model';

export class CapsuleAndRibbonsUiModel extends ReportModelBase {
  findings: CapsuleAndRibbonsFindingUiModel[];
  areFindings: string;

  constructor() {
    super();
    this.findings = [new CapsuleAndRibbonsFindingUiModel()];
    this.areFindings = 'None';
  }
}
