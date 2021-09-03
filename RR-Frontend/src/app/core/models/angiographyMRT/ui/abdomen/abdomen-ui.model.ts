import { ReportModelBase } from '@models/report-model-base';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';

export class AbdomenUiModel extends ReportModelBase {
  areFindings: string;
  findings: AbdomenFindingUiModel[];
  constructor() {
    super();
    this.areFindings = 'None';
    this.findings = [new AbdomenFindingUiModel()];
  }
}
