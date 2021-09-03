import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';

export class MeningesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: MeningesFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new MeningesFindingUiModel()];
  }
}
