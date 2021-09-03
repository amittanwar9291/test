import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsExtendedEnum } from '@enums/abdomenMRT/are-findings-extended.enum';
import { LymphaticSystemFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-finding-ui.model';

export class LymphaticSystemUiModel extends ReportModelBase {
  areFindings: AreFindingsExtendedEnum;
  findings: LymphaticSystemFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsExtendedEnum.None;
    this.findings = [new LymphaticSystemFindingUiModel()];
  }
}
