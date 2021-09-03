import { BrainstemCranialNervesAreFindingsTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves/brainstem-cranial-nerves-are-findings-type.enum';
import { ReportModelBase } from '@models/report-model-base';
import { BrainstemCranialNervesFindingUiModel } from './brainstem-cranial-nerves-finding-ui.model';

export class BrainstemCranialNervesUiModel extends ReportModelBase {
  areFindings: BrainstemCranialNervesAreFindingsTypeEnum;
  isInTheHighResolutionSequences: boolean;
  findings: BrainstemCranialNervesFindingUiModel[];

  constructor() {
    super();
    this.areFindings = BrainstemCranialNervesAreFindingsTypeEnum.None;
    this.isInTheHighResolutionSequences = false;
    this.findings = [new BrainstemCranialNervesFindingUiModel()];
  }
}
