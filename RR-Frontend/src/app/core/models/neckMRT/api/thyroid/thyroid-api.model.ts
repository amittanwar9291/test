import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { ThyroidFindingApiModel } from './thyroid-finding-api.model';

export class ThyroidApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: ThyroidFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
