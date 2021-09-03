import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';

export class GastrointestinalTractUiModel extends ReportModelBase {
  string: string;
  areFindings: AreFindingsEnum;
  findings: GastrointestinalTractFindingUiModel[];
  constructor() {
    super();
    this.string = '';
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new GastrointestinalTractFindingUiModel()];
  }
}
