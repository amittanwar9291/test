import { FindingBase } from '@models/shared/finding/finding.base';
import { PreviousTherapyTypeEnum, NeckDissectionTypeEnum, SideTypeEnum, ThryoidectomyTypeEnum } from '@enums/neckMRT/indication';

export class PreviousTherapyApiModel extends FindingBase {
  previousTherapyType: PreviousTherapyTypeEnum;
  monthOfPreviousTherapy: number;
  yearOfPreviousTherapy: number;
  thryoidectomyType: ThryoidectomyTypeEnum;
  sideType: SideTypeEnum;
  isNeckDissectionRight: boolean;
  neckDissectionTypeRight: NeckDissectionTypeEnum;
  isNeckDissectionLeft: boolean;
  neckDissectionTypeLeft: NeckDissectionTypeEnum;

  constructor() {
    super();
    this.previousTherapyType = PreviousTherapyTypeEnum.None;
    this.monthOfPreviousTherapy = null;
    this.yearOfPreviousTherapy = null;
    this.thryoidectomyType = ThryoidectomyTypeEnum.None;
    this.sideType = SideTypeEnum.None;
    this.isNeckDissectionRight = false;
    this.neckDissectionTypeRight = NeckDissectionTypeEnum.None;
    this.isNeckDissectionLeft = false;
    this.neckDissectionTypeLeft = NeckDissectionTypeEnum.None;
  }
}
