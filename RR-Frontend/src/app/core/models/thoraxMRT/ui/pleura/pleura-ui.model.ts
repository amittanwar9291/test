import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { PleuraFindingUiModel } from './pleura-finding-ui.model';

export class PleuraUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PleuraFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new PleuraFindingUiModel()];
  }
}
