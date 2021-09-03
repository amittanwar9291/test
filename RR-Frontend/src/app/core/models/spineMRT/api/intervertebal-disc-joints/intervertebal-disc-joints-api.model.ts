import { ReportModelBase } from '@models/report-model-base';
import { IntervertebralDiscJointsFindingApiModel } from '@models/spineMRT/api/intervertebal-disc-joints/intervertebal-disc-joints-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class IntervertebalDiscJointsApiModel extends ReportModelBase {
  findings: IntervertebralDiscJointsFindingApiModel[];
  areFindings: AreFindingsEnum;

  constructor() {
    super();

    this.findings = [new IntervertebralDiscJointsFindingApiModel()];
    this.areFindings = AreFindingsEnum.None;
  }
}
