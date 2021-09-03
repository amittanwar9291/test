import { ReportModelBase } from '@models/report-model-base';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

import { OsteochondralInterfaceFindingApiModel } from './osteochondral-interface-finding-api.model';

export class OsteochondralInterfaceApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: OsteochondralInterfaceFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
