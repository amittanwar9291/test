import { ReportModelBase } from '@models/report-model-base';
import { AbdomenFindingApiModel } from '@models/angiographyMRT/api/abdomen/abdomen-finding-api.model';

export class AbdomenApiModel extends ReportModelBase {
  areFindings: string;
  findings: AbdomenFindingApiModel[];
  constructor() {
    super();
    this.areFindings = 'None';
    this.findings = [new AbdomenFindingApiModel()];
  }
}
