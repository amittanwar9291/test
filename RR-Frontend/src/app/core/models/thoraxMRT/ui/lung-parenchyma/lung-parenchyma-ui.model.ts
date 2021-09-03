import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { LungParenchymaFindingUiModel } from './lung-parenchyma-finding-ui.model';

export class LungParenchymaUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: LungParenchymaFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new LungParenchymaFindingUiModel()];
  }
}
