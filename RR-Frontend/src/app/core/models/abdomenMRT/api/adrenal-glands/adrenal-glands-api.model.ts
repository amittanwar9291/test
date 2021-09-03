import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsExtendedEnum } from '@enums/abdomenMRT/adrenal-glands/';
import { AdrenalGlandsFindingApiModel } from '@models/abdomenMRT/api/adrenal-glands/adrenal-glands-finding-api.model';

export class AdrenalGlandsApiModel extends ReportModelBase {
  areFindings: AreFindingsExtendedEnum;
  findings: AdrenalGlandsFindingApiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsExtendedEnum.None;
    this.findings = [];
  }
}
