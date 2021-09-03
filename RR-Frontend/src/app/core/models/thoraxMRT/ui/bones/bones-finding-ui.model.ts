import { FindingBase } from '@models/shared/finding/finding.base';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { ThoraxMRTBonesFindingTypeEnum } from '@enums/thoraxMRT/bones/thorax-mrt-bones-finding-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { HomogeneityTypeEnum } from '@enums/thoraxMRT/bones/homogeneity-type.enum';
import { NotFutherSpecfiedTypeEnum } from '@enums/thoraxMRT/bones/fracture/not-futher-specfied-type.enum';
import { FractureAgeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-age.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesDifferentialDiagnosisEnum } from '@enums/thoraxMRT/bones/mass/bones-differential-diagnosis.enum';
import { HistologyKnownTypeEnum } from '@enums/thoraxMRT/bones/histology-known-type.enum';
import { MarginTypeEnum } from '@enums/thoraxMRT/bones/margin-type.enum';
import { MassShapeTypeEnum } from '@enums/thoraxMRT/bones/mass/mass-shape-type.enum';
import { MatrixTypeEnum } from '@enums/thoraxMRT/bones/mass/matrix-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxMRT/bones/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/thoraxMRT/bones/mass/contrast-enhancement-distribution-type.enum';
import { CorticalBoneEnum } from '@enums/thoraxMRT/bones/mass/cortical-bone.enum';
import { RockwoodInjuryGradeEnum } from '@enums/thoraxMRT/bones/clavicule-fracture/rockwood-injury-grade.enum';
import { TossyInjuryGradeEnum } from '@enums/thoraxMRT/bones/clavicule-fracture/tossy-injury-grade.enum';
import { PathologyNoFractureTypeEnum } from '@enums/thoraxMRT/bones/spinal-fracture/pathology-no-fracture-type.enum';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { DiscGeneralLocationModel } from '@models/shared/spine/localizers/disc-general-location.model';
import { FractureTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-type.enum';
import { FractureSubTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-sub-type.enum';
import { RibsModel } from '@models/shared/thorax/localizers/ribs.model';

export class BonesFindingUiModel extends FindingBase {
  findingType: ThoraxMRTBonesFindingTypeEnum;

  // Common
  sideType: LocationTypeEnum;
  ribLocalization: RibsModel;
  spineLocalization: SpineLocation;

  // Fracture
  fractureType: FractureTypeEnum;
  fractureSubType: FractureSubTypeEnum;
  notFutherSpecfiedType: NotFutherSpecfiedTypeEnum;
  fractureAge: FractureAgeEnum;

  // Mass
  descriptionType: DescriptionTypeEnum;
  characterizationOneDifferentialDiagnosis: BonesDifferentialDiagnosisEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  extensionSize: number;
  extensionSecondPlane: number;
  extensionThirdPlane: number;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  corticalBone: CorticalBoneEnum;
  massShapeType: MassShapeTypeEnum;
  matrixType: MatrixTypeEnum;
  t1wSignal: number;
  t2wSignal: number;
  isDiffusionRestriction: boolean;
  isCystic: boolean;
  isSeptatedOrChambered: boolean;
  isFluidLevel: boolean;
  isNecrosis: boolean;
  isCalcification: boolean;
  isCentral: boolean;
  isDiffuselyDistributed: boolean;
  isNidus: boolean;
  isT2wHyperintenseNidus: boolean;
  isFatSignal: boolean;
  isSclerosis: boolean;
  isPeriostealReaction: boolean;
  isCartilageCap: boolean;
  cartilageCapMaxThickness: number;
  isT2wHyperintenseCartilageCap: boolean;
  isSingalPoorPerichondrium: boolean;
  isScleroticMargin: boolean;
  isExpansile: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isPermeativeGrowth: boolean;
  isScleroticMarginGrowthPattern: boolean;
  isMapLike: boolean;
  isPedunculated: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  isSoftTissueEdema: boolean;
  isBoneMarrowEdema: boolean;
  isPerifocalSclerosis: boolean;
  isSurroundingInflammatoryReaction: boolean;
  isIntraosseousAbscess: boolean;
  isInfiltrationOfSoftTissues: boolean;
  isInfiltrationOfAdjacentBone: boolean;
  isPathologicFracture: boolean;
  isInadequateTraumaSuspected: boolean;
  differentialDiagnosis01: BonesDifferentialDiagnosisEnum;
  isDiagnosisSuspected: boolean;
  differentialDiagnosis02: BonesDifferentialDiagnosisEnum;
  isSubordinate: boolean;
  differentialDiagnosis03: BonesDifferentialDiagnosisEnum;
  isMoreThanOneLesion: boolean;

  // FileUpload
  referencePicture: ReferencePictureUiModel;

  // ClavicleFracture
  isAOClassification: boolean;
  isRockwood: boolean;
  rockwoodInjuryGrade: RockwoodInjuryGradeEnum;
  isTossy: boolean;
  tossyInjuryGrade: TossyInjuryGradeEnum;

  // SpinalFracture
  pathologyNoFractureType: PathologyNoFractureTypeEnum;
  isSchmorlNodes: boolean;
  isEndplateHerniation: boolean;

  // SternalMass
  isSternalManubriumLocalized: boolean;
  isSternalBodyLocalized: boolean;
  isXiphoidProcessLocalized: boolean;

  // SpinalMass
  vertebralBodyLocalization: DiscGeneralLocationModel;
  isInterruptionOfVertebralEndPlate: boolean;
  isEdgreenVainoSign: boolean;
  isSpinalCanalInfiltration: boolean;
  isPedicleDestruction: boolean;
  isPolkaDotSign: boolean;

  constructor() {
    super();

    this.findingType = ThoraxMRTBonesFindingTypeEnum.None;

    // Common
    this.sideType = LocationTypeEnum.None;
    this.ribLocalization = new RibsModel();
    this.spineLocalization = new SpineLocation();

    // Fracture
    this.fractureType = FractureTypeEnum.None;
    this.fractureSubType = FractureSubTypeEnum.None;
    this.notFutherSpecfiedType = NotFutherSpecfiedTypeEnum.None;
    this.fractureAge = FractureAgeEnum.None;

    // Mass
    this.descriptionType = DescriptionTypeEnum.None;
    this.characterizationOneDifferentialDiagnosis = BonesDifferentialDiagnosisEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.extensionSize = null;
    this.extensionSecondPlane = null;
    this.extensionThirdPlane = null;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.corticalBone = CorticalBoneEnum.None;
    this.massShapeType = MassShapeTypeEnum.None;
    this.matrixType = MatrixTypeEnum.None;
    this.t1wSignal = 0;
    this.t2wSignal = 0;
    this.isDiffusionRestriction = false;
    this.isCystic = false;
    this.isSeptatedOrChambered = false;
    this.isFluidLevel = false;
    this.isNecrosis = false;
    this.isCalcification = false;
    this.isCentral = false;
    this.isDiffuselyDistributed = false;
    this.isNidus = false;
    this.isT2wHyperintenseNidus = false;
    this.isFatSignal = false;
    this.isSclerosis = false;
    this.isPeriostealReaction = false;
    this.isCartilageCap = false;
    this.cartilageCapMaxThickness = null;
    this.isT2wHyperintenseCartilageCap = false;
    this.isSingalPoorPerichondrium = false;
    this.isScleroticMargin = false;
    this.isExpansile = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isPermeativeGrowth = false;
    this.isScleroticMarginGrowthPattern = false;
    this.isMapLike = false;
    this.isPedunculated = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.isSoftTissueEdema = false;
    this.isBoneMarrowEdema = false;
    this.isPerifocalSclerosis = false;
    this.isSurroundingInflammatoryReaction = false;
    this.isIntraosseousAbscess = false;
    this.isInfiltrationOfSoftTissues = false;
    this.isInfiltrationOfAdjacentBone = false;
    this.isPathologicFracture = false;
    this.isInadequateTraumaSuspected = false;
    this.differentialDiagnosis01 = BonesDifferentialDiagnosisEnum.None;
    this.isDiagnosisSuspected = false;
    this.differentialDiagnosis02 = BonesDifferentialDiagnosisEnum.None;
    this.isSubordinate = false;
    this.differentialDiagnosis03 = BonesDifferentialDiagnosisEnum.None;
    this.isMoreThanOneLesion = false;

    // FileUpload
    this.referencePicture = new ReferencePictureUiModel();

    // ClavicleFracture
    this.isAOClassification = false;
    this.isRockwood = false;
    this.rockwoodInjuryGrade = RockwoodInjuryGradeEnum.None;
    this.isTossy = false;
    this.tossyInjuryGrade = TossyInjuryGradeEnum.None;

    // SpinalFracture
    this.pathologyNoFractureType = PathologyNoFractureTypeEnum.None;
    this.isSchmorlNodes = false;
    this.isEndplateHerniation = false;

    // SternalMass
    this.isSternalManubriumLocalized = false;
    this.isSternalBodyLocalized = false;
    this.isXiphoidProcessLocalized = false;

    // SpinalMass
    this.vertebralBodyLocalization = new DiscGeneralLocationModel();
    this.isInterruptionOfVertebralEndPlate = false;
    this.isEdgreenVainoSign = false;
    this.isSpinalCanalInfiltration = false;
    this.isPedicleDestruction = false;
    this.isPolkaDotSign = false;
  }
}
