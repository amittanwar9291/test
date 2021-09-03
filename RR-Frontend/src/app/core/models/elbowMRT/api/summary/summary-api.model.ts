import { ReportModelBase } from '@models/report-model-base';
import { ComparisonToPriorExamsTypeEnum } from '@enums/elbowMRT/summary/comparison-to-prior-exams-type.enum';
import { TimeTypeEnum } from '@enums/elbowMRT/summary/time-type.enum';
import { TCategoryTypeEnum } from '@enums/elbowMRT/summary/t-category-type.enum';

export class SummaryApiModel extends ReportModelBase {
  comparisonToPriorExamsType: ComparisonToPriorExamsTypeEnum;
  isXRay: boolean;
  isCT: boolean;
  isFollowUp: boolean;
  timeType: TimeTypeEnum;
  isBiopsy: boolean;
  tCategoryType: TCategoryTypeEnum;

  constructor() {
    super();

    this.comparisonToPriorExamsType = ComparisonToPriorExamsTypeEnum.None;
    this.isXRay = false;
    this.isCT = false;
    this.isFollowUp = false;
    this.isFollowUp = false;
    this.timeType = TimeTypeEnum.None;
    this.isBiopsy = false;
    this.tCategoryType = TCategoryTypeEnum.None;
  }
}
