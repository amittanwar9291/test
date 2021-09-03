import { FindingBase } from '@models/shared/finding/finding.base';
import { AnamnesisPreviousSurgeriesFindingTypeEnum } from '@enums/handMRT/anamnesis/anamnesis-previous-surgeries-finding-type.enum';

export class AnamnesisPreviousSurgeriesFindingApiModel extends FindingBase {
  // Common
  previousSurgeriesType: AnamnesisPreviousSurgeriesFindingTypeEnum;

  monthOfSurgery: number;
  yearOfSurgery: number;
  isAbductorPollicisLongusTendonPlastic: boolean;
  isCartilageTransplantation: boolean;
  isTrapezectomy: boolean;

  constructor() {
    super();

    // Common
    this.previousSurgeriesType = AnamnesisPreviousSurgeriesFindingTypeEnum.None;

    this.monthOfSurgery = null;
    this.yearOfSurgery = null;
    this.isAbductorPollicisLongusTendonPlastic = false;
    this.isCartilageTransplantation = false;
    this.isTrapezectomy = false;
  }
}
