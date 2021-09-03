import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { ReportModelBase } from '@models/report-model-base';

export class BonesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: BonesFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new BonesFindingUiModel()];
  }
}
