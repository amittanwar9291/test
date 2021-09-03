import { FindingBase } from '@models/shared/finding/finding.base';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { MyelonSpinalCanalFindingTypeEnum } from '@enums/spineCT/myelon/myelon-spinal-canal-finding-type.enum';
import { SpinalCanalStenosisDetailTypeEnum } from '@enums/spineCT/myelon/spinal-canal-stenosis-detail-type.enum';
import { SpondylosisDetailsTypeEnum } from '@enums/spineCT/myelon/spondylosis-details-type.enum';
import { AccordingToMeyerdingTypeEnum } from '@enums/spineCT/myelon/according-to-meyerding-type.enum';
import { SpinalCanalLocation } from '@models/shared/spine/localizers/spinal-canal-location.model';
import { CharacterizationTypeEnum } from '@enums/spineCT/myelon/characterization-type.enum';
import { MyelonSpinalCanalDensityTypeEnum } from '@enums/spineCT/myelon/myelon-spinal-canal-density-type.enum';
import { MarginTypeEnum } from '@enums/spineCT/myelon/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/spineCT/myelon/homogeneity-type.enum';
import { MyelonSpinalCanalCalcificationTypeEnum } from '@enums/spineCT/myelon/myelon-spinal-canal-calcification-type.enum';
import { MyelonAffectionTypeEnum } from '@enums/spineCT/myelon/myelon-affection-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/spineCT/myelon/contrast-enhancement-quantitative-type.enum';
import { MyelonDifferentialDiagnoseTypeEnum } from '@enums/spineCT/myelon/myelon-differential-diagnose-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/spineCT/myelon/contrast-enhancement-distribution-type.enum';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';

export class MyelonFindingUiModel extends FindingBase {
  findingType: MyelonSpinalCanalFindingTypeEnum;

  // SpinalCanalStenosis

  spineLocation: SpineLocation;
  spinalCanalStenosisDetailType: SpinalCanalStenosisDetailTypeEnum;
  sagittalDiameterInMm: number;
  transverseDiameterInMm: number;
  isSpondylosis: boolean;
  isSpondylosisRightSide: boolean;
  isSpondylosisLeftSide: boolean;
  spondylosisDetailsType: SpondylosisDetailsTypeEnum;
  isLigFlavumHypertrophy: boolean;
  isLigFlavumHypertrophyRightSide: boolean;
  isLigFlavumHypertrophyLeftSide: boolean;
  isLDiscProtrusion: boolean;
  isRetrospondylosis: boolean;
  isUncovertebralArthrosis: boolean;
  isUncovertebralArthrosisRightSide: boolean;
  isUncovertebralArthrosisLeftSide: boolean;
  isNeuralForaminalCompression: boolean;
  isNeuralForaminalCompressionRightSide: boolean;
  isNeuralForaminalCompressionLeftSide: boolean;
  isLateralRecessStenosis: boolean;
  isTShapedStenosisSpinalCanal: boolean;
  isPseudospondylolisthesis: boolean;
  accordingToMeyerdingType: AccordingToMeyerdingTypeEnum;

  // Mass

  // Characterization

  localizationTopOrBottomVertebra: SpineLocation;
  spinalCanalLocation: SpinalCanalLocation;
  isAnterior: boolean;
  isPosterior: boolean;
  isSpinalCanalLocalizationLeft: boolean;
  isIsSpinalCanalLocalizationRight: boolean;
  isHourglassNeurinoma: boolean;
  expansionMaxDiameterInMm: number;
  expansion2ndPlaneInMm: number;
  expansion3rdPlaneInMm: number;
  characterizationType: CharacterizationTypeEnum;
  myelonSpinalCanalDensityType: MyelonSpinalCanalDensityTypeEnum;
  isGasInclusion: boolean;
  measurementInHU: number;
  marginType: MarginTypeEnum;

  // Characterization

  charIIHomogeneityType: HomogeneityTypeEnum;
  isCalcification: boolean;
  calcificationType: MyelonSpinalCanalCalcificationTypeEnum;
  isSclerosis: boolean;
  isSepta: boolean;
  isIntralesionalFat: boolean;
  isCystic: boolean;
  isFluidLevel: boolean;
  myelonAffectionType: MyelonAffectionTypeEnum;
  isCompressionFromAnterior: boolean;
  isCompressionFromRightSide: boolean;
  isCompressionFromLeftSide: boolean;
  isCompressionFromPosterior: boolean;
  isSerpiginousVascularStructures: boolean;
  isSignificantVascularization: boolean;
  isRootDisplacement: boolean;
  isClottedNerveRoots: boolean;
  isEmptyDuralSac: boolean;
  isSeptationInTheSubarachnoidSpace: boolean;
  isLeptomeningealSpread: boolean;
  isScaloppingOrThinnedPedicle: boolean;
  isNeuralForaminalWidening: boolean;
  isNecrosis: boolean;
  isHemorrhage: boolean;
  localizationOfNerveRootDisplacement: SpineDirectionalLocation;

  localizationOfNeuralForaminalWidening: SpineDirectionalLocation;

  // Differential

  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  ddHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  differentialDiagnosis1Type: MyelonDifferentialDiagnoseTypeEnum;
  isSuspicionOf: boolean;
  differentialDiagnosis2Type: MyelonDifferentialDiagnoseTypeEnum;
  isSubordinate: boolean;
  isDifferentialDiagnosisAbove1LesionOfTheSameEntity: boolean;
  differentialDiagnosisAbove1LesionLocations: SpineLocation;

  constructor() {
    super();
    this.findingType = MyelonSpinalCanalFindingTypeEnum.None;
    // SpinalCanalStenosis

    this.spineLocation = new SpineLocation();
    this.spinalCanalStenosisDetailType = SpinalCanalStenosisDetailTypeEnum.None;
    this.sagittalDiameterInMm = null;
    this.transverseDiameterInMm = null;
    this.isSpondylosis = false;
    this.isSpondylosisRightSide = false;
    this.isSpondylosisLeftSide = false;
    this.spondylosisDetailsType = SpondylosisDetailsTypeEnum.None;
    this.isLigFlavumHypertrophy = false;
    this.isLigFlavumHypertrophyRightSide = false;
    this.isLigFlavumHypertrophyLeftSide = false;
    this.isLDiscProtrusion = false;
    this.isRetrospondylosis = false;
    this.isUncovertebralArthrosis = false;
    this.isUncovertebralArthrosisRightSide = false;
    this.isUncovertebralArthrosisLeftSide = false;
    this.isNeuralForaminalCompression = false;
    this.isNeuralForaminalCompressionRightSide = false;
    this.isNeuralForaminalCompressionLeftSide = false;
    this.isLateralRecessStenosis = false;
    this.isTShapedStenosisSpinalCanal = false;
    this.isPseudospondylolisthesis = false;
    this.accordingToMeyerdingType = AccordingToMeyerdingTypeEnum.None;

    // Mass

    // Characterization

    this.localizationTopOrBottomVertebra = new SpineLocation();
    this.spinalCanalLocation = new SpinalCanalLocation();
    this.isAnterior = false;
    this.isPosterior = false;
    this.isSpinalCanalLocalizationLeft = false;
    this.isIsSpinalCanalLocalizationRight = false;
    this.isHourglassNeurinoma = false;
    this.expansionMaxDiameterInMm = null;
    this.expansion2ndPlaneInMm = null;
    this.expansion3rdPlaneInMm = null;
    this.characterizationType = CharacterizationTypeEnum.None;
    this.myelonSpinalCanalDensityType = MyelonSpinalCanalDensityTypeEnum.None;
    this.isGasInclusion = false;
    this.measurementInHU = null;
    this.marginType = MarginTypeEnum.None;

    // Characterization

    this.charIIHomogeneityType = HomogeneityTypeEnum.None;
    this.isCalcification = false;
    this.calcificationType = MyelonSpinalCanalCalcificationTypeEnum.None;
    this.isSclerosis = false;
    this.isSepta = false;
    this.isIntralesionalFat = false;
    this.isCystic = false;
    this.isFluidLevel = false;
    this.myelonAffectionType = MyelonAffectionTypeEnum.None;
    this.isCompressionFromAnterior = false;
    this.isCompressionFromRightSide = false;
    this.isCompressionFromLeftSide = false;
    this.isCompressionFromPosterior = false;
    this.isSerpiginousVascularStructures = false;
    this.isSignificantVascularization = false;
    this.isRootDisplacement = false;
    this.isClottedNerveRoots = false;
    this.isEmptyDuralSac = false;
    this.isSeptationInTheSubarachnoidSpace = false;
    this.isLeptomeningealSpread = false;
    this.isScaloppingOrThinnedPedicle = false;
    this.isNeuralForaminalWidening = false;
    this.isNecrosis = false;
    this.isHemorrhage = false;
    this.localizationOfNerveRootDisplacement = new SpineDirectionalLocation();
    this.localizationOfNeuralForaminalWidening = new SpineDirectionalLocation();

    // Differential

    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.ddHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.differentialDiagnosis1Type = MyelonDifferentialDiagnoseTypeEnum.None;
    this.isSuspicionOf = false;
    this.differentialDiagnosis2Type = MyelonDifferentialDiagnoseTypeEnum.None;
    this.isSubordinate = false;
    this.isDifferentialDiagnosisAbove1LesionOfTheSameEntity = false;
    this.differentialDiagnosisAbove1LesionLocations = new SpineLocation();
  }
}
