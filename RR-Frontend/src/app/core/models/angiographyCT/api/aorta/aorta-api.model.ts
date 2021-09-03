import { AreFindingsEnum } from '@enums/angiographyCT';
import { ReportModelBase } from '@models/report-model-base';
import { AortaFindingApiModel } from './aorta-finding-api.model';
export class AortaApiModel extends ReportModelBase {
  isNoMoreAorticPathologies: boolean;
  areFindings: AreFindingsEnum;
  findings: AortaFindingApiModel[];
  constructor() {
    super();
    this.isNoMoreAorticPathologies = false;
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new AortaFindingApiModel()];
  }
}
