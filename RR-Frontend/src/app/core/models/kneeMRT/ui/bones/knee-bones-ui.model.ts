import { ReportModelBase } from '@models/report-model-base';
import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';

export class KneeBonesUiModel extends ReportModelBase {
  areFindings: string;
  findings: KneeBonesFindingUiModel[];

  constructor() {
    super();

    this.areFindings = 'None';
    this.findings = [new KneeBonesFindingUiModel()];
  }
}
