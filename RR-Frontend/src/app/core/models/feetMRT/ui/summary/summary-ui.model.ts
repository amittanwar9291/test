import { ReportModelBase } from '@models/report-model-base';
import { TimeTypeEnum } from '@enums/feetMRT/summary/time-type.enum';
import { TClassificationTypeEnum } from '@enums/feetMRT/summary/t-classification-type.enum';
import { EvaluationTypeEnum } from '@enums/feetMRT/summary/evaluation-type.enum';

export class SummaryUiModel extends ReportModelBase {
  isSupplementaryDiagnosticsXray: boolean;
  isSupplementaryDiagnosticsCT: boolean;
  isFollowUp: boolean;
  isBiopsy: boolean;
  followUpTimeType: TimeTypeEnum;
  tClassificationType: TClassificationTypeEnum;
  evaluationType: EvaluationTypeEnum;

  constructor() {
    super();
    this.isFollowUp = false;
    this.isBiopsy = false;
    this.isSupplementaryDiagnosticsXray = false;
    this.isSupplementaryDiagnosticsCT = false;
    this.followUpTimeType = TimeTypeEnum.None;
    this.tClassificationType = TClassificationTypeEnum.None;
    this.evaluationType = EvaluationTypeEnum.None;
  }
}
