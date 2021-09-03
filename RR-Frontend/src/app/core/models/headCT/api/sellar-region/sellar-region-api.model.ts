import { ReportModelBase } from '@models/report-model-base';
import { SellarRegionFindingApiModel } from '@models/headCT/api/sellar-region/sellar-region-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class SellarRegionApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SellarRegionFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SellarRegionFindingApiModel()];
  }
}
