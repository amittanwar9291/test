import { ReconstructionApiBaseModel } from '@models/shared/newTechnology/api/reconstruction-api-base.model';

export class ReconstructionFindingApiModel extends ReconstructionApiBaseModel {
  sliceThicknessST1Mm: number;
  sliceThicknessST2Mm: number;
  sliceThicknessST3Mm: number;
  sliceThicknessST4Mm: number;
  isSoftTissues: boolean;
  isBone: boolean;
  isMPR: boolean;
  isVRT: boolean;
  doseLengthProductMGycm: number;

  constructor() {
    super();

    this.sliceThicknessST1Mm = null;
    this.sliceThicknessST2Mm = null;
    this.sliceThicknessST3Mm = null;
    this.sliceThicknessST4Mm = null;
    this.isSoftTissues = false;
    this.isBone = false;
    this.isMPR = false;
    this.isVRT = false;
    this.doseLengthProductMGycm = null;
  }
}
