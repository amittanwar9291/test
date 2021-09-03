import { ReportModelBase } from '@models/report-model-base';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';

export class MediastinumUiModel extends ReportModelBase {
  areFindings: string;
  findings: MediastinumFindingUiModel[];

  constructor() {
    super();
    this.areFindings = 'None';
    this.findings = [new MediastinumFindingUiModel()];
  }
}
