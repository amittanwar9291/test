import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { NerveCompressionFindingUiModel } from '@models/handMRT/ui/nerve-compression/nerve-compression-finding-ui.model';

export class NerveCompressionUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: NerveCompressionFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new NerveCompressionFindingUiModel()];
  }
}
