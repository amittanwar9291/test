import { FindingBase } from '@models/shared/finding/finding.base';

import { AnamnesisFindingTypeEnum } from '@enums/elbowMRT/anamnesis';

export class AnamnesisFindingApiModel extends FindingBase {
  // Common
  findingType: AnamnesisFindingTypeEnum;
  isSuspectedDiagnosis: boolean;

  // Trauma
  traumaMonth: number;
  traumaYear: number;

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
    this.traumaMonth = 0;
    this.traumaYear = 0;

    // LesionOfTendonsLigaments
    this.isEpicondylitis = false;
    this.isLesionOfBicepsTendon = false;
    this.isLesionOfTricepsTendon = false;
  }
}
