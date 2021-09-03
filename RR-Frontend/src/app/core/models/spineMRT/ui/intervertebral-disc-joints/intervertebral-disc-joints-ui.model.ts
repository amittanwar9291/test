import { ReportModelBase } from '@models/report-model-base';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class IntervertebralDiscJointsUiModel extends ReportModelBase {
  findings: IntervertebralDiscJointsFindingUiModel[];
  areFindings: AreFindingsEnum;

  constructor() {
    super();

    this.findings = [new IntervertebralDiscJointsFindingUiModel()];
    this.areFindings = AreFindingsEnum.None;
  }
}
