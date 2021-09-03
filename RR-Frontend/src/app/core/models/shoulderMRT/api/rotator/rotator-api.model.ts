import { ReportModelBase } from '@models/report-model-base';

import { RotatorFindingApiModel } from './rotator-finding-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { AcromionTypeEnum } from '@enums/shoulderMRT/rotator';

export class RotatorApiModel extends ReportModelBase {
  acromionType: AcromionTypeEnum;
  isOsAcromiale: boolean;

  areFindings: AreFindingsEnum;

  findings: RotatorFindingApiModel[];

  constructor() {
    super();

    this.acromionType = AcromionTypeEnum.None;
    this.isOsAcromiale = false;

    this.areFindings = AreFindingsEnum.None;

    this.findings = [];
  }
}
