import { ReportModelBase } from '@models/report-model-base';
import { CartilageAndLabrumFindingUiModel } from '@models/hipMRT/ui/cartilage-and-labrum/cartilage-and-labrum-finding-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class CartilageAndLabrumUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: CartilageAndLabrumFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new CartilageAndLabrumFindingUiModel()];
  }
}
