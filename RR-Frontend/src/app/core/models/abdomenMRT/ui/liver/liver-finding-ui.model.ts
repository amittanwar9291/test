import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { LiverFindingBaseUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-base-ui.model';
import { LiverPathologyUiModel } from '@models/abdomenMRT/ui/shared/liver-pathology-ui-model';
import {
  ExtensionTypeEnum,
  ClassificationCorletteTypeEnum,
  GrowthPatternTypeEnum,
  HuangClassificationTypeEnum,
  LiverDifferentialDiagnosisTypeEnum,
  AscitesTypeEnum,
  NodularSurfaceTypeEnum,
  SignalDropTypeEnum,
  HistologyKnownTypeEnum,
  GallbladderNormVariantPostoperativeTypeEnum,
  ClassificationAccordingToMcsherryTypeEnum,
  DetailsStoneTypeEnum,
  TopographyConcrementsTypeEnum,
  CharacteristicsTypeEnum
} from '@enums/abdomenMRT/liver/';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export class LiverFindingUiModel extends LiverFindingBaseUiModel {
  // Common
  descriptionType: DescriptionTypeEnum;
  differentialDiagnosis1: LiverDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2: LiverDifferentialDiagnosisTypeEnum;
  differentialDiagnosis3: LiverDifferentialDiagnosisTypeEnum;
  liverPathologyLocations: LiverPathologyUiModel;
  liverPathologyLocations2: LiverPathologyUiModel;

  isSuspicionOf: boolean;
  isSubordinate: boolean;
  isCommonHepaticArtery: boolean;
  isRightHepaticArtery: boolean;
  isLeftHepaticArtery: boolean;
  isIntrahepatic: boolean;

  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;

  referencePicture: ReferencePictureUiModel;

  // FocalLiverLesion
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;

  // DiffuseParenchymalChanges
  isHypertrophyLeftLiverLobe: boolean;
  isHypertrophyCaudateLobe: boolean;
  isHepaticFissureWidening: boolean;
  isNodularSurface: boolean;
  nodularSurfaceType: NodularSurfaceTypeEnum;
  isCorkscrewLikeHepaticArtery: boolean;
  isVPortaeDilatation: boolean;
  isVPortaeThrombosis: boolean;
  isCentral: boolean;
  isRightPortalVein: boolean;
  isLeftPortalVein: boolean;
  isSubocclusive: boolean;
  isCollateralization: boolean;
  isCavernousPortalVein: boolean;
  isHepaticVeins: boolean;
  isHepaticVeinsNotEvaluable: boolean;
  isThrombosis: boolean;
  isComplete: boolean;
  isPartial: boolean;
  isOcclusion: boolean;
  isDilatation: boolean;
  isArteriovenousShunts: boolean;
  isArterioportalShunts: boolean;
  isPortovenousShunts: boolean;
  isPeriosophageal: boolean;
  isPerisplenic: boolean;
  isPerigastric: boolean;
  isParaumbilical: boolean;
  isRetroperitoneal: boolean;
  isRecanalizedUmbilicalVein: boolean;
  isAscites: boolean;
  ascitesType: AscitesTypeEnum;
  isFibrosis: boolean;
  isConfluent: boolean;
  isWedgeShapedExtensionToPeriphery: boolean;
  isSignalDrop: boolean;
  signalDropType: SignalDropTypeEnum;

  // GallbladderNormVariantPostoperative
  gallbladderNormVariantPostoperativeType: GallbladderNormVariantPostoperativeTypeEnum;

  // GallbladderStone
  topographyConcrementsType: TopographyConcrementsTypeEnum;
  isObstructive: boolean;
  isIntrahepaticBileDuctDilatation: boolean;
  isMirizziSyndrome: boolean;
  classificationMcsherryType: ClassificationAccordingToMcsherryTypeEnum;
  detailsStoneType: DetailsStoneTypeEnum;

  // GallbladderWallThickening
  isNeckCollum: boolean;
  isBodyCorpus: boolean;
  isBaseOfBladderFundus: boolean;
  isCysticDuct: boolean;
  characteristicsType: CharacteristicsTypeEnum;
  maxWallThicknessInMm: number;
  isPeriportalEdema: boolean;
  isIncreasedGallbladderWallEnhancement: boolean;
  isIncreasedContrastEnhancementLiverParenchyma: boolean;
  isWallDiscontinuity: boolean;
  isIntramuralRokitanskyAschoff: boolean;
  isPearlNecklaceSign: boolean;
  isIntramuralGranulomas: boolean;
  isIntraluminalPolypoidMass: boolean;
  isMuralCalcification: boolean;
  isLiver: boolean;
  isStomach: boolean;
  isIntestine: boolean;
  isPancreas: boolean;
  isHepaticArtery: boolean;
  isProperHepaticArtery: boolean;
  isPortalVein: boolean;

  // BileDuctNormVariant
  isShortRightHepaticDuct: boolean;
  isHuangClassification: boolean;
  huangClassificationType: HuangClassificationTypeEnum;

  // BiliaryDuctalDilatation
  maxWidthOfTheCommonBileDuctInMm: number;
  maxWidthOfTheIntrahepaticInMm: number;
  isDoubleDuctSign: boolean;
  isMultifocalDilatationOfBileDucts: boolean;
  isCysticDilatationsOfBileDucts: boolean;
  isCaliberVariations: boolean;
  isConcentricWallThickening: boolean;
  isStringOfPearlsConfiguration: boolean;
  isWallEnhancement: boolean;
  isIntrahepaticStone: boolean;
  isIntraductal: boolean;
  isCholangitis: boolean;
  isPusInTheBileDuct: boolean;
  isAbscess: boolean;
  extensionInMm: number;
  isAerobilia: boolean;
  isStricture: boolean;
  lengthOfStrictureInMm: number;
  isPseudostricture: boolean;
  isPseudostrictureSuspicionOf: boolean;

  // BileDuctLeakage
  extensionType: ExtensionTypeEnum;
  isAdjacentFluidFormation: boolean;
  isEncapsulation: boolean;
  isGasInclusion: boolean;
  isExtrahepatic: boolean;
  isSignsOfInfection: boolean;

  // BileDuctMass
  isLongSegmentalStricture: boolean;
  isIrregularWallThickening: boolean;
  isLateEnhancementOfTheMassWallThickening: boolean;
  isAbsenceOfWashout: boolean;
  isCapsularRetraction: boolean;
  growthPatternType: GrowthPatternTypeEnum;
  isVPortaeProximal: boolean;
  isInferiorVenaCava: boolean;
  isLiverCapsule: boolean;
  classificationCorletteType: ClassificationCorletteTypeEnum;

  // VascularNormVariants
  isCommonOriginOfCeliacArtery: boolean;
  isTrifurcationHepaticArtery: boolean;
  isGastroduodenalArtery: boolean;
  isTruncusIncompletus: boolean;
  isTruncusCompletus: boolean;

  constructor() {
    super();

    // Common
    this.descriptionType = DescriptionTypeEnum.None;
    this.differentialDiagnosis1 = LiverDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis2 = LiverDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis3 = LiverDifferentialDiagnosisTypeEnum.None;
    this.liverPathologyLocations = new LiverPathologyUiModel();
    this.liverPathologyLocations2 = new LiverPathologyUiModel();
    this.isSuspicionOf = false;
    this.isSubordinate = false;
    this.isCommonHepaticArtery = false;
    this.isRightHepaticArtery = false;
    this.isLeftHepaticArtery = false;
    this.isIntrahepatic = false;

    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;

    this.referencePicture = new ReferencePictureUiModel();

    // FocalLiverLesion
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;

    // DiffuseParenchymalChanges
    this.isHypertrophyLeftLiverLobe = false;
    this.isHypertrophyCaudateLobe = false;
    this.isHepaticFissureWidening = false;
    this.isNodularSurface = false;
    this.nodularSurfaceType = NodularSurfaceTypeEnum.None;
    this.isCorkscrewLikeHepaticArtery = false;
    this.isVPortaeDilatation = false;
    this.isVPortaeThrombosis = false;
    this.isCentral = false;
    this.isRightPortalVein = false;
    this.isLeftPortalVein = false;
    this.isSubocclusive = false;
    this.isCollateralization = false;
    this.isCavernousPortalVein = false;
    this.isHepaticVeins = false;
    this.isHepaticVeinsNotEvaluable = false;
    this.isThrombosis = false;
    this.isComplete = false;
    this.isPartial = false;
    this.isOcclusion = false;
    this.isDilatation = false;
    this.isArteriovenousShunts = false;
    this.isArterioportalShunts = false;
    this.isPortovenousShunts = false;
    this.isPeriosophageal = false;
    this.isPerisplenic = false;
    this.isPerigastric = false;
    this.isParaumbilical = false;
    this.isRetroperitoneal = false;
    this.isRecanalizedUmbilicalVein = false;
    this.isAscites = false;
    this.ascitesType = AscitesTypeEnum.None;
    this.isFibrosis = false;
    this.isConfluent = false;
    this.isWedgeShapedExtensionToPeriphery = false;
    this.isSignalDrop = false;
    this.signalDropType = SignalDropTypeEnum.None;

    // GallbladderNormVariantPostoperative
    this.gallbladderNormVariantPostoperativeType = GallbladderNormVariantPostoperativeTypeEnum.None;

    // GallbladderStone
    this.topographyConcrementsType = TopographyConcrementsTypeEnum.None;
    this.isObstructive = false;
    this.isIntrahepaticBileDuctDilatation = false;
    this.isMirizziSyndrome = false;
    this.classificationMcsherryType = ClassificationAccordingToMcsherryTypeEnum.None;
    this.detailsStoneType = DetailsStoneTypeEnum.None;

    // GallbladderWallThickening
    this.isNeckCollum = false;
    this.isBodyCorpus = false;
    this.isBaseOfBladderFundus = false;
    this.isCysticDuct = false;
    this.characteristicsType = CharacteristicsTypeEnum.None;
    this.maxWallThicknessInMm = null;
    this.isPeriportalEdema = false;
    this.isIncreasedGallbladderWallEnhancement = false;
    this.isIncreasedContrastEnhancementLiverParenchyma = false;
    this.isWallDiscontinuity = false;
    this.isIntramuralRokitanskyAschoff = false;
    this.isPearlNecklaceSign = false;
    this.isIntramuralGranulomas = false;
    this.isIntraluminalPolypoidMass = false;
    this.isMuralCalcification = false;
    this.isLiver = false;
    this.isStomach = false;
    this.isIntestine = false;
    this.isPancreas = false;
    this.isHepaticArtery = false;
    this.isProperHepaticArtery = false;
    this.isPortalVein = false;

    // BileDuctNormVariant
    this.isShortRightHepaticDuct = false;
    this.isHuangClassification = false;
    this.huangClassificationType = HuangClassificationTypeEnum.None;

    // BiliaryDuctalDilatation
    this.maxWidthOfTheCommonBileDuctInMm = null;
    this.maxWidthOfTheIntrahepaticInMm = null;
    this.isDoubleDuctSign = false;
    this.isMultifocalDilatationOfBileDucts = false;
    this.isCysticDilatationsOfBileDucts = false;
    this.isCaliberVariations = false;
    this.isConcentricWallThickening = false;
    this.isStringOfPearlsConfiguration = false;
    this.isWallEnhancement = false;
    this.isIntrahepaticStone = false;
    this.isIntraductal = false;
    this.isCholangitis = false;
    this.isPusInTheBileDuct = false;
    this.isAbscess = false;
    this.extensionInMm = null;
    this.isAerobilia = false;
    this.isStricture = false;
    this.lengthOfStrictureInMm = null;
    this.isPseudostricture = false;
    this.isPseudostrictureSuspicionOf = false;

    // BileDuctLeakage
    this.extensionType = ExtensionTypeEnum.None;
    this.isAdjacentFluidFormation = false;
    this.isEncapsulation = false;
    this.isGasInclusion = false;
    this.isExtrahepatic = false;
    this.isSignsOfInfection = false;

    // BileDuctMass
    this.isLongSegmentalStricture = false;
    this.isIrregularWallThickening = false;
    this.isLateEnhancementOfTheMassWallThickening = false;
    this.isAbsenceOfWashout = false;
    this.isCapsularRetraction = false;
    this.growthPatternType = GrowthPatternTypeEnum.None;
    this.isVPortaeProximal = false;
    this.isInferiorVenaCava = false;
    this.isLiverCapsule = false;
    this.classificationCorletteType = ClassificationCorletteTypeEnum.None;

    // VascularNormVariants
    this.isCommonOriginOfCeliacArtery = false;
    this.isTrifurcationHepaticArtery = false;
    this.isGastroduodenalArtery = false;
    this.isTruncusIncompletus = false;
    this.isTruncusCompletus = false;
  }
}
