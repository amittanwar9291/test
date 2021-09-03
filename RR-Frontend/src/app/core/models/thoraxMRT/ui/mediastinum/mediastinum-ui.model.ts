import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';

export class MediastinumUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: MediastinumFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new MediastinumFindingUiModel()];
  }
}
