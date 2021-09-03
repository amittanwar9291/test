import { ReportModelBase } from '@models/report-model-base';

import { ComparisonToPriorExamsTypeEnum, ModalityTypeEnum, TimeIntervalEnum } from '@enums/angiographyCT/summary';

export class SummaryUiModel extends ReportModelBase {
  comparisonToPriorExamsType: ComparisonToPriorExamsTypeEnum;
  isFurtherExamination: boolean;
  modalityTypeFurtherExaminationType: ModalityTypeEnum;
  isFollowUp: boolean;
  modalityTypeFollowUpType: ModalityTypeEnum;
  timeIntervalType: TimeIntervalEnum;

  constructor() {
    super();

    this.comparisonToPriorExamsType = ComparisonToPriorExamsTypeEnum.None;
    this.isFurtherExamination = false;
    this.modalityTypeFurtherExaminationType = ModalityTypeEnum.None;
    this.isFollowUp = false;
    this.modalityTypeFollowUpType = ModalityTypeEnum.None;
    this.timeIntervalType = TimeIntervalEnum.None;
  }
}
