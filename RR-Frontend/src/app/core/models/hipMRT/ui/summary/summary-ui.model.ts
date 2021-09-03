import { ReportModelBase } from '@models/report-model-base';
import { DateMonthTypeEnum, FindingsDynamicsTypeEnum, TClassificationTypeEnum } from '@enums/hipMRT/summary/';

export class SummaryUiModel extends ReportModelBase {
  findingsDynamicsType: FindingsDynamicsTypeEnum;
  isXRay: boolean;
  isCT: boolean;
  isAngiography: boolean;
  isMRIPelvis: boolean;
  isMRIAngiography: boolean;
  isMRIKnee: boolean;
  isFollowUp: boolean;
  dateMonthType: DateMonthTypeEnum;
  isBiopsy: boolean;
  tClassificationType: TClassificationTypeEnum;

  constructor() {
    super();
    this.findingsDynamicsType = FindingsDynamicsTypeEnum.None;
    this.isXRay = false;
    this.isCT = false;
    this.isAngiography = false;
    this.isMRIPelvis = false;
    this.isMRIAngiography = false;
    this.isMRIKnee = false;
    this.isFollowUp = false;
    this.dateMonthType = DateMonthTypeEnum.None;
    this.isBiopsy = false;
    this.tClassificationType = TClassificationTypeEnum.None;
  }
}
