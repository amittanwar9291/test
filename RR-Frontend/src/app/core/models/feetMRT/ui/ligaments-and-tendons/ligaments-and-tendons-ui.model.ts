import { ReportModelBase } from '@models/report-model-base';
import { LigamentsAndTendonsFindingUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class LigamentsAndTendonsUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LigamentsAndTendonsFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new LigamentsAndTendonsFindingUiModel()];
  }
}
