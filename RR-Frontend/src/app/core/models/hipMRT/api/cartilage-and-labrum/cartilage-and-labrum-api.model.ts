import { ReportModelBase } from '@models/report-model-base';
import { CartilageAndLabrumFindingApiModel } from '@models/hipMRT/api/cartilage-and-labrum/cartilage-and-labrum-finding-api.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class CartilageAndLabrumApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: CartilageAndLabrumFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
