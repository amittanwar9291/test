import { ReportModelBase } from '@models/report-model-base';
import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { AreFindingsEnum } from '@enums/cardioMRT/pericardium-vessels';

export class PericardiumVesselsUiModel extends ReportModelBase {
  findings: PericardiumVesselsFindingUiModel[];
  areFindings: AreFindingsEnum;

  constructor() {
    super();

    this.findings = [new PericardiumVesselsFindingUiModel()];
    this.areFindings = AreFindingsEnum.None;
  }
}
