import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';

export class SoftPartsUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SoftPartsFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SoftPartsFindingUiModel()];
  }
}
