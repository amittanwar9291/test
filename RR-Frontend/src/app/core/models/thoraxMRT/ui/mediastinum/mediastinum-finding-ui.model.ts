import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import {
  AnomaliesTypeEnum,
  AorticNodesTypeEnum,
  ChronicThromboembolicTypeEnum,
  ContrastEnhancementPatternTypeEnum,
  ContrastEnhancementTypeEnum,
  CurvatureOfInterventricularSeptumTypeEnum,
  CystsTypeEnum,
  DetailsCongenitalVascularRingsTypeEnum,
  DetailsKinkingTypeEnum,
  EsuphagusTypeEnum,
  FocalSignalVoidTypeEnum,
  HeightInRelationTypeEnum,
  HilarLobarNodesTypeEnum,
  HistologyKnownTypeEnum,
  HomogeneityTypeEnum,
  InferiorMediastinalNodesTypeEnum,
  LocalizationWithinVesselTypeEnum,
  LymphNodeStationsTypeEnum,
  LymphNodesTypeEnum,
  MediastinumCalcificationTypeEnum,
  MediastinumDifferentialDiagnosisTypeEnum,
  MediastinumFindingTypeEnum,
  MediastinumGrowthPatternsTypeEnum,
  MediastinumLimitationTypeEnum,
  MediastinumLocalizationTypeEnum,
  MediastinumTypeEnum,
  PathologyTypeEnum,
  ProgressMonitoringTypeEnum,
  ShapeTypeEnum,
  SuperiorMediastinalNodesTypeEnum,
  TracheaTypeEnum
} from '@enums/thoraxMRT/mediastinum';
import { AorticArch } from '@models/angiographyMRT/ui/localizers/aortic-arch.model';
import { FindingBase } from '@models/shared/finding/finding.base';
import { LungsModel } from '@models/thoraxCT/ui/thorax/lungs.model';

export class MediastinumFindingUiModel extends FindingBase {
  findingType: MediastinumFindingTypeEnum;

  // commmon
  isCalcification: boolean;
  calcificationType: MediastinumCalcificationTypeEnum;
  isThrombus: boolean;
  isSubordinated: boolean;
  isPericardium: boolean;
  isSuspected: boolean;
  diagnosisType1: MediastinumDifferentialDiagnosisTypeEnum;
  diagnosisType2: MediastinumDifferentialDiagnosisTypeEnum;
  diagnosisType3: MediastinumDifferentialDiagnosisTypeEnum;
  diagnosisType4: MediastinumDifferentialDiagnosisTypeEnum;
  isPoststenoticDilatation: boolean;
  shapeType: ShapeTypeEnum;

  // Mediastinum
  mediastinumType: MediastinumTypeEnum;
  directionType: LocationTypeEnum;

  // LymphNodes
  lymphNodesType: LymphNodesTypeEnum;
  diameterOfTheLargestLnSadInMm: number;
  lymphNodeStationsType: LymphNodeStationsTypeEnum;
  supraclavicularLowCervicalAndJugular: LocationTypeEnum;
  paratrachealNodesType: SuperiorMediastinalNodesTypeEnum;
  aorticNodesType: AorticNodesTypeEnum;
  inferiorMediastinalNodesType: InferiorMediastinalNodesTypeEnum;
  hilarLobarNodesType: HilarLobarNodesTypeEnum;
  lymphNodesLocalizationType: LocationTypeEnum;
  sadInMm: number;
  isSuspicious: boolean;
  isPreservedFattyHilum: boolean;
  isReferenceLesionAccToRECIST: boolean;
  isConfluent: boolean;

  // CardiovascularPulmonaryArteries
  lungsLocation: LungsModel;
  localizationWithinVesselType: LocalizationWithinVesselTypeEnum;
  isPoloMintSign: boolean;
  isSaddlePulmonaryEmbolism: boolean;
  quantitativeWideCentralPulmonaryArteryInMm: number;
  quantitativeRVLVDiameterQuotient: number;
  quantitativeRVLVVolumeQuotient: number;
  quantitativePAAADiameterQuotient: number;
  curvatureOfInterventricularSeptumType: CurvatureOfInterventricularSeptumTypeEnum;
  isRemodeling: boolean;
  isIntravascularBandsAndNets: boolean;
  isPouchDefect: boolean;
  isAbruptCaliberChange: boolean;
  isStrictures: boolean;
  isCollateralSupply: boolean;
  isMosaicPerfusion: boolean;
  chronicThromboembolicType: ChronicThromboembolicTypeEnum;

  // CardiovascularHeart
  isRight: boolean;
  isRightAtriumEnlargement: boolean;
  isRightEnlargementOfTheVentricle: boolean;
  isRightMyocardialThickening: boolean;
  isVenousContrastAgentReflux: boolean;
  isRightThrombus: boolean;
  isLeft: boolean;
  isLeftAtriumEnlargement: boolean;
  isLeftEnlargementOfTheVentricle: boolean;
  isLeftMyocardialThickening: boolean;
  isLeftThrombus: boolean;
  isEffusion: boolean;
  effusionWidthMaxInMm: number;
  isMass: boolean;
  massDiameterMaxInMm: number;
  isPneumopericardium: boolean;
  isPericarditisConstrictiva: boolean;
  isFocalSignalVoids: boolean;
  focalSignalVoidsType: FocalSignalVoidTypeEnum;

  // Cardio Thoracic Aorta
  localizationType: AorticArch;
  pathologyType: PathologyTypeEnum;
  anomaliesType: AnomaliesTypeEnum;
  isHypoplasticAorticArch: boolean;
  isPostoperativeResidualStenosis: boolean;
  detailsKinkingType: DetailsKinkingTypeEnum;
  detailsCongenitalVascularRingsType: DetailsCongenitalVascularRingsTypeEnum;
  isWithKommerellSDiverticulum: boolean;
  isAorticEctasia: boolean;
  expansionMaxAxialDiameter: number;
  expansionCraniocaudalInMm: number;
  vesselDiameterProximalOfTheAneurysmInMm: number;
  progressMonitoringType: ProgressMonitoringTypeEnum;
  isEccentricPartialThrombosis: boolean;
  maxAxialDiameterPreliminaryExaminationInMm: number;

  // mass
  descriptionType: DescriptionTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  isUpperMediastinum: boolean;
  isLowerMediastinum: boolean;
  isAnteriorMediastinum: boolean;
  isMiddleMediastinum: boolean;
  isPosteriorMediastinum: boolean;
  limitationType: MediastinumLimitationTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  t1wSignalType: number;
  t2wSignalType: number;
  isDiffusionRestriction: boolean;
  isFatIsointens: boolean;
  isLiquidIsointens: boolean;
  expansionSizeInMm: number;
  expansionSecondPlaneInMm: number;
  expansionThirdPlaneInMm: number;
  isFat: boolean;
  isMicroscopic: boolean;
  isMacroscopic: boolean;
  isCysts: boolean;
  isCapsule: boolean;
  isFibrousSepta: boolean;
  isLiquidFatLevel: boolean;
  isToothBone: boolean;
  isNecrosis: boolean;
  isHemorrhageBloodDegradation: boolean;
  cystsType: CystsTypeEnum;
  mediastinumGrowthPatternsType: MediastinumGrowthPatternsTypeEnum;
  isPleura: boolean;
  isBone: boolean;
  isScaloppedThinnedPedicle: boolean;
  isNeuroforaminalWidening: boolean;
  isPressureErosionRib: boolean;
  isLocoregionalOsteolysis: boolean;
  contrastEnhancementType: ContrastEnhancementTypeEnum;
  noCMEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementPatternType: ContrastEnhancementPatternTypeEnum;
  caudalExtensionInMmDiagnosis01: number;
  caudalExtensionInMmDiagnosis02: number;
  caudalExtensionInMmDiagnosis03: number;

  // Esuphagus
  esuphagusType: EsuphagusTypeEnum;
  esuphagusLocalizationType: MediastinumLocalizationTypeEnum;
  maxWallDiameterInMm: number;
  maxExpansionCraniocaudalInMm: number;
  isUpsideDownStomach: boolean;

  // Trachea
  tracheaType: TracheaTypeEnum;
  tracheaShiftType: LocationTypeEnum;
  heightInRelationType: HeightInRelationTypeEnum;
  minDiameterAxial: number;
  minDiameterCraniocaudal: number;
  isTracheomalaciaCollapseInExpiration: boolean;
  massDetailsMaxDiameterInMm: number;

  constructor() {
    super();

    this.findingType = MediastinumFindingTypeEnum.None;

    // commmon
    this.isCalcification = false;
    this.calcificationType = MediastinumCalcificationTypeEnum.None;
    this.isThrombus = false;
    this.isSubordinated = false;
    this.isPericardium = false;
    this.isSuspected = false;
    this.diagnosisType1 = MediastinumDifferentialDiagnosisTypeEnum.None;
    this.diagnosisType2 = MediastinumDifferentialDiagnosisTypeEnum.None;
    this.diagnosisType3 = MediastinumDifferentialDiagnosisTypeEnum.None;
    this.diagnosisType4 = MediastinumDifferentialDiagnosisTypeEnum.None;
    this.isPoststenoticDilatation = false;
    this.shapeType = ShapeTypeEnum.None;

    // Mediastinum
    this.mediastinumType = MediastinumTypeEnum.None;
    this.directionType = LocationTypeEnum.None;

    // LymphNodes
    this.lymphNodesType = LymphNodesTypeEnum.None;
    this.diameterOfTheLargestLnSadInMm = null;
    this.lymphNodeStationsType = LymphNodeStationsTypeEnum.None;
    this.supraclavicularLowCervicalAndJugular = LocationTypeEnum.None;
    this.paratrachealNodesType = SuperiorMediastinalNodesTypeEnum.None;
    this.aorticNodesType = AorticNodesTypeEnum.None;
    this.inferiorMediastinalNodesType = InferiorMediastinalNodesTypeEnum.None;
    this.hilarLobarNodesType = HilarLobarNodesTypeEnum.None;
    this.lymphNodesLocalizationType = LocationTypeEnum.None;
    this.sadInMm = null;
    this.isSuspicious = false;
    this.isPreservedFattyHilum = false;
    this.isReferenceLesionAccToRECIST = false;
    this.isConfluent = false;

    // CardiovascularPulmonaryArteries
    this.lungsLocation = new LungsModel();
    this.localizationWithinVesselType = LocalizationWithinVesselTypeEnum.None;
    this.isPoloMintSign = false;
    this.isSaddlePulmonaryEmbolism = false;
    this.quantitativeWideCentralPulmonaryArteryInMm = null;
    this.quantitativeRVLVDiameterQuotient = null;
    this.quantitativeRVLVVolumeQuotient = null;
    this.quantitativePAAADiameterQuotient = null;
    this.curvatureOfInterventricularSeptumType = CurvatureOfInterventricularSeptumTypeEnum.None;
    this.isRemodeling = false;
    this.isIntravascularBandsAndNets = false;
    this.isPouchDefect = false;
    this.isAbruptCaliberChange = false;
    this.isStrictures = false;
    this.isCollateralSupply = false;
    this.isMosaicPerfusion = false;
    this.chronicThromboembolicType = ChronicThromboembolicTypeEnum.None;

    // CardiovascularHeart
    this.isRight = false;
    this.isRightAtriumEnlargement = false;
    this.isRightEnlargementOfTheVentricle = false;
    this.isRightMyocardialThickening = false;
    this.isVenousContrastAgentReflux = false;
    this.isRightThrombus = false;
    this.isLeft = false;
    this.isLeftAtriumEnlargement = false;
    this.isLeftEnlargementOfTheVentricle = false;
    this.isLeftMyocardialThickening = false;
    this.isLeftThrombus = false;
    this.isEffusion = false;
    this.effusionWidthMaxInMm = null;
    this.isMass = false;
    this.massDiameterMaxInMm = null;
    this.isPneumopericardium = false;
    this.isPericarditisConstrictiva = false;
    this.isFocalSignalVoids = false;
    this.focalSignalVoidsType = FocalSignalVoidTypeEnum.None;

    // Cardio Thoracic Aorta
    this.localizationType = new AorticArch();
    this.pathologyType = PathologyTypeEnum.None;
    this.anomaliesType = AnomaliesTypeEnum.None;
    this.isHypoplasticAorticArch = false;
    this.isPostoperativeResidualStenosis = false;
    this.detailsKinkingType = DetailsKinkingTypeEnum.None;
    this.detailsCongenitalVascularRingsType = DetailsCongenitalVascularRingsTypeEnum.None;
    this.isWithKommerellSDiverticulum = false;
    this.isAorticEctasia = false;
    this.expansionMaxAxialDiameter = null;
    this.expansionCraniocaudalInMm = null;
    this.vesselDiameterProximalOfTheAneurysmInMm = null;
    this.progressMonitoringType = ProgressMonitoringTypeEnum.None;
    this.isEccentricPartialThrombosis = false;
    this.maxAxialDiameterPreliminaryExaminationInMm = null;

    // Mass
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.descriptionType = DescriptionTypeEnum.None;
    this.isUpperMediastinum = false;
    this.isLowerMediastinum = false;
    this.isAnteriorMediastinum = false;
    this.isMiddleMediastinum = false;
    this.isPosteriorMediastinum = false;
    this.limitationType = MediastinumLimitationTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.t1wSignalType = 0;
    this.t2wSignalType = 0;
    this.isDiffusionRestriction = false;
    this.isFatIsointens = false;
    this.isLiquidIsointens = false;
    this.expansionSizeInMm = null;
    this.expansionSecondPlaneInMm = null;
    this.expansionThirdPlaneInMm = null;
    this.isFat = false;
    this.isMicroscopic = false;
    this.isMacroscopic = false;
    this.isCysts = false;
    this.isCapsule = false;
    this.isFibrousSepta = false;
    this.isLiquidFatLevel = false;
    this.isToothBone = false;
    this.isNecrosis = false;
    this.isHemorrhageBloodDegradation = false;
    this.cystsType = CystsTypeEnum.None;
    this.mediastinumGrowthPatternsType = MediastinumGrowthPatternsTypeEnum.None;
    this.isPleura = false;
    this.isBone = false;
    this.isScaloppedThinnedPedicle = false;
    this.isNeuroforaminalWidening = false;
    this.isPressureErosionRib = false;
    this.isLocoregionalOsteolysis = false;
    this.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
    this.noCMEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementPatternType = ContrastEnhancementPatternTypeEnum.None;
    this.caudalExtensionInMmDiagnosis01 = null;
    this.caudalExtensionInMmDiagnosis02 = null;
    this.caudalExtensionInMmDiagnosis03 = null;

    // Esuphagus
    this.esuphagusType = EsuphagusTypeEnum.None;
    this.esuphagusLocalizationType = MediastinumLocalizationTypeEnum.None;
    this.maxWallDiameterInMm = null;
    this.maxExpansionCraniocaudalInMm = null;
    this.isUpsideDownStomach = false;

    // Trachea
    this.tracheaType = TracheaTypeEnum.None;
    this.tracheaShiftType = LocationTypeEnum.None;
    this.heightInRelationType = HeightInRelationTypeEnum.None;
    this.minDiameterAxial = null;
    this.minDiameterCraniocaudal = null;
    this.isTracheomalaciaCollapseInExpiration = false;
    this.massDetailsMaxDiameterInMm = null;
  }
}
