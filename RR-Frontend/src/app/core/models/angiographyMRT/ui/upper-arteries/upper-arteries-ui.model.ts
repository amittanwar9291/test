import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { UpperArteriesFindingUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-finding-ui.model';
import { ReportModelBase } from '@models/report-model-base';

export class UpperArteriesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: UpperArteriesFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new UpperArteriesFindingUiModel()];
  }
}
