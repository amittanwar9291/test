import { ReportModelBase } from '@models/report-model-base';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { GastrointestinalTractFindingApiModel } from '@models/abdomenMRT/api/gastrointestinal-tract/gastrointestinal-tract-finding-api.model';

export class GastrointestinalTractApiModel extends ReportModelBase {
  string: string;
  areFindings: AreFindingsEnum;
  findings: GastrointestinalTractFindingApiModel[];
  constructor() {
    super();
    this.string = '';
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new GastrointestinalTractFindingApiModel()];
  }
}
