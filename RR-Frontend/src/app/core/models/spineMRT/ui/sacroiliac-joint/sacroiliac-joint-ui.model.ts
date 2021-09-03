import { ReportModelBase } from '@models/report-model-base';

import { SacroiliacJointFindingUiModel } from './sacroiliac-joint-finding-ui.model';
import { SacroiliacJointAreFindingTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sacroiliac-joint-are-finding-types.enum';

export class SacroiliacJointUiModel extends ReportModelBase {
  areFindings: SacroiliacJointAreFindingTypesEnum;
  findings: SacroiliacJointFindingUiModel[];

  constructor() {
    super();
    this.areFindings = SacroiliacJointAreFindingTypesEnum.None;
    this.findings = [new SacroiliacJointFindingUiModel()];
  }
}
