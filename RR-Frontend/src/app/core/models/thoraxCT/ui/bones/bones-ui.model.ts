import { ReportModelBase } from '@models/report-model-base';
import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class BonesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: BonesFindingUiModel[];
  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new BonesFindingUiModel()];
  }
}
