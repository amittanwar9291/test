import { FindingBase } from '@models/shared/finding/finding.base';

export class BonesFindingApiModel extends FindingBase {
  findingType: string;

  // Common
  boneLocalization: string;
  maxDiameterInMm: number;
  lesionType: string;

  isTVB1: boolean;
  isTVB2: boolean;
  isTVB3: boolean;
  isTVB4: boolean;
  isTVB5: boolean;
  isTVB6: boolean;
  isTVB7: boolean;
  isTVB8: boolean;
  isTVB9: boolean;
  isTVB10: boolean;
  isTVB11: boolean;
  isTVB12: boolean;

  constructor() {
    super();

    this.findingType = 'None';

    // Common
    this.boneLocalization = 'None';
    this.maxDiameterInMm = null;
    this.lesionType = 'None';

    this.isTVB1 = false;
    this.isTVB2 = false;
    this.isTVB3 = false;
    this.isTVB4 = false;
    this.isTVB5 = false;
    this.isTVB6 = false;
    this.isTVB7 = false;
    this.isTVB8 = false;
    this.isTVB9 = false;
    this.isTVB10 = false;
    this.isTVB11 = false;
    this.isTVB12 = false;
  }
}
