import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { PleuraFindingApiModel } from './pleura-finding-api.model';

export class PleuraApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PleuraFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new PleuraFindingApiModel()];
  }
}
