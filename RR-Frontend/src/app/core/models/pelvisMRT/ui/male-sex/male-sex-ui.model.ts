import { ReportModelBase } from '@models/report-model-base';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class MaleSexUiModel extends ReportModelBase {
  findings: MaleSexFindingUiModel[];
  areFindings: AreFindingsEnum;

  constructor() {
    super();
    this.findings = [new MaleSexFindingUiModel()];
    this.areFindings = AreFindingsEnum.None;
  }
}
