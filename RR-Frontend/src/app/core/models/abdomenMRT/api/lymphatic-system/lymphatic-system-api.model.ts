import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsExtendedEnum } from '@enums/abdomenMRT/are-findings-extended.enum';
import { LymphaticSystemFindingApiModel } from '@models/abdomenMRT/api/lymphatic-system/lymphatic-system-finding-api.model';

export class LymphaticSystemApiModel extends ReportModelBase {
  areFindings: AreFindingsExtendedEnum;
  findings: LymphaticSystemFindingApiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsExtendedEnum.None;
    this.findings = [];
  }
}
