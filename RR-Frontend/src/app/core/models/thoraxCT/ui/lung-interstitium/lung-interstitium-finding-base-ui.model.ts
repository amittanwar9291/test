import { FindingBase } from '@models/shared/finding/finding.base';
import {
  BronchiectasisTypeEnum,
  CystWallTypeEnum,
  DistributionSecondaryPulmonaryLobuleTypeEnum,
  EmphysemaTypeEnum,
  LocalizationLevelTypeEnum,
  LungInterstitiumCystTypeEnum,
  LungInterstitiumFindingTypeEnum,
  LungInterstitiumLocalizationTypeEnum,
  MosaicIntensityTypeEnum,
  MosaicPatternTypeEnum,
  QuantityTypeEnum,
  RandomDistributionTypeEnum,
  RatioReticularChangesTypeEnum,
  ReducedParenchymaDensityPatternTypeEnum,
  StructureTypeEnum
} from '@enums/thoraxCT/lung-interstitium';
import { LungsSegmentsModel } from '@models/thoraxCT/ui/thorax/lungs-segments.model';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { MarginTypeEnum } from '@enums/thoraxCT/common/margin-type.enum';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';

export class LungInterstitiumFindingBaseUiModel extends FindingBase {
  findingType: LungInterstitiumFindingTypeEnum;

  // Common
  lungsFlapsLocation1: LungsFlapsModel;
  lungsFlapsLocation2: LungsFlapsModel;

  // NodularChanges
  distributionSecondaryPulmonaryLobuleType: DistributionSecondaryPulmonaryLobuleTypeEnum;
  randomDistributionType: RandomDistributionTypeEnum;
  localizationType: LungInterstitiumLocalizationTypeEnum;
  marginType: MarginTypeEnum;
  isMicronodular: boolean;
  isMacronodular: boolean;
  isConfluentGranulomasSarcoidGalaxy: boolean;
  isGroundGlassNodules: boolean;
  isMicronodulesClusters: boolean;
  isReversedHaloSign: boolean;
  isPseudoplaque: boolean;

  // Reticulations
  isLinearPattern: boolean;
  isReticularPattern: boolean;
  isInterlobularSepta: boolean;
  isIntralobularSepta: boolean;
  structureType: StructureTypeEnum;
  isArchitecturalDistortion: boolean;

  // IncreasedParenchymalDensity
  isConsolidation: boolean;
  isPositiveBronchopneumogram: boolean;
  isGroundGlassOpacity: boolean;
  quantityType: QuantityTypeEnum;
  ratioReticularChangesType: RatioReticularChangesTypeEnum;
  isDarkBronchusSign: boolean;
  isPleuralThickening: boolean;

  // DecreasedParenchymalDensity
  reducedParenchymaDensityPatternType: ReducedParenchymaDensityPatternTypeEnum;
  cystType: LungInterstitiumCystTypeEnum;
  cystWallType: CystWallTypeEnum;

  // OtherParenchymalPatterns
  isMosaicPattern: boolean;
  mosaicPatternType: MosaicPatternTypeEnum;
  mosaicIntensityType: MosaicIntensityTypeEnum;
  isCurvilinearOpacification: boolean;
  isCrazyPavingPattern: boolean;

  // Emphysema
  emphysemaType: EmphysemaTypeEnum;
  isConfluentEmphysema: boolean;
  diameterLargestBullaInMm: number;

  // BronchialTubes
  isBronchiectasis: boolean;
  bronchiectasisType: BronchiectasisTypeEnum;
  isTractionBronchiectasis: boolean;
  isSignetRingSign: boolean;
  isBronchiolectasis: boolean;
  isTractionBronchiolectasis: boolean;
  isBronchialWallThickening: boolean;
  isMucoidImpaction: boolean;
  localizationLevel: LocalizationLevelTypeEnum;
  lungsSegmentsLocation: LungsSegmentsModel;

  // IMAGE FILE UPLOAD
  referencePicture: ReferencePictureUiModel;

  constructor() {
    super();

    this.findingType = LungInterstitiumFindingTypeEnum.None;

    // Common
    this.lungsFlapsLocation1 = new LungsFlapsModel();
    this.lungsFlapsLocation2 = new LungsFlapsModel();

    // NodularChanges
    this.distributionSecondaryPulmonaryLobuleType = DistributionSecondaryPulmonaryLobuleTypeEnum.None;
    this.randomDistributionType = RandomDistributionTypeEnum.None;
    this.localizationType = LungInterstitiumLocalizationTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.isMicronodular = false;
    this.isMacronodular = false;
    this.isConfluentGranulomasSarcoidGalaxy = false;
    this.isGroundGlassNodules = false;
    this.isMicronodulesClusters = false;
    this.isReversedHaloSign = false;
    this.isPseudoplaque = false;

    // Reticulations
    this.isLinearPattern = false;
    this.isReticularPattern = false;
    this.isInterlobularSepta = false;
    this.isIntralobularSepta = false;
    this.structureType = StructureTypeEnum.None;
    this.isArchitecturalDistortion = false;

    // IncreasedParenchymalDensity
    this.isConsolidation = false;
    this.isPositiveBronchopneumogram = false;
    this.isGroundGlassOpacity = false;
    this.quantityType = QuantityTypeEnum.None;
    this.ratioReticularChangesType = RatioReticularChangesTypeEnum.None;
    this.isDarkBronchusSign = false;
    this.isPleuralThickening = false;

    // DecreasedParenchymalDensity
    this.reducedParenchymaDensityPatternType = ReducedParenchymaDensityPatternTypeEnum.None;
    this.cystType = LungInterstitiumCystTypeEnum.None;
    this.cystWallType = CystWallTypeEnum.None;

    // OtherParenchymalPatterns
    this.isMosaicPattern = false;
    this.mosaicPatternType = MosaicPatternTypeEnum.None;
    this.mosaicIntensityType = MosaicIntensityTypeEnum.None;
    this.isCurvilinearOpacification = false;
    this.isCrazyPavingPattern = false;

    // Emphysema
    this.emphysemaType = EmphysemaTypeEnum.None;
    this.isConfluentEmphysema = false;
    this.diameterLargestBullaInMm = null;

    // BronchialTubes
    this.isBronchiectasis = false;
    this.bronchiectasisType = BronchiectasisTypeEnum.None;
    this.isTractionBronchiectasis = false;
    this.isSignetRingSign = false;
    this.isBronchiolectasis = false;
    this.isTractionBronchiolectasis = false;
    this.isBronchialWallThickening = false;
    this.isMucoidImpaction = false;
    this.localizationLevel = LocalizationLevelTypeEnum.None;
    this.lungsSegmentsLocation = new LungsSegmentsModel();

    // IMAGE FILE UPLOAD
    this.referencePicture = new ReferencePictureUiModel();
  }
}
