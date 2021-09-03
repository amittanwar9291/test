import { ReportModelBase } from '@models/report-model-base';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';

export class SoftPartsUiModel extends ReportModelBase {
  areFindings: string;
  findings: SoftPartsFindingUiModel[];

  constructor() {
    super();

    this.areFindings = 'None';
    this.findings = [new SoftPartsFindingUiModel()];
  }
}
