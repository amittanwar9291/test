import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { BonesFindingUiModel } from './bones-finding-ui.model';

export class BonesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: BonesFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new BonesFindingUiModel()];
  }
}
