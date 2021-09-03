import { ReportModelBase } from '@models/report-model-base';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class BladderUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: BladderFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new BladderFindingUiModel()];
  }
}
