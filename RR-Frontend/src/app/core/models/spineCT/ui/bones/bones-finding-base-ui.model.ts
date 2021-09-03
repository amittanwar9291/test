import { BonesFindingTypeEnum } from '@enums/spineCT/bones/bones-finding-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { C0StabilityTypeEnum } from '@enums/spineCT/bones/fracture/c0/c0Stability-type.enum';
import { RotationOrTranslationTypeEnum } from '@enums/spineCT/bones/fracture/c0/rotation-or-translation-type.enum';
import { NoFutherDefinedType } from '@enums/spineCT/bones/fracture/no-futher-defined-type.enum';
import { GehweilerTypeEnum } from '@enums/spineCT/bones/fracture/c1/gehweiler-type.enum';
import { SideTypeEnum } from '@enums/spineCT/bones/side-type-enum';
import { SpecialFractureTypesTypeEnum } from '@enums/spineCT/bones/fracture/c1/special-fracture-types-type.enum';
import { C2FractureLocalizationTypeEnum } from '@enums/spineCT/bones/fracture/c2/c2-fracture-localization-type.enum';
import { C2FractureDetailsTypeEnum } from '@enums/spineCT/bones/fracture/c2/c2-fracture-details-type.enum';
import { BonesDensityTypeEnum } from '@enums/spineCT/bones/fracture/c2/bones-density-type.enum';
import { AxisArcTypeEnum } from '@enums/spineCT/bones/fracture/c2/axis-arc-type.enum';
import { StabilityTypeEnum } from '@enums/spineCT/bones/fracture/c2/stability-type.enum';
import { C1ToC2FractureTypeEnum } from '@enums/spineCT/bones/fracture/c2/c1-to-c2-fracture-type.enum';
import { FractureTypeEnum } from '@enums/spineCT/bones/fracture/fracture-type.enum';
import { CommonSpecialFractureTypesTypeEnum } from '@enums/spineCT/bones/fracture/common-special-fracture-types-type.enum';
import { A0ClassificationTypeEnum } from '@enums/spineCT/bones/fracture/a0Classification-type.enum';
import { A0ClassificationASubtypeEnum } from '@enums/spineCT/bones/fracture/a0Classification-a-subtype.enum';
import { A0ClassificationBSubtypeEnum } from '@enums/spineCT/bones/fracture/a0Classification-b-subtype.enum';
import { GenantClassificationGradeTypeEnum } from '@enums/spineCT/bones/fracture/genant-classification-grade-type.enum';
import { GenantFractureTypeEnum } from '@enums/spineCT/bones/fracture/genant-fracture-type.enum';
import { BonesDiagnosisTypeEnum } from '@enums/spineCT/bones/bones-diagnosis-type.enum';
import { A0ClassificationCSubtypeEnum } from '@enums/spineCT/bones/fracture/a0Classification-c-subtype.enum';
import { OsSacrumDenisClassificationTypeEnum } from '@enums/spineCT/bones/fracture/os-sacrum-denis-classification-type.enum';
import { OsSacrumSpecialFractureTypeEnum } from '@enums/spineCT/bones/fracture/os-sacrum-special-fracture-type.enum';
import { InterventionTypeEnum } from '@enums/spineCT/bones/posttherapeutic-change/intervention-type.enum';
import { DetailsInterventionTypeEnum } from '@enums/spineCT/bones/posttherapeutic-change/details-Intervention-type.enum';
import { ComplicationsTypeEnum } from '@enums/spineCT/bones/posttherapeutic-change/complications-type.enum';
import { LocalizationVertebralArchTypeEnum } from '@enums/spineCT/bones/pathology-of-the-vertebral-arch/localization-vertebral-arch-type.enum';
import { MarginTypeEnum } from '@enums/spineCT/bones/mass-spine/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/spineCT/bones/mass-spine/homogeneity-type-enum';
import { CortexTypeEnum } from '@enums/spineCT/bones/mass-spine/cortex-type.enum';
import { FormTypeEnum } from '@enums/spineCT/bones/mass-spine/form-type.enum';
import { MassSpineDensityTypeEnum } from '@enums/spineCT/bones/mass-spine/mass-spine-density-type.enum';
import { MatrixTypeEnum } from '@enums/spineCT/bones/mass-spine/matrix-type.enum';
import { CalcificationTypeEnum } from '@enums/spineCT/bones/mass-spine/calcification-type.enum';
import { AdjacentSclerosisTypeEnum } from '@enums/spineCT/bones/mass-spine/adjacent-sclerosis-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/spineCT/bones/mass-spine/contrast-enhancement-quantitative-type.enum';
import { SignificantTypeEnum } from '@enums/spineCT/bones/mass-spine/significant-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/spineCT/bones/mass-spine/contrast-enhancement-distribution-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class BonesFindingBaseUiModel extends FindingBase {
  // common

  findingType: BonesFindingTypeEnum;

  isSuspicionOf: boolean;
  isTrailingEdgeParticipation: boolean;
  minVertebralBodyHeightInMm: number;

  // Fracture+

  // fracture_c0

  isFractureOccipitalCondyleSideRight: boolean;
  fractureStabilityRight: C0StabilityTypeEnum;
  rotationOrTranslationRight: RotationOrTranslationTypeEnum;
  rotationRightInDeg: number;
  translationRightInMm: number;
  c0NoFutherDefinedTypeRight: NoFutherDefinedType;
  isFractureOccipitalCondyleSideLeft: boolean;
  fractureStabilityLeft: C0StabilityTypeEnum;
  rotationOrTranslationLeft: RotationOrTranslationTypeEnum;
  rotationLeftInDeg: number;
  translationLeftInMm: number;
  c0NoFutherDefinedTypeLeft: NoFutherDefinedType;

  // fracture_c1

  gehweilerType: GehweilerTypeEnum;
  sideType: SideTypeEnum;
  isVertebralArteryInvolvement: boolean;
  isInvolvementOfRightVertebralArtery: boolean;
  isInvolvementOfLeftVertebralArtery: boolean;
  c1NoFutherDefinedType: NoFutherDefinedType;
  c1SpecialFractureTypesType: SpecialFractureTypesTypeEnum;

  // fracture_c2

  c2FractureLocalizationType: C2FractureLocalizationTypeEnum;
  c2SpecialFractureTypesType: SpecialFractureTypesTypeEnum;
  c2FractureDetailsType: C2FractureDetailsTypeEnum;
  densityType: BonesDensityTypeEnum;
  axisArcType: AxisArcTypeEnum;
  c2NoFutherDefinedType: NoFutherDefinedType;
  stabilityType: StabilityTypeEnum;
  c1ToC2FractureType: C1ToC2FractureTypeEnum;
  atlantodentalIntervalInMm: number;
  isIncreasedAtlantodentalInterval: boolean;

  // fracture_common

  fractureType: FractureTypeEnum;
  cCommonSpecialFractureType: CommonSpecialFractureTypesTypeEnum;
  a0ClassificationType: A0ClassificationTypeEnum;
  a0ClassificationASubtype: A0ClassificationASubtypeEnum;
  a0ClassificationBSubtype: A0ClassificationBSubtypeEnum;
  genantClassificationGradeType: GenantClassificationGradeTypeEnum;
  genantFractureType: GenantFractureTypeEnum;
  isAnteriorColumn: boolean;
  isMiddleColumn: boolean;
  isPosteriorColumn: boolean;
  commonNoFutherDefinedType: NoFutherDefinedType;
  bonesFractureDiagnosisType: BonesDiagnosisTypeEnum;
  isSchmorlNode: boolean;
  isSubordinate: boolean;

  // os_sacrum

  a0OsSacrumClassificationType: A0ClassificationTypeEnum;
  a0OsSacrumClassificationASubtype: A0ClassificationASubtypeEnum;
  a0OsSacrumClassificationBSubtype: A0ClassificationBSubtypeEnum;
  a0OsSacrumClassificationCSubtype: A0ClassificationCSubtypeEnum;
  osSacrumNoFutherDefinedType: NoFutherDefinedType;
  osSacrumDenisClassificationType: OsSacrumDenisClassificationTypeEnum;
  osSacrumSpecialFractureType: OsSacrumSpecialFractureTypeEnum;
  isOsSacrumRight: boolean;
  isOsSacrumLeft: boolean;

  // Coccygis

  a0CoccygisClassificationType: A0ClassificationTypeEnum;
  isWithSignificantDisplacement: boolean;
  isAdjacentSoftTissueInjury: boolean;
  coccygisNoFutherDefinedType: NoFutherDefinedType;

  // PosttherapeuticChange

  interventionType: InterventionTypeEnum;
  spondylodesisSpineLocations: SpineLocation;
  interventionSpineLocations: SpineLocation;
  isSpineSideRight: boolean;
  isSpineSideLeft: boolean;
  intervertebralDiscReplacementSpineLocations: SpineLocation;
  detailsInterventionType: DetailsInterventionTypeEnum;
  complicationsType: ComplicationsTypeEnum;
  isBoneCementLeakage: boolean;
  isCompressionOfAdjacentStructures: boolean;
  isCementEvidenceInParavertebralVeins: boolean;
  isIndicationOfPulmonaryArteryEmbolism: boolean;
  isMaterialFracture: boolean;
  isDislocation: boolean;

  // PathologyOfTheVertebralArch

  vertebraSpineLocations: SpineLocation;
  locationSideType: SideTypeEnum;
  localizationVertebralArchType: LocalizationVertebralArchTypeEnum;
  pathologyOfTheVertebralArchBonesDiagnosis: BonesDiagnosisTypeEnum;

  // MassSpine

  // Characterization I

  bonesDiagnosis1: BonesDiagnosisTypeEnum;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  cortexType: CortexTypeEnum;
  formType: FormTypeEnum;
  massSpineDensityType: MassSpineDensityTypeEnum;
  matrixType: MatrixTypeEnum;

  // Characterization II

  isCalcification: boolean;
  calcificationType: CalcificationTypeEnum;
  isSclerosis: boolean;
  isSepta: boolean;
  isNidus: boolean;
  isPolkaDotSign: boolean;
  isIntralesionalFat: boolean;
  isCystic: boolean;
  isGroundGlassAspect: boolean;
  isLiquidLevel: boolean;
  isSwelling: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isPermeativeGrowthPattern: boolean;
  isMarginalSclerosis: boolean;
  isGeographicAppearance: boolean;
  isPedunculateGrowingAwayFromNearbyJoint: boolean;
  isSubchondral: boolean;
  isInfiltrationOfAdjacentSoftTissues: boolean;
  isAdjacentSclerosis: boolean;
  adjacentSclerosisType: AdjacentSclerosisTypeEnum;
  isInterruptionOfEndPlate: boolean;
  isOsteoproliferativeReaction: boolean;
  isBoneApposition: boolean;
  isEdgrenVainoSign: boolean;
  isExtensiveVertebralHemangioma: boolean;
  isPeriostealReaction: boolean;
  isRemodelling: boolean;
  isMultilayered: boolean;
  isSunburst: boolean;
  isCodmanTriangle: boolean;
  isPathologicFracture: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  significantType: SignificantTypeEnum;
  contrastEnhancementDistribution: ContrastEnhancementDistributionTypeEnum;

  // Differential diagnosis

  massSpineDD1: BonesDiagnosisTypeEnum;
  isDD1SuspicionOf: boolean;
  massSpineDD2: BonesDiagnosisTypeEnum;
  isDD2Subordinate: boolean;
  massSpineDD3: BonesDiagnosisTypeEnum;
  isAbove1LesionSameEntity: boolean;

  constructor() {
    super();

    // common

    this.findingType = BonesFindingTypeEnum.None;
    this.isSuspicionOf = false;
    this.isTrailingEdgeParticipation = false;
    this.minVertebralBodyHeightInMm = null;

    // Fracture+

    // fracture_c0

    this.isFractureOccipitalCondyleSideRight = false;
    this.fractureStabilityRight = C0StabilityTypeEnum.None;
    this.rotationOrTranslationRight = RotationOrTranslationTypeEnum.None;
    this.rotationRightInDeg = null;
    this.translationRightInMm = null;
    this.c0NoFutherDefinedTypeRight = NoFutherDefinedType.None;
    this.isFractureOccipitalCondyleSideLeft = false;
    this.fractureStabilityLeft = C0StabilityTypeEnum.None;
    this.rotationOrTranslationLeft = RotationOrTranslationTypeEnum.None;
    this.rotationLeftInDeg = null;
    this.translationLeftInMm = null;
    this.c0NoFutherDefinedTypeLeft = NoFutherDefinedType.None;

    // fracture_c1

    this.gehweilerType = GehweilerTypeEnum.None;
    this.sideType = SideTypeEnum.None;
    this.isVertebralArteryInvolvement = false;
    this.isInvolvementOfRightVertebralArtery = false;
    this.isInvolvementOfLeftVertebralArtery = false;
    this.c1NoFutherDefinedType = NoFutherDefinedType.None;
    this.c1SpecialFractureTypesType = SpecialFractureTypesTypeEnum.None;

    // fracture_c2

    this.c2FractureLocalizationType = C2FractureLocalizationTypeEnum.None;
    this.c2SpecialFractureTypesType = SpecialFractureTypesTypeEnum.None;
    this.c2FractureDetailsType = C2FractureDetailsTypeEnum.None;
    this.densityType = BonesDensityTypeEnum.None;
    this.axisArcType = AxisArcTypeEnum.None;
    this.c2NoFutherDefinedType = NoFutherDefinedType.None;
    this.stabilityType = StabilityTypeEnum.None;
    this.c1ToC2FractureType = C1ToC2FractureTypeEnum.None;
    this.atlantodentalIntervalInMm = null;
    this.isIncreasedAtlantodentalInterval = false;

    // fracture_common

    this.fractureType = FractureTypeEnum.None;
    this.cCommonSpecialFractureType = CommonSpecialFractureTypesTypeEnum.None;
    this.a0ClassificationType = A0ClassificationTypeEnum.None;
    this.a0ClassificationASubtype = A0ClassificationASubtypeEnum.None;
    this.a0ClassificationBSubtype = A0ClassificationBSubtypeEnum.None;
    this.genantClassificationGradeType = GenantClassificationGradeTypeEnum.None;
    this.genantFractureType = GenantFractureTypeEnum.None;
    this.isAnteriorColumn = false;
    this.isMiddleColumn = false;
    this.isPosteriorColumn = false;
    this.commonNoFutherDefinedType = NoFutherDefinedType.None;
    this.bonesFractureDiagnosisType = BonesDiagnosisTypeEnum.None;
    this.isSchmorlNode = false;
    this.isSubordinate = false;

    // os_sacrum

    this.a0OsSacrumClassificationType = A0ClassificationTypeEnum.None;
    this.a0OsSacrumClassificationASubtype = A0ClassificationASubtypeEnum.None;
    this.a0OsSacrumClassificationBSubtype = A0ClassificationBSubtypeEnum.None;
    this.a0OsSacrumClassificationCSubtype = A0ClassificationCSubtypeEnum.None;
    this.osSacrumNoFutherDefinedType = NoFutherDefinedType.None;
    this.osSacrumDenisClassificationType = OsSacrumDenisClassificationTypeEnum.None;
    this.osSacrumSpecialFractureType = OsSacrumSpecialFractureTypeEnum.None;
    this.isOsSacrumRight = false;
    this.isOsSacrumLeft = false;

    // Coccygis

    this.a0CoccygisClassificationType = A0ClassificationTypeEnum.None;
    this.isWithSignificantDisplacement = false;
    this.isAdjacentSoftTissueInjury = false;
    this.coccygisNoFutherDefinedType = NoFutherDefinedType.None;

    // PosttherapeuticChange

    this.interventionType = InterventionTypeEnum.None;
    this.spondylodesisSpineLocations = new SpineLocation();
    this.interventionSpineLocations = new SpineLocation();
    this.isSpineSideRight = false;
    this.isSpineSideLeft = false;
    this.intervertebralDiscReplacementSpineLocations = new SpineLocation();
    this.detailsInterventionType = DetailsInterventionTypeEnum.None;
    this.complicationsType = ComplicationsTypeEnum.None;
    this.isBoneCementLeakage = false;
    this.isCompressionOfAdjacentStructures = false;
    this.isCementEvidenceInParavertebralVeins = false;
    this.isIndicationOfPulmonaryArteryEmbolism = false;
    this.isMaterialFracture = false;
    this.isDislocation = false;

    // PathologyOfTheVertebralArch

    this.vertebraSpineLocations = new SpineLocation();
    this.locationSideType = SideTypeEnum.None;
    this.localizationVertebralArchType = LocalizationVertebralArchTypeEnum.None;
    this.pathologyOfTheVertebralArchBonesDiagnosis = BonesDiagnosisTypeEnum.None;

    // MassSpine

    // Characterization I

    this.bonesDiagnosis1 = BonesDiagnosisTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.cortexType = CortexTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.massSpineDensityType = MassSpineDensityTypeEnum.None;
    this.matrixType = MatrixTypeEnum.None;

    // Characterization II

    this.isCalcification = false;
    this.calcificationType = CalcificationTypeEnum.None;
    this.isSclerosis = false;
    this.isSepta = false;
    this.isNidus = false;
    this.isPolkaDotSign = false;
    this.isIntralesionalFat = false;
    this.isCystic = false;
    this.isGroundGlassAspect = false;
    this.isLiquidLevel = false;
    this.isSwelling = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isPermeativeGrowthPattern = false;
    this.isMarginalSclerosis = false;
    this.isGeographicAppearance = false;
    this.isPedunculateGrowingAwayFromNearbyJoint = false;
    this.isSubchondral = false;
    this.isInfiltrationOfAdjacentSoftTissues = false;
    this.isAdjacentSclerosis = false;
    this.adjacentSclerosisType = AdjacentSclerosisTypeEnum.None;
    this.isInterruptionOfEndPlate = false;
    this.isOsteoproliferativeReaction = false;
    this.isBoneApposition = false;
    this.isEdgrenVainoSign = false;
    this.isExtensiveVertebralHemangioma = false;
    this.isPeriostealReaction = false;
    this.isRemodelling = false;
    this.isMultilayered = false;
    this.isSunburst = false;
    this.isCodmanTriangle = false;
    this.isPathologicFracture = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.significantType = SignificantTypeEnum.None;
    this.contrastEnhancementDistribution = ContrastEnhancementDistributionTypeEnum.None;

    // Differential diagnosis

    this.massSpineDD1 = BonesDiagnosisTypeEnum.None;
    this.isDD1SuspicionOf = false;
    this.massSpineDD2 = BonesDiagnosisTypeEnum.None;
    this.isDD2Subordinate = false;
    this.massSpineDD3 = BonesDiagnosisTypeEnum.None;
    this.isAbove1LesionSameEntity = false;
  }
}
