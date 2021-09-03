import { ReportModelBase } from '@models/report-model-base';
import { MyelonFindingAPIModel } from './myelon-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class MyelonAPIModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: MyelonFindingAPIModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new MyelonFindingAPIModel()];
  }
}
