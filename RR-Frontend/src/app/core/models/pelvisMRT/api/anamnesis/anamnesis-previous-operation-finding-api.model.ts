import { FindingBase } from '@models/shared/finding/finding.base';

export class AnamnesisPreviousOperationFindingApiModel extends FindingBase {
  findingType: string;
  month: number;
  year: number;
  isRight: boolean;
  isLeft: boolean;
  isLeftPartial: boolean;
  isRightPartial: boolean;
  sugicalProceduresType: string;
  isRadical: boolean;
  isDeep: boolean;
  isAnusPraeter: boolean;
  isHartmannsRectalStump: boolean;
  isPouchReconstruction: boolean;

  constructor() {
    super();

    this.findingType = 'None';
    this.month = 0;
    this.year = 0;
    this.isRight = false;
    this.isLeft = false;
    this.isLeftPartial = false;
    this.isRightPartial = false;
    this.sugicalProceduresType = 'None';
    this.isRadical = false;
    this.isDeep = false;
    this.isAnusPraeter = false;
    this.isHartmannsRectalStump = false;
    this.isPouchReconstruction = false;
  }
}
