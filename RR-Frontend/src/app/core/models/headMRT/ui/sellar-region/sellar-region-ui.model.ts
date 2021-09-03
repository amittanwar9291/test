import { ReportModelBase } from '@models/report-model-base';
import { SellarRegionFindingUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-finding-ui.model';
import { SellarRegionAreFindingsEnum } from '@enums/headMRT/sellar-region/sellar-region-are-findings.enum';

export class SellarRegionUiModel extends ReportModelBase {
  areFindings: SellarRegionAreFindingsEnum;
  findings: SellarRegionFindingUiModel[];

  constructor() {
    super();
    this.areFindings = SellarRegionAreFindingsEnum.None;
    this.findings = [new SellarRegionFindingUiModel()];
  }
}
