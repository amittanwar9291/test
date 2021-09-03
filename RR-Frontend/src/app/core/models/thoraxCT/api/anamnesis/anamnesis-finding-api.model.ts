import { AnamnesisFindingTypeEnum } from '@enums/thoraxCT/anamnesis/anamnesis-finding-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class AnamnesisFindingApiModel extends FindingBase {
  findingType: AnamnesisFindingTypeEnum;
  packYears: number;
  isAfterPartialLungResectionRight: boolean;
  isAfterPartialLungResectionLeft: boolean;
  isAorticValveTAVI: boolean;
  isCoronary: boolean;
  isThoracicAortaTEVAR: boolean;

  constructor() {
    super();
    this.findingType = AnamnesisFindingTypeEnum.None;
    this.packYears = null;
    this.isAfterPartialLungResectionRight = false;
    this.isAfterPartialLungResectionLeft = false;
    this.isAorticValveTAVI = false;
    this.isCoronary = false;
    this.isThoracicAortaTEVAR = false;
  }
}
