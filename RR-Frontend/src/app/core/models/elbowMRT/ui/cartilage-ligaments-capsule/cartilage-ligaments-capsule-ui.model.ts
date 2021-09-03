import { ReportModelBase } from '@models/report-model-base';
import { CartilageLigamentsCapsuleFindingUiModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class CartilageLigamentsCapsuleUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: CartilageLigamentsCapsuleFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new CartilageLigamentsCapsuleFindingUiModel()];
  }
}
