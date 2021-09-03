import { ReportModelBase } from '@models/report-model-base';
import { SupraaorticVesselsFindingUi } from '@models/angiographyMRT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';

export class SupraaorticVesselsUiModel extends ReportModelBase {
  areFindings: string;
  findings: SupraaorticVesselsFindingUi[];
  constructor() {
    super();
    this.areFindings = 'None';
    this.findings = [new SupraaorticVesselsFindingUi()];
  }
}
