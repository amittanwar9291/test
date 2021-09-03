import { ReportModelBase } from '@models/report-model-base';
import { SellarRegionFindingUiModel } from '@models/headCT/ui/sellar-region/sellar-region-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class SellarRegionUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SellarRegionFindingUiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SellarRegionFindingUiModel()];
  }
}
