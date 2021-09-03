import { ReportModelBase } from '@models/report-model-base';
import { BonesFindingUiModel } from './bones-finding-ui.model';

export class BonesUiModel extends ReportModelBase {
  findings: BonesFindingUiModel[];
  areFindings: string;

  constructor() {
    super();
    this.findings = [new BonesFindingUiModel()];
    this.areFindings = 'None';
  }
}
