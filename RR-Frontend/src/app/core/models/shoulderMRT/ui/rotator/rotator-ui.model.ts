import { ReportModelBase } from '@models/report-model-base';

import { RotatorFindingUiModel } from './rotator-finding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { AcromionTypeEnum } from '@enums/shoulderMRT/rotator';

export class RotatorUiModel extends ReportModelBase {
  acromionType: AcromionTypeEnum;
  isOsAcromiale: boolean;

  areFindings: AreFindingsEnum;

  findings: RotatorFindingUiModel[];

  constructor() {
    super();

    this.acromionType = AcromionTypeEnum.None;
    this.isOsAcromiale = false;

    this.areFindings = AreFindingsEnum.None;

    this.findings = [new RotatorFindingUiModel()];
  }
}
