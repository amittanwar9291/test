import { BasalNucleiAreFindingsEnum } from '@enums/headCT/basal-nuclei/basal-nuclei-are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { BasalNucleiFindingApiModel } from './basal-nuclei-finding-api.model';

export class BasalNucleiApiModel extends ReportModelBase {
  areFindings: BasalNucleiAreFindingsEnum;
  findings: BasalNucleiFindingApiModel[];

  constructor() {
    super();
    this.areFindings = BasalNucleiAreFindingsEnum.None;
    this.findings = [new BasalNucleiFindingApiModel()];
  }
}
