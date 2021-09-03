import { FindingBase } from '@models/shared/finding/finding.base';
import { AnamnesisFindingType } from '@enums/hipMRT/anamnesis/anamnesis-finding-type.enum';

export class AnamnesisFindingApiModel extends FindingBase {
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
  yearOfTrauma: number;
  monthOfTrauma: number;
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
    this.yearOfTrauma = null;
    this.monthOfTrauma = null;
    this.isSacrum = false;
  }
}
