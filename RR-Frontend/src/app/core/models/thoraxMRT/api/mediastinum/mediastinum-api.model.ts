import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { MediastinumFindingApiModel } from '@models/thoraxMRT/api/mediastinum/mediastinum-finding-api.model';

export class MediastinumApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: MediastinumFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
