import { ReportModelBase } from '@models/report-model-base';
import { TendonsAndMusclesFindingUiModel } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-finding-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class TendonsAndMusclesUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: TendonsAndMusclesFindingUiModel[];

  constructor() {
    super();

    this.areFindings = AreFindingsEnum.None;
    this.findings = [new TendonsAndMusclesFindingUiModel()];
  }
}
