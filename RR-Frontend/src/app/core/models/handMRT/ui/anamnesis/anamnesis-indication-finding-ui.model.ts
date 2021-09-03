import { FindingBase } from '@models/shared/finding/finding.base';
import { AnamnesisIndicationFindingTypeEnum } from '@enums/feetMRT/anamnesis/anamnesis-indication-finding-type.enum';
import { LesionTypeEnum } from '@enums/feetMRT/anamnesis/lesion-type.enum';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { DetailsTypeEnum } from '@enums/handMRT/anamnesis/details-type.enum';

export class AnamnesisIndicationFindingUiModel extends FindingBase {
  // Common
  findingType: AnamnesisIndicationFindingTypeEnum;
  isSuspicionOf: boolean;

  periodTrauma: MonthYearModel;
  lesionType: LesionTypeEnum;
  detailsType: DetailsTypeEnum;

  isOccult: boolean;
  isRadius: boolean;
  isUlna: boolean;
  isCarpalia: boolean;
  isMetacarpaliaPhalanges: boolean;

  isTfccRuptureDegeneration: boolean;
  isSlDissociation: boolean;
  isLtDissociation: boolean;
  isRingbandRupture: boolean;
  isTendonRuptureOfThePhalanges: boolean;

  constructor() {
    super();

    // Common
    this.findingType = AnamnesisIndicationFindingTypeEnum.None;
    this.isSuspicionOf = false;

    this.periodTrauma = new MonthYearModel();
    this.lesionType = LesionTypeEnum.None;
    this.detailsType = DetailsTypeEnum.None;

    this.isOccult = false;
    this.isRadius = false;
    this.isUlna = false;
    this.isCarpalia = false;
    this.isMetacarpaliaPhalanges = false;

    this.isTfccRuptureDegeneration = false;
    this.isSlDissociation = false;
    this.isLtDissociation = false;
    this.isRingbandRupture = false;
    this.isTendonRuptureOfThePhalanges = false;
  }
}
