import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { NerveCompressionFindingApiModel } from '@models/handMRT/api/nerve-compression/nerve-compression-finding-api.model';

export class NerveCompressionApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: NerveCompressionFindingApiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new NerveCompressionFindingApiModel()];
  }
}
