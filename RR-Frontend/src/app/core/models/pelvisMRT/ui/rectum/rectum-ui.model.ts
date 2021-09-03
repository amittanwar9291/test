import { ReportModelBase } from '@models/report-model-base';
import { RectumFindingUiModel } from './rectum-finding-ui.model';

export class RectumUiModel extends ReportModelBase {
  findings: RectumFindingUiModel[];
  areFindings: string;

  constructor() {
    super();

    this.findings = [new RectumFindingUiModel()];
    this.areFindings = 'None';
  }
}
