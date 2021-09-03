import { ReportModelBase } from '@models/report-model-base';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { LiverAreFindingsEnum } from '@enums/abdomenMRT/liver';

export class LiverUiModel extends ReportModelBase {
  areFindings: LiverAreFindingsEnum;
  isNoEvidenceOfStoneDisease: boolean;
  findings: LiverFindingUiModel[];

  constructor() {
    super();
    this.areFindings = LiverAreFindingsEnum.None;
    this.isNoEvidenceOfStoneDisease = false;
    this.findings = [new LiverFindingUiModel()];
  }
}
