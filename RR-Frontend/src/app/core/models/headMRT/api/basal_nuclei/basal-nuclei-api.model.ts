import { ReportModelBase } from '@models/report-model-base';
import { BasalNucleiFindingApiModel } from '@models/headMRT/api/basal_nuclei/basal-nuclei-finding-api.model';
import { BasalNucleiAreFindingsEnum } from '@enums/headMRT/basal-nuclei/basal-nuclei-are-findings.enum';

export class BasalNucleiApiModel extends ReportModelBase {
  areFindings: BasalNucleiAreFindingsEnum;
  findings: BasalNucleiFindingApiModel[];
  constructor() {
    super();
    this.areFindings = BasalNucleiAreFindingsEnum.None;
    this.findings = [new BasalNucleiFindingApiModel()];
  }
}
