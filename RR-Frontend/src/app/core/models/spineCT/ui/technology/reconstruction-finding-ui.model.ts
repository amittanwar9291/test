import { ReconstructionUiBaseModel } from '@models/shared/newTechnology/ui/reconstruction-ui-base.model';

export class ReconstructionFindingUiModel extends ReconstructionUiBaseModel {
  sliceThicknessST1Mm: number;
  sliceThicknessST2Mm: number;
  sliceThicknessST3Mm: number;
  sliceThicknessST4Mm: number;
  isSoftTissues: boolean;
  isLungs: boolean;
  isCTAngiography: boolean;
  isBone: boolean;
  isMIP: boolean;
  isMPR: boolean;
  isVRT: boolean;
  isMinIP: boolean;
  doseLengthProductMGycm: number;

  constructor() {
    super();

    this.sliceThicknessST1Mm = null;
    this.sliceThicknessST2Mm = null;
    this.sliceThicknessST3Mm = null;
    this.sliceThicknessST4Mm = null;
    this.isSoftTissues = false;
    this.isLungs = false;
    this.isCTAngiography = false;
    this.isBone = false;
    this.isMIP = false;
    this.isMPR = false;
    this.isVRT = false;
    this.isMinIP = false;
    this.doseLengthProductMGycm = null;
  }
}
