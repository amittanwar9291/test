import { FindingBase } from '@models/shared/finding/finding.base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisPreviousSurgeriesFindingTypeEnum } from '@enums/handMRT/anamnesis/anamnesis-previous-surgeries-finding-type.enum';

export class AnamnesisPreviousSurgeriesFindingUiModel extends FindingBase {
  // Common
  findingType: AnamnesisPreviousSurgeriesFindingTypeEnum;

  periodSurgery: MonthYearModel;
  isAbductorPollicisLongusTendonPlastic: boolean;
  isCartilageTransplantation: boolean;
  isTrapezectomy: boolean;

  constructor() {
    super();

    // Common
    this.findingType = AnamnesisPreviousSurgeriesFindingTypeEnum.None;

    this.periodSurgery = new MonthYearModel();
    this.isAbductorPollicisLongusTendonPlastic = false;
    this.isCartilageTransplantation = false;
    this.isTrapezectomy = false;
  }
}
