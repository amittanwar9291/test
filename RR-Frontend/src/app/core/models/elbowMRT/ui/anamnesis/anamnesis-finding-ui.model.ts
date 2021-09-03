import { FindingBase } from '@models/shared/finding/finding.base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

import { AnamnesisFindingTypeEnum } from '@enums/elbowMRT/anamnesis';

export class AnamnesisFindingUiModel extends FindingBase {
  // Common
  findingType: AnamnesisFindingTypeEnum;
  isSuspectedDiagnosis: boolean;

  // Trauma
  traumaDate: MonthYearModel;

  // LesionOfTendonsLigaments
  isEpicondylitis: boolean;
  isLesionOfBicepsTendon: boolean;
  isLesionOfTricepsTendon: boolean;

  constructor() {
    super();

    // Common
    this.findingType = AnamnesisFindingTypeEnum.None;
    this.isSuspectedDiagnosis = false;

    // Trauma
    this.traumaDate = new MonthYearModel();

    // LesionOfTendonsLigaments
    this.isEpicondylitis = false;
    this.isLesionOfBicepsTendon = false;
    this.isLesionOfTricepsTendon = false;
  }
}
