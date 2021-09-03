import { ReportModelBase } from '@models/report-model-base';
import { AortaFindingUiModel } from '@models/angiographyMRT/ui/aorta/aorta-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class AortaUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: AortaFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new AortaFindingUiModel()];
  }
}
