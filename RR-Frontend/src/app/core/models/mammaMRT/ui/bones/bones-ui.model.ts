import { ReportModelBase } from '@models/report-model-base';

import { BonesFindingUiModel } from './bones-finding-ui.model';

export class BonesUiModel extends ReportModelBase {
  bonesType: string;
  findings: BonesFindingUiModel[];

  constructor() {
    super();

    this.bonesType = 'None';
    this.findings = [new BonesFindingUiModel()];
  }
}
