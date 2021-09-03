import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsExtendedEnum } from '@enums/abdomenMRT/adrenal-glands/';
import { AdrenalGlandsFindingUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-finding-ui.model';

export class AdrenalGlandsUiModel extends ReportModelBase {
  areFindings: AreFindingsExtendedEnum;
  findings: AdrenalGlandsFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsExtendedEnum.None;
    this.findings = [new AdrenalGlandsFindingUiModel()];
  }
}
