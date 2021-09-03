import { KneeDetails } from '@models/kneeMRT/ui/knee/knee-details-ui.model';
import { KneeDetailsExtended } from '@models/kneeMRT/ui/knee/knee-details-extended-ui.model';
import { FindingBase } from '@models/shared/finding/finding.base';

import {
  AitkenClassificationTypeEnum,
  AvulsionFractureTypeEnum,
  BonesEpiphysealJointDetailsTypeEnum,
  BonesFindingTypeEnum,
  EvaluationFractureTypeEnum,
  FractureDistTypeEnum,
  FractureTypeEnum,
  MetaphysealMultifragmentaryTypeEnum,
  RatingFractureDetailsTypeEnum,
  SimpleLateralMedialFractureTypeEnum,
  ArticularMultipleFractureLinesTypeEnum,
  ArticularOneFractureLineTypeEnum,
  CoronaryFractureTypeEnum,
  FemurArticularTypeEnum,
  FemurExtraarticularTypeEnum,
  FemurPartiallyArticularTypeEnum,
  SimpleFractureTypeEnum,
  WedgeFractureTypeEnum,
  ImpressionTypeEnum,
  MetaphysealOneFragmentTypeEnum,
  SimplyArticulateTypeEnum,
  TibiaArticularTypeEnum,
  TibiaExtraarticularTypeEnum,
  TibiaPartiallyArticularTypeEnum,
  FibulaFractureDetailsTypeEnum,
  BonesLocalizationTypeEnum,
  LimitationTypeEnum,
  HomogeneityTypeEnum,
  CorticalisTypeEnum,
  ContrastEnhancementTypeEnum,
  LocalSpreadTypeEnum,
  BonesClassificationTypeEnum,
  HistologicallySecuredTypeEnum,
  PatellaFractureBTypeEnum,
  PatellaFractureCTypeEnum,
  PatellaFractureDetailsTypeEnum,
  StageTypeEnum,
  DifferentialDiagnosisTypeEnum,
  HorizontalFractureTypeEnum,
  BonesEpiphysealJointTypeEnum,
  BonesDiagnosisType
} from '@enums/kneeMRT/bones';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/kneeMRT/bones/bones-tumor/contrast-enhancement-distribution-type.enum';

export class KneeBonesFindingUiModel extends FindingBase {
  findingType: BonesFindingTypeEnum;

  // Common
  kneeLocation: KneeDetails;
  kneeExtensionLocation: KneeDetailsExtended;
  evaluationFractureType: EvaluationFractureTypeEnum;
  fractureDistType: FractureDistTypeEnum;
  isAvulsionFracture: boolean;
  differentialDiagnosis: BonesDiagnosisType;
  descriptionType: string;

  // fracture-distal-femur
  femurExtraarticularType: FemurExtraarticularTypeEnum;
  simpleFractureType: SimpleFractureTypeEnum;
  wedgeFractureType: WedgeFractureTypeEnum;
  femurPartiallyArticularType: FemurPartiallyArticularTypeEnum;
  simpleLateralFractureType: SimpleLateralMedialFractureTypeEnum;
  simpleMedialFractureType: SimpleLateralMedialFractureTypeEnum;
  coronaryFractureType: CoronaryFractureTypeEnum;
  femurArticularType: FemurArticularTypeEnum;
  articularOneFractureLineType: ArticularOneFractureLineTypeEnum;
  articularMultipleFractureLinesType: ArticularMultipleFractureLinesTypeEnum;

  // fracture-tibia-proximal
  tibiaExtraarticularType: TibiaExtraarticularTypeEnum;
  metaphysealOneFragmentType: MetaphysealOneFragmentTypeEnum;
  metaphysealMultifragmentaryType: MetaphysealMultifragmentaryTypeEnum;
  ratingFractureDetailsType: RatingFractureDetailsTypeEnum;
  avulsionFractureType: AvulsionFractureTypeEnum;
  tibiaPartiallyArticularType: TibiaPartiallyArticularTypeEnum;
  fissionFractureType: FractureTypeEnum;
  lateralImpressionFractureDepthInMm: number;
  impressionType: ImpressionTypeEnum;
  fissionAndImpressionFractureType: FractureTypeEnum;
  medialImpressionFractureDepthInMm: number;
  tibiaArticularType: TibiaArticularTypeEnum;
  obliqueImpressionFractureDepthInMm: number;
  simplyArticulateType: SimplyArticulateTypeEnum;
  multifragmentaryFractureType: FractureTypeEnum;

  // fibula-proximal
  fibulaFractureDetailsType: FibulaFractureDetailsTypeEnum;
  isFractureOlderConsolidated: boolean;
  isSuspicionOf: boolean;

  // fracture-patella
  patellaFractureBType: PatellaFractureBTypeEnum;
  patellaFractureCType: PatellaFractureCTypeEnum;
  patellaFractureMedialDetailsType: PatellaFractureDetailsTypeEnum;
  patellaFractureLateralDetailsType: PatellaFractureDetailsTypeEnum;
  horizontalFractureType: HorizontalFractureTypeEnum;

  // bone-marrow-edema
  distributionType: string;
  isSoftTissueEdema: boolean;
  isThickenedAndEdematizedSynovial: boolean;
  isSubchondralFracture: boolean;
  isTransientOsteoporosis: boolean;

  // bones-tumor
  differentialDiagnosis1: string;
  differentialDiagnosis2: string;
  differentialDiagnosis3: string;
  expansionAxialMaxInMm: number;
  expansion2ndPlaneAxialInMm: number;
  expansionCraniocaudalInMm: number;
  localizationType: BonesLocalizationTypeEnum;

  limitationType: LimitationTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  corticalisType: CorticalisTypeEnum;
  signalT1w: number;
  signalT2w: number;
  contrastEnhancementType: ContrastEnhancementTypeEnum;
  contrastHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  isContrastInSepta: boolean;
  isSeptetedOrChambered: boolean;
  isLiquidLevel: boolean;
  isCalcification: boolean;
  isCalcificationCentral: boolean;
  isCalcificationDiffuselyDistributed: boolean;
  isNidus: boolean;
  isOsteoidMatrix: boolean;
  isGreaseSignal: boolean;
  isNidusT2wHyperintensity: boolean;
  isCapT2wHyperintensity: boolean;

  isPeriostalReaction: boolean;
  isPeriostealSpur: boolean;
  isCartilageCap: boolean;
  isSclerosingRim: boolean;
  isRimLowSignal: boolean;
  isFormLobbied: boolean;
  isFormRoundly: boolean;
  isFormMaplikeConfiguration: boolean;
  isFormBroadBased: boolean;
  isFormStored: boolean;
  isFormOrientation: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isExpansive: boolean;
  isSclerotic: boolean;
  isInfiltrationSoftTissue: boolean;
  isInfiltrationBoundary: boolean;
  isGrowthPatternPathologicalFracture: boolean;
  isReactionSoftTissueEdema: boolean;
  isReactionBoneMarrowEdema: boolean;
  isPerifocalSclerosis: boolean;
  isSurroundingInflammatoryReaction: boolean;
  isAnotherLesion: boolean;
  isWithinThePrimarilyAffectedBone: boolean;
  isStagingPathologicalFracture: boolean;
  localSpreadType: LocalSpreadTypeEnum;
  classificationType: BonesClassificationTypeEnum;
  isHistologicallySecured: boolean;
  histologicallySecuredType: HistologicallySecuredTypeEnum;
  isDifferentialDiagnosisSubordinate: boolean;

  // osteomyelitis
  isAbscess: boolean;
  abscessDiameter: number;
  isAbscessMoreThanOneLesion: boolean;
  isAbscessPeripheralCMEnhancement: boolean;
  isOsteomyelitisBoneMarrowEdema: boolean;
  isOsteolysis: boolean;
  isSequestrum: boolean;
  sequestrumDiameter: number;
  isSequestrumMoreThanOneLesion: boolean;
  isSequestrumNoCMEnhancement: boolean;
  isCorticalisDestruction: boolean;
  isCorticalisThinning: boolean;
  isPeriostealThickening: boolean;
  isSubperiostealAbscess: boolean;
  subperiostealAbscessDiameter: number;
  isPeriostrupture: boolean;
  isOsteomyelitisSoftTissueEdema: boolean;
  isPeriostealBoneApposition: boolean;
  stageType: StageTypeEnum;
  differentialDiagnosisType: DifferentialDiagnosisTypeEnum;
  isDiagnosisSubordinated: boolean;

  // standard-variant
  isCorticalDesmoidMetaphyseal: boolean;
  isCorticalDesmoidLessThan30MM: boolean;
  isCorticalDesmoidRimSclerosis: boolean;
  isCorticalDesmoidLobbied: boolean;
  isCorticalDesmoidT1wIsointens: boolean;
  isCorticalDesmoidHeterogeneous: boolean;

  // epiphyseal-joint
  bonesEpiphysealJointDetailsType: BonesEpiphysealJointDetailsTypeEnum;
  epiphysealJointType: BonesEpiphysealJointTypeEnum;
  isEpiphysealJointFracture: boolean;
  aitkenClassificationType: AitkenClassificationTypeEnum;
  isBonyBridging: boolean;
  boneDiameterInPercent: number;
  isChronicTrauma: boolean;
  isEpiphysisJointExtension: boolean;
  isIrregularityEpiphysisJoint: boolean;
  isBMEInAdjacentMetaphysis: boolean;

  constructor() {
    super();

    this.findingType = BonesFindingTypeEnum.None;

    // Common
    this.kneeLocation = new KneeDetails();
    this.kneeExtensionLocation = new KneeDetailsExtended();
    this.evaluationFractureType = EvaluationFractureTypeEnum.None;
    this.fractureDistType = FractureDistTypeEnum.None;
    this.isAvulsionFracture = false;
    this.differentialDiagnosis = BonesDiagnosisType.None;
    this.descriptionType = 'None';

    // fracture-distal-femur-finding
    this.femurExtraarticularType = FemurExtraarticularTypeEnum.None;
    this.simpleFractureType = SimpleFractureTypeEnum.None;
    this.wedgeFractureType = WedgeFractureTypeEnum.None;
    this.femurPartiallyArticularType = FemurPartiallyArticularTypeEnum.None;
    this.simpleLateralFractureType = SimpleLateralMedialFractureTypeEnum.None;
    this.simpleMedialFractureType = SimpleLateralMedialFractureTypeEnum.None;
    this.coronaryFractureType = CoronaryFractureTypeEnum.None;
    this.femurArticularType = FemurArticularTypeEnum.None;
    this.articularOneFractureLineType = ArticularOneFractureLineTypeEnum.None;
    this.articularMultipleFractureLinesType = ArticularMultipleFractureLinesTypeEnum.None;

    // fracture-tibia-proximal
    this.tibiaExtraarticularType = TibiaExtraarticularTypeEnum.None;
    this.metaphysealOneFragmentType = MetaphysealOneFragmentTypeEnum.None;
    this.metaphysealMultifragmentaryType = MetaphysealMultifragmentaryTypeEnum.None;
    this.ratingFractureDetailsType = RatingFractureDetailsTypeEnum.None;
    this.avulsionFractureType = AvulsionFractureTypeEnum.None;
    this.tibiaPartiallyArticularType = TibiaPartiallyArticularTypeEnum.None;
    this.fissionFractureType = FractureTypeEnum.None;
    this.lateralImpressionFractureDepthInMm = null;
    this.impressionType = ImpressionTypeEnum.None;
    this.fissionAndImpressionFractureType = FractureTypeEnum.None;
    this.medialImpressionFractureDepthInMm = null;
    this.tibiaArticularType = TibiaArticularTypeEnum.None;
    this.obliqueImpressionFractureDepthInMm = null;
    this.simplyArticulateType = SimplyArticulateTypeEnum.None;
    this.multifragmentaryFractureType = FractureTypeEnum.None;

    // fibula-proximal
    this.fibulaFractureDetailsType = FibulaFractureDetailsTypeEnum.None;
    this.isFractureOlderConsolidated = false;
    this.isSuspicionOf = false;

    // fracture-patella
    this.patellaFractureBType = PatellaFractureBTypeEnum.None;
    this.patellaFractureCType = PatellaFractureCTypeEnum.None;
    this.patellaFractureMedialDetailsType = PatellaFractureDetailsTypeEnum.None;
    this.patellaFractureLateralDetailsType = PatellaFractureDetailsTypeEnum.None;
    this.horizontalFractureType = HorizontalFractureTypeEnum.None;

    // bone-marrow-edema
    this.distributionType = 'None';
    this.isSoftTissueEdema = false;
    this.isThickenedAndEdematizedSynovial = false;
    this.isSubchondralFracture = false;
    this.isTransientOsteoporosis = false;

    // bones-tumor
    this.differentialDiagnosis1 = 'None';
    this.differentialDiagnosis2 = 'None';
    this.differentialDiagnosis3 = 'None';
    this.expansionAxialMaxInMm = null;
    this.expansion2ndPlaneAxialInMm = null;
    this.expansionCraniocaudalInMm = null;
    this.localizationType = BonesLocalizationTypeEnum.None;

    this.limitationType = LimitationTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.corticalisType = CorticalisTypeEnum.None;
    this.signalT1w = 0;
    this.signalT2w = 0;
    this.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
    this.contrastHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.isContrastInSepta = false;
    this.isSeptetedOrChambered = false;
    this.isLiquidLevel = false;
    this.isCalcification = false;
    this.isCalcificationCentral = false;
    this.isCalcificationDiffuselyDistributed = false;
    this.isNidus = false;
    this.isOsteoidMatrix = false;
    this.isGreaseSignal = false;
    this.isNidusT2wHyperintensity = false;
    this.isCapT2wHyperintensity = false;

    this.isPeriostalReaction = false;
    this.isPeriostealSpur = false;
    this.isCartilageCap = false;
    this.isSclerosingRim = false;
    this.isRimLowSignal = false;
    this.isFormLobbied = false;
    this.isFormRoundly = false;
    this.isFormMaplikeConfiguration = false;
    this.isFormBroadBased = false;
    this.isFormStored = false;
    this.isFormOrientation = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isExpansive = false;
    this.isSclerotic = false;
    this.isInfiltrationSoftTissue = false;
    this.isInfiltrationBoundary = false;
    this.isGrowthPatternPathologicalFracture = false;
    this.isReactionSoftTissueEdema = false;
    this.isReactionBoneMarrowEdema = false;
    this.isPerifocalSclerosis = false;
    this.isSurroundingInflammatoryReaction = false;
    this.isAnotherLesion = false;
    this.isWithinThePrimarilyAffectedBone = false;
    this.isStagingPathologicalFracture = false;
    this.localSpreadType = LocalSpreadTypeEnum.None;
    this.classificationType = BonesClassificationTypeEnum.None;
    this.isHistologicallySecured = false;
    this.histologicallySecuredType = HistologicallySecuredTypeEnum.None;
    this.isDifferentialDiagnosisSubordinate = false;

    // osteomyelitis
    this.isAbscess = false;
    this.abscessDiameter = null;
    this.isAbscessMoreThanOneLesion = false;
    this.isAbscessPeripheralCMEnhancement = false;
    this.isOsteomyelitisBoneMarrowEdema = false;
    this.isOsteolysis = false;
    this.isSequestrum = false;
    this.sequestrumDiameter = null;
    this.isSequestrumMoreThanOneLesion = false;
    this.isSequestrumNoCMEnhancement = false;
    this.isCorticalisDestruction = false;
    this.isCorticalisThinning = false;
    this.isPeriostealThickening = false;
    this.isSubperiostealAbscess = false;
    this.subperiostealAbscessDiameter = null;
    this.isPeriostrupture = false;
    this.isOsteomyelitisSoftTissueEdema = false;
    this.isPeriostealBoneApposition = false;
    this.stageType = StageTypeEnum.None;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
    this.isDiagnosisSubordinated = false;

    // standard-variant
    this.isCorticalDesmoidMetaphyseal = false;
    this.isCorticalDesmoidLessThan30MM = false;
    this.isCorticalDesmoidRimSclerosis = false;
    this.isCorticalDesmoidLobbied = false;
    this.isCorticalDesmoidT1wIsointens = false;
    this.isCorticalDesmoidHeterogeneous = false;

    // epiphyseal-joint
    this.bonesEpiphysealJointDetailsType = BonesEpiphysealJointDetailsTypeEnum.None;
    this.epiphysealJointType = BonesEpiphysealJointTypeEnum.None;
    this.isEpiphysealJointFracture = false;
    this.aitkenClassificationType = AitkenClassificationTypeEnum.None;
    this.isBonyBridging = false;
    this.boneDiameterInPercent = null;
    this.isChronicTrauma = false;
    this.isEpiphysisJointExtension = false;
    this.isIrregularityEpiphysisJoint = false;
    this.isBMEInAdjacentMetaphysis = false;
  }
}
