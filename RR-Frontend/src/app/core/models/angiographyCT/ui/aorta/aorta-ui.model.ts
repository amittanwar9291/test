import { AreFindingsEnum } from '@enums/angiographyCT';
import { AortaFindingUiModel } from '@models/angiographyCT/ui/aorta/aorta-finding-ui.model';
import { ReportModelBase } from '@models/report-model-base';

export class AortaUiModel extends ReportModelBase {
  isNoMoreAorticPathologies: boolean;
  areFindings: AreFindingsEnum;
  findings: AortaFindingUiModel[];
  constructor() {
    super();
    this.isNoMoreAorticPathologies = false;
    this.areFindings = AreFindingsEnum.None;
    this.findings = [new AortaFindingUiModel()];
  }
}
