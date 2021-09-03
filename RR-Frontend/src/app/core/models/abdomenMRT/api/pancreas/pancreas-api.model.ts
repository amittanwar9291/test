import { ReportModelBase } from '@models/report-model-base';
import { PancreasFindingApiModel } from '@models/abdomenMRT/api/pancreas/pancreas-finding-api.model';
import { AreFindingsExtendedEnum } from '@enums/abdomenMRT/pancreas/';

export class PancreasApiModel extends ReportModelBase {
  areFindings: AreFindingsExtendedEnum;
  findings: PancreasFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsExtendedEnum.None;
    this.findings = [];
  }
}
