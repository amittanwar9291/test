import { ReportModelBase } from '@models/report-model-base';
import { BasalNucleiFindingUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { BasalNucleiAreFindingsEnum } from '@enums/headMRT/basal-nuclei/basal-nuclei-are-findings.enum';

export class BasalNucleiUiModel extends ReportModelBase {
  areFindings: BasalNucleiAreFindingsEnum;
  findings: BasalNucleiFindingUiModel[];
  constructor() {
    super();
    this.areFindings = BasalNucleiAreFindingsEnum.None;
    this.findings = [new BasalNucleiFindingUiModel()];
  }
}
