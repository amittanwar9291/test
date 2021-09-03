import { ReportModelBase } from '@models/report-model-base';
import { LiverFindingApiModel } from '@models/abdomenMRT/api/liver/liver-finding-api.model';
import { LiverAreFindingsEnum } from '@enums/abdomenMRT/liver/';

export class LiverApiModel extends ReportModelBase {
  areFindings: LiverAreFindingsEnum;
  isNoEvidenceOfStoneDisease: boolean;
  findings: LiverFindingApiModel[];

  constructor() {
    super();
    this.areFindings = LiverAreFindingsEnum.None;
    this.isNoEvidenceOfStoneDisease = false;
    this.findings = [];
  }
}
