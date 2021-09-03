import { ReportModelBase } from '@models/report-model-base';

import { SacroiliacJointFindingApiModel } from './sacroiliac-joint-finding-api.model';
import { SacroiliacJointAreFindingTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sacroiliac-joint-are-finding-types.enum';

export class SacroiliacJointApiModel extends ReportModelBase {
  areFindings: SacroiliacJointAreFindingTypesEnum;
  findings: SacroiliacJointFindingApiModel[];

  constructor() {
    super();
    this.areFindings = SacroiliacJointAreFindingTypesEnum.None;
    this.findings = [new SacroiliacJointFindingApiModel()];
  }
}
