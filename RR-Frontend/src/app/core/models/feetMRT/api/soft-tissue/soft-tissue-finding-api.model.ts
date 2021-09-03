import {
  AgeTypeEnum,
  ClassificationTypeEnum,
  D1TypeEnum,
  DetailTypeEnum,
  DimensionTypeEnum,
  DiseaseOfTheSynoviaEnum,
  DiseasesOfTheMtpLocalizationTypeEnum,
  DiseasesOfTheMtpTypeEnum,
  FredericsonStadiumTypeEnum,
  HomogeneityTypeEnum,
  InterdigitalSpaceTypeEnum,
  LimitationTypeEnum,
  LocalizationWithinOfMuscleTypeEnum,
  MuscleChangeTypeEnum,
  MuscleLesionLocalizationTypeEnum,
  MuscularAtrophyTypeEnum,
  NodeTypeEnum,
  PathologyTypeEnum,
  PlantarFasciaDiseaseTypeEnum,
  QualityTypeEnum,
  RuptureTypeEnum,
  SandersAndFrykbergClassificationTypeEnum
} from '@enums/feetMRT/soft-tissue';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HistologyKnownTypeEnum } from '@enums/feetMRT/soft-tissue/histology-known-type.enum';
import { SynoviaFormTypeEnum } from '@enums/feetMRT/soft-tissue/synoviaFocal/synovia-form-type.enum';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { SoftTissueFindingBaseApiModel } from './soft-tissue-finding-base-api.model';

export class SoftTissueFindingApiModel extends SoftTissueFindingBaseApiModel {
  // Common
  threeDimensionalLocalization: string;
  tendonsLocalization: string;
  isSubordinated: boolean;
  isRetraction: boolean;
  detailType: DetailTypeEnum;
  detailMaxDiameterInMm: number;
  differentialDiagnosis1: string;
  differentialDiagnosis2: string;
  differentialDiagnosis3: string;
  isMoreThanOneLesion: boolean;
  isFreeJointBody: boolean;
  isBonyAvulsion: boolean;
  isIntracorticalEdema: boolean;
  isBoneMarrowEdema: boolean;
  isArticularEffusion: boolean;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  isSuspicionOf: boolean;

  // Effusion
  dimensionType: DimensionTypeEnum;
  qualityType: QualityTypeEnum;
  isExtravasationArticularEffusion: boolean;
  freeJointBodyDiameterInMm: number;

  // PlantarFasciaDisease
  isCentral: boolean;
  isMedial: boolean;
  isLateral: boolean;
  plantarFasciaDiseaseType: PlantarFasciaDiseaseTypeEnum;
  ruptureType: RuptureTypeEnum;
  retractionDimensionInMm: number;
  isPlantarHeelSpur: boolean;
  isBoneMarrowEdemaOfTheCalcaneus: boolean;
  isThickeningOfTheFascia: boolean;
  isSpindleShaped: boolean;
  isCloseToTheCalcaneus: boolean;
  isT1wIncreasedSignalIntensityTheFascia: boolean;
  isT2wIncreasedSignalIntensityTheFascia: boolean;
  isSurroundingEdemaOrPerifasciitis: boolean;
  isSignalIncreaseOfTheAdjacentMusculature: boolean;
  isHypervascularization: boolean;
  isDistalLocalization: boolean;
  isProximalLocalization: boolean;
  isNode: boolean;
  nodeType: NodeTypeEnum;
  isFibroma: boolean;
  fibromaMaxDiameterInMm: number;
  isHeterogeneousSignalIntensityInT1wOrT2w: boolean;
  isLowSignalThrombusInDeepPlantarVein: boolean;
  isSurroundingInflammatoryReaction: boolean;
  isDilatedVein: boolean;
  isLowSignalThrombusWithFillingDefect: boolean;
  isPerivascularEdema: boolean;
  isMAbductorDigitiMinimi: boolean;
  isMFlexorDigitorumBrevis: boolean;
  isMQuadratusPlantae: boolean;
  muscleChangeType: MuscleChangeTypeEnum;
  isLinearIntramedullaryT1wHypointensity: boolean;

  // DiseasesOfTheMTP
  diseasesOfTheMtpType: DiseasesOfTheMtpTypeEnum;
  d1Type: D1TypeEnum;
  halluxValgusAngleInDegrees: number;
  intermetatarsalAngleInDegrees: number;
  isLateralDeviation: boolean;
  isLateralDislocationTheSesamoidBones: boolean;
  isLateralProliferationSesamoidBones: boolean;
  isSubluxationInBigToeMetatarsophalangealJoint: boolean;
  isSynovialEnhancement: boolean;
  isPseudoexostosisMedial: boolean;
  diseasesOfTheMTPLocalizationType: DiseasesOfTheMtpLocalizationTypeEnum;
  pathologyType: PathologyTypeEnum;
  isD1: boolean;
  isD2: boolean;
  isD3: boolean;
  isD4: boolean;
  isD5: boolean;
  isExpansionUpToCollateralLigaments: boolean;
  isPericapsularFibrosis: boolean;
  isSynovitis: boolean;
  isLuxationMTP: boolean;
  isAdjacentGanglion: boolean;
  adjacentGanglionMaxDiameterInMm: number;

  // Bursitis
  isBursaMetatarsophalangealis: boolean;
  isMetatarsalBursa: boolean;
  isBursaIntermetatarsale: boolean;
  isBursaSubcutaneaCalcanea: boolean;
  isBursaRetrocalcaneal: boolean;
  isRetrocalcanealBursa: boolean;
  isBursaSubcutaneaMedialMalleolus: boolean;
  isBursaSubcutaneaLateralMalleolus: boolean;
  maxDiameterBursa: number;
  limitationType: LimitationTypeEnum;
  isBleedingIn: boolean;
  isMortonNovelty: boolean;

  // SoftTissueTumor
  descriptionType: DescriptionTypeEnum;
  expansionSizeMaxInMm: number;
  expansion2ndStageInMm: number;
  expansion3rdStageInMm: number;
  interdigitalSpaceType: InterdigitalSpaceTypeEnum;
  isCutisThickening: boolean;
  isPressureCorrosionBone: boolean;
  isDiffusionRestriction: boolean;
  isInTheSepta: boolean;

  // DiseaseOfTheSynovia
  localizationOfTheSynoviaSynovitisType: DiseaseOfTheSynoviaEnum;
  isIntraarticular: boolean;
  isExtraarticular: boolean;

  // DiseaseOfTheSynoviaSynovitis
  isHyperplasia: boolean;
  isHigherT2wOrPDSignal: boolean;
  isIncreasedCMEnhancement: boolean;

  // DiseaseOfTheSynoviaFocalMass
  isBloomingArtifact: boolean;
  isMultilobulated: boolean;
  isSynovialNodulus: boolean;
  isSynovialProliferations: boolean;
  isNecrosis: boolean;
  isFreeJointBodyMoreThanOneLesion: boolean;
  isHaemarthros: boolean;
  isBonyErosionsinsertionSynovialMembrane: boolean;
  synoviaFormType: SynoviaFormTypeEnum;
  isSynovialNodulusMoreThanOneLesion: boolean;
  isSusceptibilityArtifact: boolean;
  cmEnhancementType: CMEnhancementTypeEnum;
  powerfulHomogeneityType: HomogeneityTypeEnum;

  // MuscleLesion
  isMuscleLesion: boolean;
  muscleLesionLocalizationType: MuscleLesionLocalizationTypeEnum;
  classificationType: ClassificationTypeEnum;
  localizationWithinOfTheMuscleType: LocalizationWithinOfMuscleTypeEnum;
  isCrossDiameterOfTheRuptureLessThan5Mm: boolean;
  isCrossDiameterOfTheRuptureMoreThan5Mm: boolean;
  retractionInMm: number;
  isWavyCourseOfTheFibers: boolean;
  isHematoma: boolean;
  isIntramuscular: boolean;
  isInterfacial: boolean;
  isIntermuscular: boolean;
  ageType: AgeTypeEnum;
  isFattyDegeneration: boolean;
  isMuscularHypotrophy: boolean;
  isMuscularAtrophy: boolean;
  muscularAtrophyType: MuscularAtrophyTypeEnum;
  isApophysitis: boolean;
  isFascialLaceration: boolean;
  isMuscleHerniation: boolean;
  isFasciaTear: boolean;

  // TibialStressSyndromeTSS
  distanceOfTheOSGInMm: number;
  ccExpansionInMm: number;
  maxAxialExpansionInMm: number;
  fredericsonStadiumType: FredericsonStadiumTypeEnum;

  // CharcotFoot
  isPeriarticularlyAccentuated: boolean;
  inTheMetatarsotarsalJoints: boolean;
  isInTheMetatarsophalangealJoints: boolean;
  isBoneMarrowEdemaZone1: boolean;
  isBoneMarrowEdemaZone2: boolean;
  isBoneMarrowEdemaZone3: boolean;
  isBoneMarrowEdemaZone4: boolean;
  isBoneMarrowEdemaZone5: boolean;
  isSoftTissueEdema: boolean;
  isMicrofracture: boolean;
  isJointDestruction: boolean;
  isJointDestructionZone1: boolean;
  isJointDestructionZone2: boolean;
  isJointDestructionZone3: boolean;
  isJointDestructionZone4: boolean;
  isJointDestructionZone5: boolean;
  isFracture: boolean;
  isOsNavicular: boolean;
  isFragmentation: boolean;
  isLuxation: boolean;
  isOssaMetatarsaliaCranialAndLateral: boolean;
  isBreakInLongitudinalVault: boolean;
  isRockerbottomDeformity: boolean;
  isTalusHeadLowering: boolean;
  isOsNaviculareAfterCranialMedial: boolean;
  isProliferation: boolean;
  isSclerosis: boolean;
  isSubchondralCysts: boolean;
  isLisfrancJoint: boolean;
  isFreeJointBodies: boolean;
  isUlcerationOfTheSoleOfTheFoot: boolean;
  isSoftTissueInfection: boolean;
  isAbscess: boolean;
  isPhlegmone: boolean;
  abscessMaxDiameterInMm: number;
  isOsteomyelitis: boolean;
  isGhostCharacterInT1w: boolean;
  isOsCuboideum: boolean;
  isOssaCuneiforme: boolean;
  isOssaMetatarsalia: boolean;
  sandersAndFrykbergClassificationType: SandersAndFrykbergClassificationTypeEnum;
  isDifferentialDiagnosisOsteomyelitis: boolean;
  isDifferentialDiagnosisArthrosis: boolean;

  constructor() {
    super();
    this.threeDimensionalLocalization = 'None';
    this.tendonsLocalization = 'None';
    this.isSubordinated = false;
    this.isRetraction = false;
    this.detailType = DetailTypeEnum.None;
    this.detailMaxDiameterInMm = null;
    this.differentialDiagnosis1 = 'None';
    this.differentialDiagnosis2 = 'None';
    this.differentialDiagnosis3 = 'None';
    this.isMoreThanOneLesion = false;
    this.isFreeJointBody = false;
    this.isBonyAvulsion = false;
    this.isIntracorticalEdema = false;
    this.isBoneMarrowEdema = false;
    this.isArticularEffusion = false;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.isSuspicionOf = false;
    this.powerfulHomogeneityType = HomogeneityTypeEnum.None;

    // Effusion
    this.dimensionType = DimensionTypeEnum.None;
    this.qualityType = QualityTypeEnum.None;
    this.isExtravasationArticularEffusion = false;
    this.freeJointBodyDiameterInMm = null;

    // PlantarFasciaDisease
    this.isCentral = false;
    this.isMedial = false;
    this.isLateral = false;
    this.plantarFasciaDiseaseType = PlantarFasciaDiseaseTypeEnum.None;
    this.ruptureType = RuptureTypeEnum.None;
    this.retractionDimensionInMm = null;
    this.isPlantarHeelSpur = false;
    this.isBoneMarrowEdemaOfTheCalcaneus = false;
    this.isThickeningOfTheFascia = false;
    this.isSpindleShaped = false;
    this.isCloseToTheCalcaneus = false;
    this.isT1wIncreasedSignalIntensityTheFascia = false;
    this.isT2wIncreasedSignalIntensityTheFascia = false;
    this.isSurroundingEdemaOrPerifasciitis = false;
    this.isSignalIncreaseOfTheAdjacentMusculature = false;
    this.isHypervascularization = false;
    this.isDistalLocalization = false;
    this.isProximalLocalization = false;
    this.isNode = false;
    this.nodeType = NodeTypeEnum.None;
    this.isFibroma = false;
    this.fibromaMaxDiameterInMm = null;
    this.isHeterogeneousSignalIntensityInT1wOrT2w = false;
    this.isLowSignalThrombusInDeepPlantarVein = false;
    this.isSurroundingInflammatoryReaction = false;
    this.isDilatedVein = false;
    this.isLowSignalThrombusWithFillingDefect = false;
    this.isPerivascularEdema = false;
    this.isMAbductorDigitiMinimi = false;
    this.isMFlexorDigitorumBrevis = false;
    this.isMQuadratusPlantae = false;
    this.muscleChangeType = MuscleChangeTypeEnum.None;
    this.isLinearIntramedullaryT1wHypointensity = false;

    // DiseasesOfTheMTP
    this.diseasesOfTheMtpType = DiseasesOfTheMtpTypeEnum.None;
    this.d1Type = D1TypeEnum.None;
    this.halluxValgusAngleInDegrees = null;
    this.intermetatarsalAngleInDegrees = null;
    this.isLateralDeviation = false;
    this.isLateralDislocationTheSesamoidBones = false;
    this.isLateralProliferationSesamoidBones = false;
    this.isSubluxationInBigToeMetatarsophalangealJoint = false;
    this.isSynovialEnhancement = false;
    this.isPseudoexostosisMedial = false;
    this.diseasesOfTheMTPLocalizationType = DiseasesOfTheMtpLocalizationTypeEnum.None;
    this.pathologyType = PathologyTypeEnum.None;
    this.isD1 = false;
    this.isD2 = false;
    this.isD3 = false;
    this.isD4 = false;
    this.isD5 = false;
    this.isExpansionUpToCollateralLigaments = false;
    this.isPericapsularFibrosis = false;
    this.isSynovitis = false;
    this.isLuxationMTP = false;
    this.isAdjacentGanglion = false;
    this.adjacentGanglionMaxDiameterInMm = null;

    // Bursitis
    this.isBursaMetatarsophalangealis = false;
    this.isMetatarsalBursa = false;
    this.isBursaIntermetatarsale = false;
    this.isBursaSubcutaneaCalcanea = false;
    this.isBursaRetrocalcaneal = false;
    this.isRetrocalcanealBursa = false;
    this.isBursaSubcutaneaMedialMalleolus = false;
    this.isBursaSubcutaneaLateralMalleolus = false;
    this.maxDiameterBursa = null;
    this.limitationType = LimitationTypeEnum.None;
    this.isBleedingIn = false;
    this.isMortonNovelty = false;

    // SoftTissueTumor
    this.descriptionType = DescriptionTypeEnum.None;
    this.expansionSizeMaxInMm = null;
    this.expansion2ndStageInMm = null;
    this.expansion3rdStageInMm = null;
    this.interdigitalSpaceType = InterdigitalSpaceTypeEnum.None;
    this.isCutisThickening = false;
    this.isPressureCorrosionBone = false;
    this.isDiffusionRestriction = false;
    this.isInTheSepta = false;

    // DiseaseOfTheSynovia
    this.localizationOfTheSynoviaSynovitisType = DiseaseOfTheSynoviaEnum.None;
    this.isIntraarticular = false;
    this.isExtraarticular = false;

    // DiseaseOfTheSynoviaSynovitis
    this.isHyperplasia = false;
    this.isHigherT2wOrPDSignal = false;
    this.isIncreasedCMEnhancement = false;
    this.isBloomingArtifact = false;
    this.isMultilobulated = false;
    this.isSynovialNodulus = false;
    this.isSynovialProliferations = false;
    this.isNecrosis = false;
    this.isFreeJointBodyMoreThanOneLesion = false;
    this.isHaemarthros = false;
    this.isBonyErosionsinsertionSynovialMembrane = false;
    this.synoviaFormType = SynoviaFormTypeEnum.None;
    this.isSynovialNodulusMoreThanOneLesion = false;
    this.isSusceptibilityArtifact = false;
    this.cmEnhancementType = CMEnhancementTypeEnum.None;

    // MuscleLesion
    this.isMuscleLesion = false;
    this.muscleLesionLocalizationType = MuscleLesionLocalizationTypeEnum.None;
    this.classificationType = ClassificationTypeEnum.None;
    this.localizationWithinOfTheMuscleType = LocalizationWithinOfMuscleTypeEnum.None;
    this.isCrossDiameterOfTheRuptureLessThan5Mm = false;
    this.isCrossDiameterOfTheRuptureMoreThan5Mm = false;
    this.retractionInMm = null;
    this.isWavyCourseOfTheFibers = false;
    this.isHematoma = false;
    this.isIntramuscular = false;
    this.isInterfacial = false;
    this.isIntermuscular = false;
    this.ageType = AgeTypeEnum.None;
    this.isFattyDegeneration = false;
    this.isMuscularHypotrophy = false;
    this.isMuscularAtrophy = false;
    this.muscularAtrophyType = MuscularAtrophyTypeEnum.None;
    this.isApophysitis = false;
    this.isFascialLaceration = false;
    this.isMuscleHerniation = false;
    this.isFasciaTear = false;

    // TibialStressSyndromeTSS
    this.distanceOfTheOSGInMm = null;
    this.ccExpansionInMm = null;
    this.maxAxialExpansionInMm = null;
    this.fredericsonStadiumType = FredericsonStadiumTypeEnum.None;

    // CharcotFoot
    this.isPeriarticularlyAccentuated = false;
    this.inTheMetatarsotarsalJoints = false;
    this.isInTheMetatarsophalangealJoints = false;
    this.isBoneMarrowEdemaZone1 = false;
    this.isBoneMarrowEdemaZone2 = false;
    this.isBoneMarrowEdemaZone3 = false;
    this.isBoneMarrowEdemaZone4 = false;
    this.isBoneMarrowEdemaZone5 = false;
    this.isSoftTissueEdema = false;
    this.isMicrofracture = false;
    this.isJointDestruction = false;
    this.isJointDestructionZone1 = false;
    this.isJointDestructionZone2 = false;
    this.isJointDestructionZone3 = false;
    this.isJointDestructionZone4 = false;
    this.isJointDestructionZone5 = false;
    this.isFracture = false;
    this.isOsNavicular = false;
    this.isFragmentation = false;
    this.isLuxation = false;
    this.isOssaMetatarsaliaCranialAndLateral = false;
    this.isBreakInLongitudinalVault = false;
    this.isRockerbottomDeformity = false;
    this.isTalusHeadLowering = false;
    this.isOsNaviculareAfterCranialMedial = false;
    this.isProliferation = false;
    this.isSclerosis = false;
    this.isSubchondralCysts = false;
    this.isLisfrancJoint = false;
    this.isFreeJointBodies = false;
    this.isUlcerationOfTheSoleOfTheFoot = false;
    this.isSoftTissueInfection = false;
    this.isAbscess = false;
    this.isPhlegmone = false;
    this.abscessMaxDiameterInMm = null;
    this.isOsteomyelitis = false;
    this.isGhostCharacterInT1w = false;
    this.isOsCuboideum = false;
    this.isOssaCuneiforme = false;
    this.isOssaMetatarsalia = false;
    this.sandersAndFrykbergClassificationType = SandersAndFrykbergClassificationTypeEnum.None;
    this.isDifferentialDiagnosisOsteomyelitis = false;
    this.isDifferentialDiagnosisArthrosis = false;
  }
}
