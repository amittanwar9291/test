import { FindingBase } from '@models/shared/finding/finding.base';
import { AnamnesisIndicationFindingTypeEnum } from '@enums/feetMRT/anamnesis/anamnesis-indication-finding-type.enum';
import { LesionTypeEnum } from '@enums/feetMRT/anamnesis/lesion-type.enum';

export class AnamnesisIndicationFindingApiModel extends FindingBase {
  // Common
  indicationType: AnamnesisIndicationFindingTypeEnum;
  isSuspected: boolean;

  periodTraumaMonth: number;
  periodTraumaYear: number;
  lesionType: LesionTypeEnum;

  constructor() {
    super();

    // Common
    this.indicationType = AnamnesisIndicationFindingTypeEnum.None;
    this.isSuspected = false;

    this.periodTraumaMonth = null;
    this.periodTraumaYear = null;
    this.lesionType = LesionTypeEnum.None;
  }
}
