import { BasalNucleiAreFindingsEnum } from '@enums/headCT/basal-nuclei/basal-nuclei-are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { BasalNucleiFindingUiModel } from './basal-nuclei-finding-ui.model';

export class BasalNucleiUiModel extends ReportModelBase {
  areFindings: BasalNucleiAreFindingsEnum;
  findings: BasalNucleiFindingUiModel[];

  constructor() {
    super();
    this.areFindings = BasalNucleiAreFindingsEnum.None;
    this.findings = [new BasalNucleiFindingUiModel()];
  }
}
