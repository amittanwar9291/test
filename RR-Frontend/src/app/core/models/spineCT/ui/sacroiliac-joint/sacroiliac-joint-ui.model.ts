import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';

import { SacroiliacJointFindingUiModel } from './sacroiliac-joint-finding-ui.model';

export class SacroiliacJointUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SacroiliacJointFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SacroiliacJointFindingUiModel()];
  }
}
