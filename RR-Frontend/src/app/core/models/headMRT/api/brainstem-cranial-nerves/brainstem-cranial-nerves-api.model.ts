import { BrainstemCranialNervesAreFindingsTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves/brainstem-cranial-nerves-are-findings-type.enum';
import { ReportModelBase } from '@models/report-model-base';
import { BrainstemCranialNervesFindingApiModel } from './brainstem-cranial-nerves-finding-api.model';
export class BrainstemCranialNervesApiModel extends ReportModelBase {
  areFindings: BrainstemCranialNervesAreFindingsTypeEnum;
  isInTheHighResolutionSequences: boolean;
  findings: BrainstemCranialNervesFindingApiModel[];

  constructor() {
    super();
    this.areFindings = BrainstemCranialNervesAreFindingsTypeEnum.None;
    this.isInTheHighResolutionSequences = false;
    this.findings = [new BrainstemCranialNervesFindingApiModel()];
  }
}
