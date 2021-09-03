import { BonesFindingApiModel } from './bones-finding-api.model';

import { ReportModelBase } from '@models/report-model-base';

export class BonesApiModel extends ReportModelBase {
  bonesType: string;
  findings: BonesFindingApiModel[];

  constructor() {
    super();

    this.bonesType = 'None';
    this.findings = [];
  }
}
