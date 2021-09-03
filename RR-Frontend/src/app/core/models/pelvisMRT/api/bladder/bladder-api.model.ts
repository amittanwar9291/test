import { ReportModelBase } from '@models/report-model-base';
import { BladderFindingApiModel } from '@models/pelvisMRT/api/bladder/bladder-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class BladderApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: BladderFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new BladderFindingApiModel()];
  }
}
