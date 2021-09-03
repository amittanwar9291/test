import { ReportModelBase } from '@models/report-model-base';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { AreFindingsExtendedEnum } from '@enums/abdomenMRT/pancreas/';

export class PancreasUiModel extends ReportModelBase {
  areFindings: AreFindingsExtendedEnum;
  findings: PancreasFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsExtendedEnum.None;
    this.findings = [new PancreasFindingUiModel()];
  }
}
