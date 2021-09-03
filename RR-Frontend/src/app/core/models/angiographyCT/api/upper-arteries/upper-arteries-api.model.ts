import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { UpperArteriesFindingApiModel } from '@models/angiographyCT/api/upper-arteries/upper-arteries-finding-api.model';
import { ReportModelBase } from '@models/report-model-base';

export class UpperArteriesApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: UpperArteriesFindingApiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new UpperArteriesFindingApiModel()];
  }
}
