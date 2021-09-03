import { FindingBase } from '@models/shared/finding/finding.base';
import {
  AnamnesisIndicationTypeEnum,
  AnastomosisOrganRegionTypeEnum,
  DetailsTypeEnum,
  LiverLocalizationTypeEnum,
  OrganRegionTypeEnum
} from '@enums/abdomenMRT/anamnesis/';

export class AnamnesisIndicationApiModel extends FindingBase {
  indicationType: AnamnesisIndicationTypeEnum;

  // Common
  detailsType: DetailsTypeEnum;
  organRegionType: OrganRegionTypeEnum;

  // Liver
  liverLocalizationType: LiverLocalizationTypeEnum;
  isRightLobeOfLiver: boolean;
  isLeftLobeOfLiver: boolean;
  isCaudateLobe: boolean;
  isQuadrateLobe: boolean;
  liverSegmentsLocalizationType: string;

  // Kidney
  isRight: boolean;
  isLeft: boolean;

  // GastrointestinalTract
  isEsophagus: boolean;
  isStomach: boolean;
  isDuodenum: boolean;
  isJejunum: boolean;
  isIleum: boolean;
  isColon: boolean;
  isSigma: boolean;
  isRectum: boolean;
  isAnus: boolean;

  // Inflammation
  isAbscess: boolean;
  isFistulaFormation: boolean;

  // AnastomosisOrganRegion
  anastomosisOrganRegionType: AnastomosisOrganRegionTypeEnum;

  // FollowUpAfterTherapy
  monthOfFollowUpAfterTherapy: number;
  yearOfFollowUpAfterTherapy: number;
  isPostoperative: boolean;
  isResection: boolean;
  isPartialResection: boolean;
  isChemotherapy: boolean;
  isRadio: boolean;
  isBiopsy: boolean;
  isStenting: boolean;

  constructor() {
    super();
    this.indicationType = AnamnesisIndicationTypeEnum.None;

    // Common
    this.detailsType = DetailsTypeEnum.None;
    this.organRegionType = OrganRegionTypeEnum.None;

    // Liver
    this.liverLocalizationType = LiverLocalizationTypeEnum.None;
    this.isRightLobeOfLiver = false;
    this.isLeftLobeOfLiver = false;
    this.isCaudateLobe = false;
    this.isQuadrateLobe = false;
    this.liverSegmentsLocalizationType = 'None';

    // Kidney
    this.isRight = false;
    this.isLeft = false;

    // GastrointestinalTract
    this.isEsophagus = false;
    this.isStomach = false;
    this.isDuodenum = false;
    this.isJejunum = false;
    this.isIleum = false;
    this.isColon = false;
    this.isSigma = false;
    this.isRectum = false;
    this.isAnus = false;

    // Inflammation
    this.isAbscess = false;
    this.isFistulaFormation = false;

    // AnastomosisOrganRegion
    this.anastomosisOrganRegionType = AnastomosisOrganRegionTypeEnum.None;

    // FollowUpAfterTherapy
    this.monthOfFollowUpAfterTherapy = null;
    this.yearOfFollowUpAfterTherapy = null;
    this.isPostoperative = false;
    this.isResection = false;
    this.isPartialResection = false;
    this.isChemotherapy = false;
    this.isRadio = false;
    this.isBiopsy = false;
    this.isStenting = false;
  }
}
