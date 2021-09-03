import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { VesselsFindingApiModel } from '@models/neckMRT/api/vessels/vessels-finding-api.model';
import { ReportModelBase } from '@models/report-model-base';

export class VesselsApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: VesselsFindingApiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
