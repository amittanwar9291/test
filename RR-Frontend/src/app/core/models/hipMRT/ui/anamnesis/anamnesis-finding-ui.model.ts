import { FindingBase } from '@models/shared/finding/finding.base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisFindingType } from '@enums/hipMRT/anamnesis/anamnesis-finding-type.enum';

export class AnamnesisFindingUiModel extends FindingBase {
  findingType: AnamnesisFindingType;
  isSuspicion: boolean;
  isSiteRight: boolean;
  isSiteLeft: boolean;
  isFemur: boolean;
  isFemurRight: boolean;
  isFemurLeft: boolean;
  isPelvis: boolean;
  isPelvisRight: boolean;
  isPelvisLeft: boolean;
  isRight: boolean;
  isLeft: boolean;
  dateOfTrauma: MonthYearModel;
  isSacrum: boolean;

  constructor() {
    super();
    this.findingType = AnamnesisFindingType.None;
    this.isSuspicion = false;
    this.isSiteRight = false;
    this.isSiteLeft = false;
    this.isFemur = false;
    this.isFemurRight = false;
    this.isFemurLeft = false;
    this.isPelvis = false;
    this.isPelvisRight = false;
    this.isPelvisLeft = false;
    this.isRight = false;
    this.isLeft = false;
    this.dateOfTrauma = new MonthYearModel();
    this.isSacrum = false;
  }
}
