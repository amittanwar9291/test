import { ReportModelBase } from '@models/report-model-base';
import { AortaFindingApiModel } from '@models/angiographyMRT/api/aorta/aorta-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class AortaApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: AortaFindingApiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new AortaFindingApiModel()];
  }
}
