import { BladderFindingBaseApiModel } from './bladder-finding-base-api.model';
import {
  BladderDiagnosisTypeEnum,
  AscitesCharacterizationTypeEnum,
  ClassificationMunichConsensusTypeEnum,
  HematomaCharacterizationTypeEnum,
  LocalizationWithinMuscleTypeEnum,
  MuscleAtrophyTypeEnum,
  MusclesLocalizationTypeEnum,
  OsseousAvulsionLocalizationTypeEnum,
  AffectedNerveTypeEnum,
  ExtrapelvicLocalizationTypeEnum,
  IntrapelvicLocalizationTypeEnum,
  TumorLocalizationTypeEnum,
  PeritonealNodulesCharacterizationTypeEnum,
  MarginTypeEnum,
  SoftTissueMassLocalizationTypeEnum,
  DetailsRuptureLocalizationTypeEnum,
  MorphologyTendinopathyTypeEnum,
  TendonsLocalizationTypeEnum,
  TendonsPathologyTypeEnum,
  GrowthPatternsTypeEnum,
  HeterogeneousTypeEnum,
  InfiltrativeGrowthTypeEnum,
  SecondaryWallThickeningTypeEnum,
  ThickeningLocalizationTypeEnum,
  AffectedVesselUreterTypeEnum,
  ArteriopathyTypeEnum,
  PathologyAnatomicVariantsTypeEnum,
  VesselsUreterPathologyTypeEnum
} from '@enums/pelvisMRT/bladder';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export class BladderFindingApiModel extends BladderFindingBaseApiModel {
  // Common
  maxDiameterInMm: number;
  sideType: SideTypeEnum;
  maxExpansionInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  isCalcification: boolean;
  differentialDiagnosis1: BladderDiagnosisTypeEnum;
  differentialDiagnosis2: BladderDiagnosisTypeEnum;
  isSubordinate: boolean;
  isMoreThan1Lesion: boolean;
  isArtifacts: boolean;
  isNotSufficientBladderFilling: boolean;
  isInsertedBladderCatheter: boolean;
  isDoubleJCatheterRight: boolean;
  isDoubleJCatheterLeft: boolean;
  isSmallIntestine: boolean;
  homogeneityType: HomogeneityTypeEnum;
  isMuscleAtrophy: boolean;

  // Ascites
  ascitesCharacterizationType: AscitesCharacterizationTypeEnum;
  isDetectionOfHemosiderin: boolean;

  // PeritonealNodules
  peritonealNodulesCharacterizationType: PeritonealNodulesCharacterizationTypeEnum;
  isRectoUterinePouch: boolean;

  // VesselsUreter
  affectedVesselUreterType: AffectedVesselUreterTypeEnum;
  arteriopathyType: ArteriopathyTypeEnum;
  pathologyAnatomicVariantsType: PathologyAnatomicVariantsTypeEnum;
  vesselsUreterPathologyType: VesselsUreterPathologyTypeEnum;

  // UrinaryBladderWallThickening
  thickeningLocalizationType: ThickeningLocalizationTypeEnum;
  isBaseOfTheBladder: boolean;
  isRightLateralWall: boolean;
  isLeftLateralWall: boolean;
  isBladderNeck: boolean;
  isTrigonum: boolean;
  isRoofOfBladder: boolean;
  isAnteriorWall: boolean;
  isPosteriorWall: boolean;
  heterogeneousType: HeterogeneousTypeEnum;
  growthPatternsType: GrowthPatternsTypeEnum;
  infiltrativeGrowthType: InfiltrativeGrowthTypeEnum;
  secondaryWallThickeningType: SecondaryWallThickeningTypeEnum;

  // UrinaryBladderStandardVariationAnomalies
  isPatentUrachus: boolean;
  isInfection: boolean;
  isMass: boolean;
  isCongenitalBladderFistula: boolean;
  isRectumSigma: boolean;
  isUterusVagina: boolean;
  isCutan: boolean;

  // UrinaryBladderTrauma
  isBladderrupture: boolean;
  isIntraperitoneal: boolean;
  isExtraperitoneal: boolean;
  isBladderTamponade: boolean;
  isBloodClot: boolean;

  // PeripheralNerveSheathTumor
  tumorLocalizationType: TumorLocalizationTypeEnum;
  intrapelvicLocalizationType: IntrapelvicLocalizationTypeEnum;
  extrapelvicLocalizationType: ExtrapelvicLocalizationTypeEnum;
  affectedNerveType: AffectedNerveTypeEnum;
  isSuspicionOfMalignancy: boolean;
  isSmoothMargins: boolean;
  isFusiformShape: boolean;
  isMarginSplitFatSign: boolean;
  isT1wIsointensToMuscleSignal: boolean;
  isContrastEnhancement: boolean;

  // SoftTissueMass
  descriptionType: DescriptionTypeEnum;
  softTissueMassLocalizationType: SoftTissueMassLocalizationTypeEnum;
  marginType: MarginTypeEnum;
  isFat: boolean;
  isNecrosis: boolean;
  isCysts: boolean;
  isSepta: boolean;
  isSignalVoids: boolean;
  isHemorrhage: boolean;
  isBone: boolean;
  isUrinaryBladder: boolean;
  isUterus: boolean;
  isVagina: boolean;
  isProstate: boolean;
  isSeminalVesicles: boolean;
  isRectum: boolean;
  isSigma: boolean;
  isVascular: boolean;
  isSkinExulceration: boolean;

  // Muscles
  musclesLocalizationType: MusclesLocalizationTypeEnum;
  localizationWithinMuscleType: LocalizationWithinMuscleTypeEnum;
  isMuscleLesion: boolean;
  classificationMunichConsensusType: ClassificationMunichConsensusTypeEnum;
  isCrossDiameterOfRuptureLessThan5Mm: boolean;
  isCrossDiameterOfRupture5OrMoreMm: boolean;
  retractionInMm: number;
  isWavyCourseOfTheFibres: boolean;
  isOsseousAvulsion: boolean;
  osseousAvulsionLocalizationType: OsseousAvulsionLocalizationTypeEnum;
  isIntracorticalEdema: boolean;
  isHematoma: boolean;
  isIntramuscular: boolean;
  isInterfacial: boolean;
  isIntermuscular: boolean;
  hematomaCharacterizationType: HematomaCharacterizationTypeEnum;
  isFattyDegeneration: boolean;
  isMuscularHypotrophy: boolean;
  muscleAtrophyType: MuscleAtrophyTypeEnum;
  isApophysitis: boolean;
  isFascialLaceration: boolean;
  isMuscleHerniation: boolean;
  isReducedIschiofemoralSpace: boolean;
  shortestDistanceInMm: number;

  // Tendons
  tendonsLocalizationType: TendonsLocalizationTypeEnum;
  tendonsPathologyType: TendonsPathologyTypeEnum;
  detailsRuptureLocalizationType: DetailsRuptureLocalizationTypeEnum;
  isRetraction: boolean;
  extensionInMm: number;
  isSurroundingHematoma: boolean;
  isBoneBruise: boolean;
  isAvulsionTuberosityTibiae: boolean;
  morphologyTendinopathyType: MorphologyTendinopathyTypeEnum;
  isSignalIncreaseInPDAndT1w: boolean;
  isGanglion: boolean;

  constructor() {
    super();

    // Common
    this.maxDiameterInMm = null;
    this.sideType = SideTypeEnum.None;
    this.maxExpansionInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.isCalcification = false;
    this.differentialDiagnosis1 = BladderDiagnosisTypeEnum.None;
    this.differentialDiagnosis2 = BladderDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.isMoreThan1Lesion = false;
    this.isArtifacts = false;
    this.isNotSufficientBladderFilling = false;
    this.isInsertedBladderCatheter = false;
    this.isDoubleJCatheterRight = false;
    this.isDoubleJCatheterLeft = false;
    this.isSmallIntestine = false;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.isMuscleAtrophy = false;

    // Ascites
    this.ascitesCharacterizationType = AscitesCharacterizationTypeEnum.None;
    this.isDetectionOfHemosiderin = false;

    // PeritonealNodules
    this.peritonealNodulesCharacterizationType = PeritonealNodulesCharacterizationTypeEnum.None;
    this.isRectoUterinePouch = false;

    // VesselsUreter
    this.affectedVesselUreterType = AffectedVesselUreterTypeEnum.None;
    this.arteriopathyType = ArteriopathyTypeEnum.None;
    this.pathologyAnatomicVariantsType = PathologyAnatomicVariantsTypeEnum.None;
    this.vesselsUreterPathologyType = VesselsUreterPathologyTypeEnum.None;

    // UrinaryBladderWallThickening
    this.thickeningLocalizationType = ThickeningLocalizationTypeEnum.None;
    this.isBaseOfTheBladder = false;
    this.isRightLateralWall = false;
    this.isLeftLateralWall = false;
    this.isBladderNeck = false;
    this.isTrigonum = false;
    this.isRoofOfBladder = false;
    this.isAnteriorWall = false;
    this.isPosteriorWall = false;
    this.heterogeneousType = HeterogeneousTypeEnum.None;
    this.growthPatternsType = GrowthPatternsTypeEnum.None;
    this.infiltrativeGrowthType = InfiltrativeGrowthTypeEnum.None;
    this.secondaryWallThickeningType = SecondaryWallThickeningTypeEnum.None;

    // UrinaryBladderStandardVariationAnomalies
    this.isPatentUrachus = false;
    this.isInfection = false;
    this.isMass = false;
    this.isCongenitalBladderFistula = false;
    this.isRectumSigma = false;
    this.isUterusVagina = false;
    this.isCutan = false;

    // UrinaryBladderTrauma
    this.isBladderrupture = false;
    this.isIntraperitoneal = false;
    this.isExtraperitoneal = false;
    this.isBladderTamponade = false;
    this.isBloodClot = false;

    // PeripheralNerveSheathTumor
    this.tumorLocalizationType = TumorLocalizationTypeEnum.None;
    this.intrapelvicLocalizationType = IntrapelvicLocalizationTypeEnum.None;
    this.extrapelvicLocalizationType = ExtrapelvicLocalizationTypeEnum.None;
    this.affectedNerveType = AffectedNerveTypeEnum.None;
    this.isSuspicionOfMalignancy = false;
    this.isSmoothMargins = false;
    this.isFusiformShape = false;
    this.isMarginSplitFatSign = false;
    this.isT1wIsointensToMuscleSignal = false;
    this.isContrastEnhancement = false;

    // SoftTissueMass
    this.descriptionType = DescriptionTypeEnum.None;
    this.softTissueMassLocalizationType = SoftTissueMassLocalizationTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.isFat = false;
    this.isNecrosis = false;
    this.isCysts = false;
    this.isSepta = false;
    this.isSignalVoids = false;
    this.isHemorrhage = false;
    this.isBone = false;
    this.isUrinaryBladder = false;
    this.isUterus = false;
    this.isVagina = false;
    this.isProstate = false;
    this.isSeminalVesicles = false;
    this.isRectum = false;
    this.isSigma = false;
    this.isVascular = false;
    this.isSkinExulceration = false;

    // Muscles
    this.musclesLocalizationType = MusclesLocalizationTypeEnum.None;
    this.localizationWithinMuscleType = LocalizationWithinMuscleTypeEnum.None;
    this.isMuscleLesion = false;
    this.classificationMunichConsensusType = ClassificationMunichConsensusTypeEnum.None;
    this.isCrossDiameterOfRuptureLessThan5Mm = false;
    this.isCrossDiameterOfRupture5OrMoreMm = false;
    this.retractionInMm = null;
    this.isWavyCourseOfTheFibres = false;
    this.isOsseousAvulsion = false;
    this.osseousAvulsionLocalizationType = OsseousAvulsionLocalizationTypeEnum.None;
    this.isIntracorticalEdema = false;
    this.isHematoma = false;
    this.isIntramuscular = false;
    this.isInterfacial = false;
    this.isIntermuscular = false;
    this.hematomaCharacterizationType = HematomaCharacterizationTypeEnum.None;
    this.isFattyDegeneration = false;
    this.isMuscularHypotrophy = false;
    this.muscleAtrophyType = MuscleAtrophyTypeEnum.None;
    this.isApophysitis = false;
    this.isFascialLaceration = false;
    this.isMuscleHerniation = false;
    this.isReducedIschiofemoralSpace = false;
    this.shortestDistanceInMm = null;

    // Tendons
    this.tendonsLocalizationType = TendonsLocalizationTypeEnum.None;
    this.tendonsPathologyType = TendonsPathologyTypeEnum.None;
    this.detailsRuptureLocalizationType = DetailsRuptureLocalizationTypeEnum.None;
    this.isRetraction = false;
    this.extensionInMm = null;
    this.isSurroundingHematoma = false;
    this.isBoneBruise = false;
    this.isAvulsionTuberosityTibiae = false;
    this.morphologyTendinopathyType = MorphologyTendinopathyTypeEnum.None;
    this.isSignalIncreaseInPDAndT1w = false;
    this.isGanglion = false;
  }
}
