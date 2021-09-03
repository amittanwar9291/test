import { ReportModelBase } from '@models/report-model-base';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

import { BonesFindingUiModel } from './bones-finding-ui.model';

export class BonesUiModel extends ReportModelBase {
  findings: BonesFindingUiModel[];
  areFindings: AreFindingsEnum;
  isCMEnhancementQuantitativeEnabled: boolean;

  constructor() {
    super();

    this.findings = [new BonesFindingUiModel()];
    this.areFindings = AreFindingsEnum.None;
    this.isCMEnhancementQuantitativeEnabled = false;
  }
}
