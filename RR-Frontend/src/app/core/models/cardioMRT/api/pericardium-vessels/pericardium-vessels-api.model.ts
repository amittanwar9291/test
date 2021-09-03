import { ReportModelBase } from '@models/report-model-base';
import { PericardiumVesselsFindingApiModel } from '@models/cardioMRT/api/pericardium-vessels/pericardium-vessels-finding-api.model';

import { AreFindingsEnum } from '@enums/cardioMRT/pericardium-vessels';

export class PericardiumVesselsApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: PericardiumVesselsFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
