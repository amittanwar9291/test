import { ReportModelBase } from '@models/report-model-base';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class FemaleSexUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: FemaleSexFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new FemaleSexFindingUiModel()];
  }
}
