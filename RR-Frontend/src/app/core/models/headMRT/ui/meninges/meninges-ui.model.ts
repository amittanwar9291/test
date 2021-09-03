import { ReportModelBase } from '@models/report-model-base';
import { MeningesAreFindingsEnum } from '@enums/headMRT/meninges';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';

export class MeningesUiModel extends ReportModelBase {
  areFindings: MeningesAreFindingsEnum;
  findings: MeningesFindingUiModel[];

  constructor() {
    super();
    this.areFindings = MeningesAreFindingsEnum.None;
    this.findings = [new MeningesFindingUiModel()];
  }
}
