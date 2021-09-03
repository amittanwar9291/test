import { ReportModelBase } from '@models/report-model-base';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

import { OsteochondralInterfaceFindingUiModel } from './osteochondral-interface-finding-ui.model';

export class OsteochondralInterfaceUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: OsteochondralInterfaceFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new OsteochondralInterfaceFindingUiModel()];
  }
}
