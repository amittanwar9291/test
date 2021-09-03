import { FindingBase } from '@models/shared/finding/finding.base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { PreviousTherapyTypeEnum, NeckDissectionTypeEnum, SideTypeEnum, ThryoidectomyTypeEnum } from '@enums/neckMRT/indication';

export class PreviousTherapyUiModel extends FindingBase {
  previousTherapyType: PreviousTherapyTypeEnum;
  dateOfPreviousTherapy: MonthYearModel;
  thryoidectomyType: ThryoidectomyTypeEnum;
  sideType: SideTypeEnum;
  isNeckDissectionRight: boolean;
  neckDissectionTypeRight: NeckDissectionTypeEnum;
  isNeckDissectionLeft: boolean;
  neckDissectionTypeLeft: NeckDissectionTypeEnum;

  constructor() {
    super();
    this.previousTherapyType = PreviousTherapyTypeEnum.None;
    this.dateOfPreviousTherapy = new MonthYearModel();
    this.thryoidectomyType = ThryoidectomyTypeEnum.None;
    this.sideType = SideTypeEnum.None;
    this.isNeckDissectionRight = false;
    this.neckDissectionTypeRight = NeckDissectionTypeEnum.None;
    this.isNeckDissectionLeft = false;
    this.neckDissectionTypeLeft = NeckDissectionTypeEnum.None;
  }
}
