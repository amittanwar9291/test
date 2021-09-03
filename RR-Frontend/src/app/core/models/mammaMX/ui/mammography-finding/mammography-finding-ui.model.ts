import { ReportModelBase } from '@models/report-model-base';
import { MammographyFindingFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class MammographyFindingUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: MammographyFindingFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new MammographyFindingFindingUiModel()];
  }
}
