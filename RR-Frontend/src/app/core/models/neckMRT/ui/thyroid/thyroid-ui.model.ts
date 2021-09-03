import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ReportModelBase } from '@models/report-model-base';
import { ThyroidFindingUiModel } from './thyroid-finding-ui.model';

export class ThyroidUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;
  findings: ThyroidFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new ThyroidFindingUiModel()];
  }
}
