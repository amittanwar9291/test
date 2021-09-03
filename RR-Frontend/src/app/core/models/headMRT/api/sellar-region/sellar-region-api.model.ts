import { ReportModelBase } from '@models/report-model-base';
import { SellarRegionFindingApiModel } from '@models/headMRT/api/sellar-region/sellar-region-finding-api.model';
import { SellarRegionAreFindingsEnum } from '@enums/headMRT/sellar-region/sellar-region-are-findings.enum';

export class SellarRegionApiModel extends ReportModelBase {
  areFindings: SellarRegionAreFindingsEnum;
  findings: SellarRegionFindingApiModel[];

  constructor() {
    super();
    this.areFindings = SellarRegionAreFindingsEnum.None;
    this.findings = [new SellarRegionFindingApiModel()];
  }
}
