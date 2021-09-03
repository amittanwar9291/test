import { FindingBase } from '@models/shared/finding/finding.base';

import {
  AtypicalTypeEnum,
  LocalizationTypeEnum,
  CoronaryAnomalyTypeEnum,
  DetailsOriginTypeEnum,
  DifferentialDiagnosisEnum,
  DistalTypeEnum,
  DistributionTypeEnum,
  EnlargedLymphNodesTypeEnum,
  ExtensionTypeEnum,
  FindingTypeEnum,
  FormTypeEnum,
  HomogenityTypeEnum,
  InferiorVariantsTypeEnum,
  CmEnhancQuantiTypeEnum,
  LungDiffDiagnosisTypeEnum,
  LungPathologyTypeEnum,
  MediastinalVesselsTypeEnum,
  StenosisTypeEnum,
  PartialAnomalousTypeEnum,
  PeculiarityTypeEnum,
  PericardiumVesselsDiagnosisTypeEnum,
  PericardiumVesselsMarginTypeEnum,
  PulmonaryVariantsTypeEnum,
  RCAOrRCXLADOrLMAEnum,
  SuperiorVariantsTypeEnum,
  VenaCavaTypeEnum,
  OtherFocalTypeEnum,
  BenignTypeEnum,
  DiffuseLiverLesionTypeEnum,
  UnknownTypeEnum,
  GradingMaxTypeEnum,
  EnlargedAbdLymphNodesTypeEnum,
  OssLesionLocalizationTypeEnum,
  LocalizationDetailsEnum,
  OssLesionBenignTypeEnum
} from '@enums/cardioMRT/pericardium-vessels';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

export class PericardiumVesselsFindingApiModel extends FindingBase {
  // Common
  findingType: FindingTypeEnum;
  isSuspicionOf: boolean;
  maximumDiameterAxialInMm: number;
  isPleura: boolean;
  isPericardium: boolean;
  isBone: boolean;
  maximumDiameterInMm: number;

  // Pericardium
  isPericardialEffusion: boolean;
  pericardialEffusionMaxWidth: number;
  isPericarditisCalcification: boolean;
  isPericarditisConstrictiva: boolean;

  // MediastinalVessels
  mediastinalVesselsType: MediastinalVesselsTypeEnum;
  coronaryAnomalyType: CoronaryAnomalyTypeEnum;
  detailsOriginType: DetailsOriginTypeEnum;
  rcaLeftOrLMARightCoronalSinus: RCAOrRCXLADOrLMAEnum;
  distalRCX: RCAOrRCXLADOrLMAEnum;
  distalLAD: RCAOrRCXLADOrLMAEnum;
  distalType: DistalTypeEnum;
  isRCA: boolean;
  isLMA: boolean;
  isLAD: boolean;
  isRCX: boolean;
  isExtension: boolean;
  isStenosis: boolean;
  extensionType: ExtensionTypeEnum;
  isAorticRoot: boolean;
  isAscendingAorta: boolean;
  isAorticArch: boolean;
  isDescendingAorta: boolean;
  aortaMaxDiameterInMm: number;
  stenosisType: StenosisTypeEnum;
  isThrombus: boolean;
  isCentral: boolean;
  isRight: boolean;
  isRightSegmental: boolean;
  isLeft: boolean;
  isLeftSegmental: boolean;
  centralPulmonaryArteryDiameterInMm: number;
  pericardiumVesselsDiagnosisType: PericardiumVesselsDiagnosisTypeEnum;
  pulmonaryVariantsType: PulmonaryVariantsTypeEnum;
  partialAnomalousType: PartialAnomalousTypeEnum;
  venaCavaType: VenaCavaTypeEnum;
  superiorVariantsType: SuperiorVariantsTypeEnum;
  inferiorVariantsType: InferiorVariantsTypeEnum;

  // MediastinumLymphadenopathy
  isCerviSupraParast: boolean;
  isCervicalRight: boolean;
  isCervicalLeft: boolean;
  isMediastinal: boolean;
  isHilaryLobarSegmental: boolean;
  isHilaryRight: boolean;
  isHilaryLeft: boolean;
  isAxilary: boolean;
  isAxilaryRight: boolean;
  isAxilaryLeft: boolean;
  isEnlargedLymphNodes: boolean;
  enlargedLymphNodeShortAxisDiameterInMm: number;
  enlargedLymphNodesType: EnlargedLymphNodesTypeEnum;

  // MediastinumMass
  isAnteriorMediastinum: boolean;
  isMiddleMediastinum: boolean;
  isPosteriorMediastinum: boolean;
  isUpperMediastinum: boolean;
  isLowerMediastinum: boolean;
  pericardiumVesselsMarginType: PericardiumVesselsMarginTypeEnum;
  homogenityType: HomogenityTypeEnum;
  signalT1w: string;
  signalT2w: string;
  isGrease: boolean;
  isInternalChangesCysts: boolean;
  isCalcification: boolean;
  isCapsule: boolean;
  isNecroses: boolean;
  cmEnhancQuantiType: CmEnhancQuantiTypeEnum;
  noHomogenityType: HomogenityTypeEnum;
  differentialDiagnosis01: DifferentialDiagnosisEnum;
  differentialDiagnosis02: DifferentialDiagnosisEnum;
  isSubordinated: boolean;

  // Lung
  lungPathologyType: LungPathologyTypeEnum;
  lungLocalizer: string;
  isLocalizationRight: boolean;
  isLocalizationLeft: boolean;
  localizationRightType: LocalizationTypeEnum;
  localizationLeftType: LocalizationTypeEnum;
  distributionType: DistributionTypeEnum;
  atypicalType: AtypicalTypeEnum;
  peculiarityType: PeculiarityTypeEnum;
  formType: FormTypeEnum;
  massMaximumDiameterAxialInMm: number;
  consolidationDiffDiagnosis: LungDiffDiagnosisTypeEnum;
  atelePulmNoduleDiffDiagnosis: LungDiffDiagnosisTypeEnum;
  isMediastinum: boolean;

  // UpperAbdomen
  isFocalLiverLesions: boolean;
  isDiffuseLiverLesion: boolean;
  focalLiverLesionsType: OtherFocalTypeEnum;
  benignType: BenignTypeEnum;
  isLesionsMoreOneOfFocalLiver: boolean;
  diffuseLiverLesionType: DiffuseLiverLesionTypeEnum;
  isCholecystolithiasis: boolean;
  isSplenomegaly: boolean;
  isHiatalHernia: boolean;
  isMassAdrenalGland: boolean;
  isMassAdrenalGlandRight: boolean;
  isMassAdrenalGlandLeft: boolean;
  isFocalLesionOfKidney: boolean;
  isFocalLesionOfKidneyRight: boolean;
  isFocalLesionOfKidneyLeft: boolean;
  focalLesionOfKidneyType: OtherFocalTypeEnum;
  isFocalLesionOfKidneyBenignCyst: boolean;
  unknownType: UnknownTypeEnum;
  unknownMaxDiameterInMm: number;
  isLesionsMoreOneOfFocalLesionOfKidney: boolean;
  isHydronephrosis: boolean;
  isHydronephrosisRight: boolean;
  isHydronephrosisLeft: boolean;
  gradingMaxType: GradingMaxTypeEnum;
  isEnlargedAbdLymphNodes: boolean;
  enlargedAbdLymphNodesMaxDiameterSADInMm: number;
  enlargedAbdLymphNodesType: EnlargedAbdLymphNodesTypeEnum;

  // Throat
  isStruma: boolean;
  isRetrosternalParts: boolean;
  isNode: boolean;

  // OsseousLesion
  ossLesionLocalizationType: OssLesionLocalizationTypeEnum;
  upperAbdomenSide: LocationTypeEnum;
  ribsLocalizationDetails: LocalizationDetailsEnum;
  vertebralBodyLocalizationDetails: LocalizationDetailsEnum;
  focalClavicleType: OtherFocalTypeEnum;
  ossLesionBenignType: OssLesionBenignTypeEnum;

  constructor() {
    super();

    // Common
    this.findingType = FindingTypeEnum.None;
    this.isSuspicionOf = false;
    this.maximumDiameterAxialInMm = null;
    this.isPleura = false;
    this.isPericardium = false;
    this.isBone = false;
    this.maximumDiameterInMm = null;

    // Pericardium
    this.isPericardialEffusion = false;
    this.pericardialEffusionMaxWidth = null;
    this.isPericarditisCalcification = false;
    this.isPericarditisConstrictiva = false;

    // MediastinalVessels
    this.mediastinalVesselsType = MediastinalVesselsTypeEnum.None;
    this.coronaryAnomalyType = CoronaryAnomalyTypeEnum.None;
    this.detailsOriginType = DetailsOriginTypeEnum.None;
    this.rcaLeftOrLMARightCoronalSinus = RCAOrRCXLADOrLMAEnum.None;
    this.distalRCX = RCAOrRCXLADOrLMAEnum.None;
    this.distalLAD = RCAOrRCXLADOrLMAEnum.None;
    this.distalType = DistalTypeEnum.None;
    this.isRCA = false;
    this.isLMA = false;
    this.isLAD = false;
    this.isRCX = false;
    this.isExtension = false;
    this.isStenosis = false;
    this.extensionType = ExtensionTypeEnum.None;
    this.isAorticRoot = false;
    this.isAscendingAorta = false;
    this.isAorticArch = false;
    this.isDescendingAorta = false;
    this.aortaMaxDiameterInMm = null;
    this.stenosisType = StenosisTypeEnum.None;
    this.isThrombus = false;
    this.isCentral = false;
    this.isRight = false;
    this.isRightSegmental = false;
    this.isLeft = false;
    this.isLeftSegmental = false;
    this.centralPulmonaryArteryDiameterInMm = null;
    this.pericardiumVesselsDiagnosisType = PericardiumVesselsDiagnosisTypeEnum.None;
    this.pulmonaryVariantsType = PulmonaryVariantsTypeEnum.None;
    this.partialAnomalousType = PartialAnomalousTypeEnum.None;
    this.venaCavaType = VenaCavaTypeEnum.None;
    this.superiorVariantsType = SuperiorVariantsTypeEnum.None;
    this.inferiorVariantsType = InferiorVariantsTypeEnum.None;

    // MediastinumLymphadenopathy
    this.isCerviSupraParast = false;
    this.isCervicalRight = false;
    this.isCervicalLeft = false;
    this.isMediastinal = false;
    this.isHilaryLobarSegmental = false;
    this.isHilaryRight = false;
    this.isHilaryLeft = false;
    this.isAxilary = false;
    this.isAxilaryRight = false;
    this.isAxilaryLeft = false;
    this.isEnlargedLymphNodes = false;
    this.enlargedLymphNodeShortAxisDiameterInMm = null;
    this.enlargedLymphNodesType = EnlargedLymphNodesTypeEnum.None;

    // MediastinumMass
    this.isAnteriorMediastinum = false;
    this.isMiddleMediastinum = false;
    this.isPosteriorMediastinum = false;
    this.isUpperMediastinum = false;
    this.isLowerMediastinum = false;
    this.pericardiumVesselsMarginType = PericardiumVesselsMarginTypeEnum.None;
    this.homogenityType = HomogenityTypeEnum.None;
    this.signalT1w = 'None';
    this.signalT2w = 'None';
    this.isGrease = false;
    this.isInternalChangesCysts = false;
    this.isCalcification = false;
    this.isCapsule = false;
    this.isNecroses = false;
    this.cmEnhancQuantiType = CmEnhancQuantiTypeEnum.None;
    this.noHomogenityType = HomogenityTypeEnum.None;
    this.differentialDiagnosis01 = DifferentialDiagnosisEnum.None;
    this.differentialDiagnosis02 = DifferentialDiagnosisEnum.None;
    this.isSubordinated = false;

    // Lung
    this.lungPathologyType = LungPathologyTypeEnum.None;
    this.lungLocalizer = 'None';
    this.isLocalizationRight = false;
    this.isLocalizationLeft = false;
    this.localizationRightType = LocalizationTypeEnum.None;
    this.localizationLeftType = LocalizationTypeEnum.None;
    this.distributionType = DistributionTypeEnum.None;
    this.atypicalType = AtypicalTypeEnum.None;
    this.peculiarityType = PeculiarityTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.massMaximumDiameterAxialInMm = null;
    this.consolidationDiffDiagnosis = LungDiffDiagnosisTypeEnum.None;
    this.atelePulmNoduleDiffDiagnosis = LungDiffDiagnosisTypeEnum.None;
    this.isMediastinum = false;

    // UpperAbdomen
    this.isFocalLiverLesions = false;
    this.isDiffuseLiverLesion = false;
    this.focalLiverLesionsType = OtherFocalTypeEnum.None;
    this.benignType = BenignTypeEnum.None;
    this.isLesionsMoreOneOfFocalLiver = false;
    this.diffuseLiverLesionType = DiffuseLiverLesionTypeEnum.None;
    this.isCholecystolithiasis = false;
    this.isSplenomegaly = false;
    this.isHiatalHernia = false;
    this.isMassAdrenalGland = false;
    this.isMassAdrenalGlandRight = false;
    this.isMassAdrenalGlandLeft = false;
    this.isFocalLesionOfKidney = false;
    this.isFocalLesionOfKidneyRight = false;
    this.isFocalLesionOfKidneyLeft = false;
    this.focalLesionOfKidneyType = OtherFocalTypeEnum.None;
    this.isFocalLesionOfKidneyBenignCyst = false;
    this.unknownType = UnknownTypeEnum.None;
    this.unknownMaxDiameterInMm = null;
    this.isLesionsMoreOneOfFocalLesionOfKidney = false;
    this.isHydronephrosis = false;
    this.isHydronephrosisRight = false;
    this.isHydronephrosisLeft = false;
    this.gradingMaxType = GradingMaxTypeEnum.None;
    this.isEnlargedAbdLymphNodes = false;
    this.enlargedAbdLymphNodesMaxDiameterSADInMm = null;
    this.enlargedAbdLymphNodesType = EnlargedAbdLymphNodesTypeEnum.None;

    // Neck
    this.isStruma = false;
    this.isRetrosternalParts = false;
    this.isNode = false;

    // OsseousLesion
    this.ossLesionLocalizationType = OssLesionLocalizationTypeEnum.None;
    this.upperAbdomenSide = LocationTypeEnum.None;
    this.ribsLocalizationDetails = LocalizationDetailsEnum.None;
    this.vertebralBodyLocalizationDetails = LocalizationDetailsEnum.None;
    this.focalClavicleType = OtherFocalTypeEnum.None;
    this.ossLesionBenignType = OssLesionBenignTypeEnum.None;
  }
}
