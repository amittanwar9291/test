import { ReportModelBase } from '@models/report-model-base';

import { ComparisonToPriorExamsTypeEnum, ModalityTypeEnum, TimeIntervalEnum } from '@enums/angiographyMRT/summary';

export class SummaryApiModel extends ReportModelBase {
  comparisonToPriorExamsType: ComparisonToPriorExamsTypeEnum;
  isFollowUp: boolean;
  modalityType: ModalityTypeEnum;
  timeInterval: TimeIntervalEnum;

  constructor() {
    super();

    this.comparisonToPriorExamsType = ComparisonToPriorExamsTypeEnum.None;
    this.isFollowUp = false;
    this.modalityType = ModalityTypeEnum.None;
    this.timeInterval = TimeIntervalEnum.None;
  }
}
