import {
  CystWallTypeEnum,
  EmphysemaTypeEnum,
  LocalizationLevelTypeEnum,
  LungInterstitiumCystTypeEnum,
  MosaicIntensityTypeEnum,
  MosaicPatternTypeEnum,
  QuantityTypeEnum,
  RatioReticularChangesTypeEnum,
  ReducedParenchymaDensityPatternTypeEnum
} from '@enums/thoraxCT/lung-interstitium';
import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { LungInterstitiumFindingBaseApiModel } from '@models/thoraxCT/api/lung-interstitium/lung-interstitium-finding-base-api.model';

export class LungInterstitiumFindingApiModel extends LungInterstitiumFindingBaseApiModel {
  lungsFlapsLocation1: string;
  lungsFlapsLocation2: string;
  isMacronodular: boolean;
  isConfluentGranulomasSarcoidGalaxy: boolean;
  isGroundGlassNodules: boolean;
  isMicronodulesClusters: boolean;
  isReversedHaloSign: boolean;
  isPseudoplaque: boolean;
  isLinearPattern: boolean;
  isReticularPattern: boolean;
  isArchitecturalDistortion: boolean;
  isPositiveBronchopneumogram: boolean;
  quantityType: QuantityTypeEnum;
  ratioReticularChangesType: RatioReticularChangesTypeEnum;
  isDarkBronchusSign: boolean;
  isPleuralThickening: boolean;
  reducedParenchymaDensityPatternType: ReducedParenchymaDensityPatternTypeEnum;
  cystType: LungInterstitiumCystTypeEnum;
  cystWallType: CystWallTypeEnum;
  isMosaicPattern: boolean;
  mosaicPatternType: MosaicPatternTypeEnum;
  mosaicIntensityType: MosaicIntensityTypeEnum;
  isCurvilinearOpacification: boolean;
  emphysemaType: EmphysemaTypeEnum;
  isConfluentEmphysema: boolean;
  diameterLargestBullaInMm: number;
  isTractionBronchiectasis: boolean;
  isSignetRingSign: boolean;
  isTractionBronchiolectasis: boolean;
  localizationLevel: LocalizationLevelTypeEnum;
  lungsSegmentsLocation: string;
  serialNumber: string;
  pictureNumber: string;
  imageFileId: string;
  uploadedImageFile: FileApiModel;

  constructor() {
    super();

    this.lungsFlapsLocation1 = 'None';
    this.lungsFlapsLocation2 = 'None';

    this.isMacronodular = false;
    this.isConfluentGranulomasSarcoidGalaxy = false;
    this.isGroundGlassNodules = false;
    this.isMicronodulesClusters = false;
    this.isReversedHaloSign = false;
    this.isPseudoplaque = false;

    // Reticulations
    this.isLinearPattern = false;
    this.isReticularPattern = false;
    this.isArchitecturalDistortion = false;

    // IncreasedParenchymalDensity
    this.isPositiveBronchopneumogram = false;
    this.quantityType = QuantityTypeEnum.None;
    this.ratioReticularChangesType = RatioReticularChangesTypeEnum.None;
    this.isDarkBronchusSign = false;
    this.isPleuralThickening = false;

    // DecreasedParenchymalDensity
    this.reducedParenchymaDensityPatternType = ReducedParenchymaDensityPatternTypeEnum.None;
    this.cystType = LungInterstitiumCystTypeEnum.None;
    this.cystWallType = CystWallTypeEnum.None;

    // FurtherParenchymaPatterns
    this.isMosaicPattern = false;
    this.mosaicPatternType = MosaicPatternTypeEnum.None;
    this.mosaicIntensityType = MosaicIntensityTypeEnum.None;
    this.isCurvilinearOpacification = false;

    // Emphysema
    this.emphysemaType = EmphysemaTypeEnum.None;
    this.isConfluentEmphysema = false;
    this.diameterLargestBullaInMm = null;

    // BronchialTubes
    this.isTractionBronchiectasis = false;
    this.isSignetRingSign = false;
    this.isTractionBronchiolectasis = false;
    this.localizationLevel = LocalizationLevelTypeEnum.None;
    this.lungsSegmentsLocation = 'None';

    // IMAGE FILE UPLOAD
    this.serialNumber = '';
    this.pictureNumber = '';
    this.imageFileId = null;
    this.uploadedImageFile = new FileApiModel();
  }
}
