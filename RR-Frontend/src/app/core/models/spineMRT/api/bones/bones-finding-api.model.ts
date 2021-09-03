import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import {
  AxisArcTypeEnum,
  BonesFindingTypeEnum,
  C0StabilityTypeEnum,
  C1c2FractureTypeEnum,
  C1ToC2FractureTypeEnum,
  C2FractureTypeEnum,
  C3FractureFormTypeEnum,
  C3FractureTypeEnum,
  ClassificationArcusVertebraeInjuryTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  CorticalisTypeEnum,
  DensityTypeEnum,
  DifferentialDiagnosisTypeEnum,
  GehweilerTypeEnum,
  HistologySecuredTypeEnum,
  HomogeneityTypeEnum,
  InfiltrationPatternTypeEnum,
  LimitationTypeEnum,
  LocalizationSagittalTypeEnum,
  LocalizationSideTypeEnum,
  LocalizationVertebralArchTypeEnum,
  NoSpecTypeEnum,
  OsCoccygisFractureTypeEnum,
  OsSacrumFractureFormTypeEnum,
  OsSacrumFractureTypeEnum,
  RotationOrTranslationTypeEnum,
  ShapeTypeEnum,
  StabilityTypeEnum,
  ValuationOfFractureTypeEnum
} from '@enums/spineMRT/bones';
import { BonesDiagnosisTypeEnum } from '@enums/spineMRT/bones/bones-diagnosis-type.enum';
import { CmEnhancementFormTypeEnum } from '@enums/spineMRT/bones/tumor-focal/cm-enhancement-form-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class BonesFindingApiModel extends FindingBase {
  findingType: BonesFindingTypeEnum;
  descriptionType: string;
  spineLocation: string;
  spineLocation2: string;
  isSecondary: boolean;
  differentialDiagnosis01: BonesDiagnosisTypeEnum;
  isPathologicFracture: boolean;
  differentialDiagnosis02: BonesDiagnosisTypeEnum;

  // FRACTURE_C0
  fractureStabilityType: C0StabilityTypeEnum;
  rotationOrTranslationType: RotationOrTranslationTypeEnum;
  rotation: number;
  translation: number;

  // FRACTURE_C1
  gehweilerType: GehweilerTypeEnum;
  sideType: LocationTypeEnum;
  isRightVertebralArteryDetectable: boolean;
  isLeftVertebralArteryDetectable: boolean;

  // FRACTURE_C2
  c1C2FractureType: C1c2FractureTypeEnum;
  c2FractureType: C2FractureTypeEnum;
  densityType: DensityTypeEnum;
  axisArcType: AxisArcTypeEnum;
  isStability: boolean;
  stabilityType: StabilityTypeEnum;
  c1ToC2FractureType: C1ToC2FractureTypeEnum;

  // FRACTURE_C3
  c3FractureType: C3FractureTypeEnum;
  valuationOfFractureType: ValuationOfFractureTypeEnum;
  c3FractureFormType: C3FractureFormTypeEnum;
  differentialDiagnosisType: DifferentialDiagnosisTypeEnum;
  isSchmorlNode: boolean;

  // FRACTURE_OS_SACRUM
  osSacrumFractureType: OsSacrumFractureTypeEnum;
  osSacrumFractureFormType: OsSacrumFractureFormTypeEnum;

  // OS_COCCYGIS
  osCoccygisFractureType: OsCoccygisFractureTypeEnum;

  // FRACTURE_COMMON
  noSpecType: NoSpecTypeEnum;

  // VERTREBAL_ARCH_PATHOLOGY
  localizationSideType: LocalizationSideTypeEnum;
  localizationInTheVertebralArchType: LocalizationVertebralArchTypeEnum;
  classificationArcusVertebraeInjuryType: ClassificationArcusVertebraeInjuryTypeEnum;
  isLocationInferiorCortex: boolean;
  isDeepFractureLine: boolean;
  measurementInMmFromTheInferiorCortex: number;
  isObliqueSagittalFractureLine: boolean;

  // POSTTHERAPEUTIC_CHANGE
  isHistoryOfVertebroplastyy: boolean;
  isHistoryOfSpondylodesis: boolean;
  localizationSagittalType: LocalizationSagittalTypeEnum;
  isHistoryOfOsteosynthesis: boolean;
  spineLocation3: string;

  // TUMOR_FOCAL
  size: number;
  isInTheSepta: boolean;
  isDiffuse: boolean;
  isPeriostealSpur: boolean;
  maxThicknessOfCap: number;
  isLowSignalOfTheRim: boolean;
  isSclerotic: boolean;
  isSpinalCanalInfiltration: boolean;
  isPedicleDestruction: boolean;
  isInfiltrationOfAdjacentBones: boolean;
  differentialDiagnosis03: BonesDiagnosisTypeEnum;
  traumaLocation: string;
  mainCharacteristicsDifferentialDiagnosis01: BonesDiagnosisTypeEnum;
  corticalisType: CorticalisTypeEnum;
  isFluidLevel: boolean;
  isCalcification: boolean;
  isPeriostealReaction: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isInfiltrationOfSoftTissue: boolean;
  t1wSignal: string;
  t2wSignal: string;
  homogeneityType: HomogeneityTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  cmEnhancementHomogeneityType: HomogeneityTypeEnum;
  limitationType: LimitationTypeEnum;
  cmEnhancementForm: CmEnhancementFormTypeEnum;
  shapeType: ShapeTypeEnum;
  isSeptaChambered: boolean;
  isExpansive: boolean;
  isNidus: boolean;
  isT2wHyperintense: boolean;
  isCentral: boolean;
  isScleroticMargin: boolean;
  isBoneMarrowEdema: boolean;
  isSoftTissueEdema: boolean;
  isPerifocalSclerosis: boolean;
  isSurroundingInflammatoryReaction: boolean;
  isMoreThanOneLesion: boolean;
  isCartilagecap: boolean;
  isGroundGlassMatrix: boolean;
  isOsteoidMatrix: boolean;
  isFatSignal: boolean;
  isInvolvementAdjacentEndplate: boolean;
  isOriginFromMidline: boolean;
  infiltrationPatternType: InfiltrationPatternTypeEnum;
  signalSTIR: string;
  isCartilagecapT2wHyperintense: boolean;
  isInterruptionEndPlate: boolean;

  // TUMOR_DIFFUSE
  isHistologyProven: boolean;
  histologySecuredType: HistologySecuredTypeEnum;
  isInfiltrationAdjacentSoftTissues: boolean;

  constructor() {
    super();
    this.findingType = BonesFindingTypeEnum.None;
    this.descriptionType = 'None';
    this.spineLocation = 'None';
    this.spineLocation2 = 'None';
    this.isSecondary = false;
    this.differentialDiagnosis01 = BonesDiagnosisTypeEnum.None;
    this.isPathologicFracture = false;
    this.differentialDiagnosis02 = BonesDiagnosisTypeEnum.None;

    // FRACTURE_C0
    this.fractureStabilityType = C0StabilityTypeEnum.None;
    this.rotationOrTranslationType = RotationOrTranslationTypeEnum.None;
    this.rotation = null;
    this.translation = null;

    // FRACTURE_C1
    this.gehweilerType = GehweilerTypeEnum.None;
    this.sideType = LocationTypeEnum.None;
    this.isRightVertebralArteryDetectable = false;
    this.isLeftVertebralArteryDetectable = false;

    // FRACTURE_C2
    this.c1C2FractureType = C1c2FractureTypeEnum.None;
    this.c2FractureType = C2FractureTypeEnum.None;
    this.densityType = DensityTypeEnum.None;
    this.axisArcType = AxisArcTypeEnum.None;
    this.isStability = false;
    this.stabilityType = StabilityTypeEnum.None;
    this.c1ToC2FractureType = C1ToC2FractureTypeEnum.None;

    // FRACTURE_C3
    this.c3FractureType = C3FractureTypeEnum.None;
    this.valuationOfFractureType = ValuationOfFractureTypeEnum.None;
    this.c3FractureFormType = C3FractureFormTypeEnum.None;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
    this.isSchmorlNode = false;

    // FRACTURE_OS_SACRUM
    this.osSacrumFractureType = OsSacrumFractureTypeEnum.None;
    this.osSacrumFractureFormType = OsSacrumFractureFormTypeEnum.None;

    // OS_COCCYGIS
    this.osCoccygisFractureType = OsCoccygisFractureTypeEnum.None;

    // FRACTURE_COMMON
    this.noSpecType = NoSpecTypeEnum.None;

    // VERTREBAL_ARCH_PATHOLOGY
    this.localizationSideType = LocalizationSideTypeEnum.None;
    this.localizationInTheVertebralArchType = LocalizationVertebralArchTypeEnum.None;
    this.classificationArcusVertebraeInjuryType = ClassificationArcusVertebraeInjuryTypeEnum.None;
    this.isLocationInferiorCortex = false;
    this.isDeepFractureLine = false;
    this.measurementInMmFromTheInferiorCortex = null;
    this.isObliqueSagittalFractureLine = false;

    // POSTTHERAPEUTIC_CHANGE
    this.isHistoryOfVertebroplastyy = false;
    this.isHistoryOfSpondylodesis = false;
    this.localizationSagittalType = LocalizationSagittalTypeEnum.None;
    this.isHistoryOfOsteosynthesis = false;
    this.spineLocation3 = 'None';

    // TUMOR_FOCAL
    this.size = null;
    this.isInTheSepta = false;
    this.isDiffuse = false;
    this.isPeriostealSpur = false;
    this.maxThicknessOfCap = null;
    this.isLowSignalOfTheRim = false;
    this.isSclerotic = false;
    this.isSpinalCanalInfiltration = false;
    this.isPedicleDestruction = false;
    this.isInfiltrationOfAdjacentBones = false;
    this.differentialDiagnosis03 = BonesDiagnosisTypeEnum.None;
    this.traumaLocation = 'None';
    this.mainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisTypeEnum.None;
    this.corticalisType = CorticalisTypeEnum.None;
    this.isFluidLevel = false;
    this.isCalcification = false;
    this.isPeriostealReaction = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isInfiltrationOfSoftTissue = false;
    this.t1wSignal = 'None';
    this.t2wSignal = 'None';
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.cmEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.limitationType = LimitationTypeEnum.None;
    this.cmEnhancementForm = CmEnhancementFormTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.isSeptaChambered = false;
    this.isExpansive = false;
    this.isNidus = false;
    this.isT2wHyperintense = false;
    this.isCentral = false;
    this.isScleroticMargin = false;
    this.isBoneMarrowEdema = false;
    this.isSoftTissueEdema = false;
    this.isPerifocalSclerosis = false;
    this.isSurroundingInflammatoryReaction = false;
    this.isMoreThanOneLesion = false;
    this.isCartilagecap = false;
    this.isGroundGlassMatrix = false;
    this.isOsteoidMatrix = false;
    this.isFatSignal = false;
    this.isInvolvementAdjacentEndplate = false;
    this.isOriginFromMidline = false;
    this.infiltrationPatternType = InfiltrationPatternTypeEnum.None;
    this.signalSTIR = 'None';
    this.isCartilagecapT2wHyperintense = false;
    this.isInterruptionEndPlate = false;

    // TUMOR DIFFUSE
    this.isHistologyProven = false;
    this.histologySecuredType = HistologySecuredTypeEnum.None;
    this.isInfiltrationAdjacentSoftTissues = false;
  }
}
