import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SupraaorticVesselsFindingUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';

export class SupraaorticVesselsUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: SupraaorticVesselsFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new SupraaorticVesselsFindingUiModel()];
  }
}
