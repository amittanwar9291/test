import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/angiographyCT';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';

export class AbdomenUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: AbdomenFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new AbdomenFindingUiModel()];
  }
}
