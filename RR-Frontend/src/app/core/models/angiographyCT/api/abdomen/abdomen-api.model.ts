import { ReportModelBase } from '@models/report-model-base';
import { AbdomenFindingApiModel } from '@models/angiographyCT/api/abdomen/abdomen-finding-api.model';
import { AreFindingsEnum } from '@enums/angiographyCT';

export class AbdomenApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: AbdomenFindingApiModel[];
  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new AbdomenFindingApiModel()];
  }
}
