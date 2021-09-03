import {
  BronchiectasisTypeEnum,
  DistributionSecondaryPulmonaryLobuleTypeEnum,
  LungInterstitiumFindingTypeEnum,
  LungInterstitiumLocalizationTypeEnum,
  RandomDistributionTypeEnum,
  StructureTypeEnum
} from '@enums/thoraxCT/lung-interstitium';
import { FindingBase } from '@models/shared/finding/finding.base';
import { MarginTypeEnum } from '@enums/thoraxCT/common/margin-type.enum';

export class LungInterstitiumFindingBaseApiModel extends FindingBase {
  findingType: LungInterstitiumFindingTypeEnum;
  distributionSecondaryPulmonaryLobuleType: DistributionSecondaryPulmonaryLobuleTypeEnum;
  randomDistributionType: RandomDistributionTypeEnum;
  localizationType: LungInterstitiumLocalizationTypeEnum;
  marginType: MarginTypeEnum;
  isMicronodular: boolean;
  isInterlobularSepta: boolean;
  isIntralobularSepta: boolean;
  structureType: StructureTypeEnum;
  isConsolidation: boolean;
  isGroundGlassOpacity: boolean;
  isCrazyPavingPattern: boolean;
  isBronchiectasis: boolean;
  bronchiectasisType: BronchiectasisTypeEnum;
  isBronchiolectasis: boolean;
  isBronchialWallThickening: boolean;
  isMucoidImpaction: boolean;

  constructor() {
    super();

    this.findingType = LungInterstitiumFindingTypeEnum.None;
    this.distributionSecondaryPulmonaryLobuleType = DistributionSecondaryPulmonaryLobuleTypeEnum.None;
    this.randomDistributionType = RandomDistributionTypeEnum.None;
    this.localizationType = LungInterstitiumLocalizationTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.isMicronodular = false;
    this.isInterlobularSepta = false;
    this.isIntralobularSepta = false;
    this.structureType = StructureTypeEnum.None;
    this.isConsolidation = false;
    this.isGroundGlassOpacity = false;
    this.isCrazyPavingPattern = false;
    this.isBronchiectasis = false;
    this.bronchiectasisType = BronchiectasisTypeEnum.None;
    this.isBronchiolectasis = false;
    this.isBronchialWallThickening = false;
    this.isMucoidImpaction = false;
  }
}
