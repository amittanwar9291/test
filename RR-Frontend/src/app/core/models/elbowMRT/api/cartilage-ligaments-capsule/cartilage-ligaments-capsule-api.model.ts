import { ReportModelBase } from '@models/report-model-base';
import { CartilageLigamentsCapsuleFindingApiModel } from '@models/elbowMRT/api/cartilage-ligaments-capsule/cartilage-ligaments-capsule-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class CartilageLigamentsCapsuleApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: CartilageLigamentsCapsuleFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
