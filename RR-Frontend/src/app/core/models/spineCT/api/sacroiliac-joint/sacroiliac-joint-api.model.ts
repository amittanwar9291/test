import { ReportModelBase } from '@models/report-model-base';
import { SacroiliacJointFindingApiModel } from './sacroiliac-joint-finding-api.model';

export class SacroiliacJointApiModel extends ReportModelBase {
  areFindings: string;
  findings: SacroiliacJointFindingApiModel[];

  constructor() {
    super();

    this.areFindings = 'None';
    this.findings = [new SacroiliacJointFindingApiModel()];
  }
}
