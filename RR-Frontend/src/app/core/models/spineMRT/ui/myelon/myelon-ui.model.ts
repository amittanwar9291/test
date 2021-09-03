import { ReportModelBase } from '@models/report-model-base';
import { MyelonFindingUIModel } from './myelon-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class MyelonUIModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: MyelonFindingUIModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new MyelonFindingUIModel()];
  }
}
