import { FindingBase } from '@models/shared/finding/finding.base';
import { AnamnesisIndicationFindingTypeEnum } from '@enums/feetMRT/anamnesis/anamnesis-indication-finding-type.enum';
import { LesionTypeEnum } from '@enums/feetMRT/anamnesis/lesion-type.enum';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

export class AnamnesisIndicationFindingUiModel extends FindingBase {
  // Common
  findingType: AnamnesisIndicationFindingTypeEnum;
  isSuspected: boolean;

  periodTrauma: MonthYearModel;
  lesionType: LesionTypeEnum;

  constructor() {
    super();

    // Common
    this.findingType = AnamnesisIndicationFindingTypeEnum.None;
    this.isSuspected = false;

    this.periodTrauma = new MonthYearModel();
    this.lesionType = LesionTypeEnum.None;
  }
}
