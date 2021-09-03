import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { CoronaryArteriesFindingUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-finding-ui.model';

export class CoronaryArteriesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: CoronaryArteriesFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new CoronaryArteriesFindingUiModel()];
  }
}
