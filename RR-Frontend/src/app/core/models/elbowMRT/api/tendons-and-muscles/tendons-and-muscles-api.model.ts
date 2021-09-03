import { ReportModelBase } from '@models/report-model-base';
import { TendonsAndMusclesFindingApiModel } from '@models/elbowMRT/api/tendons-and-muscles/tendons-and-muscles-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class TendonsAndMusclesApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: TendonsAndMusclesFindingApiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [];
  }
}
