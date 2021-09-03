import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { VesselsFindingApiModel } from '@models/headCT/api/vessels/vessels-finding-api.model';

export class VesselsApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: VesselsFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new VesselsFindingApiModel()];
  }
}
