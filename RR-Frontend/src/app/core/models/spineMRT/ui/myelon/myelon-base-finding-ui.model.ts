import { FindingBase } from '@models/shared/finding/finding.base';
import { SpinalCanalDifferentialDiagnosisTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-differential-diagnosis-type.enum';
import { LocalizationInTheSpinalCordTypeEnum } from '@enums/spineMRT/myelon/localization-in-the-spinal-cord-type.enum';
import { HomogeneityTypeEnum } from '@enums/spineMRT/myelon/homogeneity-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/spineMRT/myelon/contrast-enhancement-type.enum';
import { MarginTypeEnum } from '@enums/spineMRT/myelon/margin-type.enum';
import { QuantityTransverseTypeEnum } from '@enums/spineMRT/myelon/quantity-transverse-type.enum';
import { LongitudinalExpansionInMyelonEnum } from '@enums/spineMRT/myelon/longitudinal-expansion-in-myelon.enum';
import { PialTypeEnum } from '@enums/spineMRT/myelon/pial-type.enum';
import { AberrantCourseTypeEnum } from '@enums/spineMRT/myelon/aberrant-course-type.enum';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { AdditionalExtensionTypeEnum } from '@enums/spineMRT/myelon/additional-extension-type.enum';

export class MyelonBaseFindingUiModel extends FindingBase {
  isDistension: boolean;
  differentialDiagnosis01: SpinalCanalDifferentialDiagnosisTypeEnum;
  differentialDiagnosis02: SpinalCanalDifferentialDiagnosisTypeEnum;
  isSubordinated: boolean;
  isAnterior: boolean;
  isPosterior: boolean;
  isLeft: boolean;
  isRight: boolean;
  isHaemorrhage: boolean;
  isRootDisplacement: boolean;
  spineLocationBones: SpineDirectionalLocation;
  spineLocationDisks: SpineDirectionalLocation;
  isNecrosis: boolean;
  spineLocationNonTarget: SpineLocation;
  additionalExtensionType: AdditionalExtensionTypeEnum;
  isPosteriorRadix: boolean;
  isArachnoidDiverticula: boolean;

  isMoreThanOneLesion: boolean;
  spinalCanalDifferentialDiagnosisType: SpinalCanalDifferentialDiagnosisTypeEnum;
  localizationInTheSpinalCordType: LocalizationInTheSpinalCordTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  t1wSignal: number;
  t2wSignal: number;
  contrastEnhancementType: ContrastEnhancementTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  isSwelling: boolean;
  isSerpiginousVascularStructures: boolean;
  isFlowVoids: boolean;
  isClottedNerveRoots: boolean;
  isEmptyDuralSac: boolean;
  isSeptationInTheSubarachnoidSpace: boolean;

  // MassEffect
  marginType: MarginTypeEnum;
  isT2wHypointenseRim: boolean;
  isT1wHeterogeneousSignalIntensity: boolean;
  isCalcification: boolean;
  isHemorrhage: boolean;
  isHypointenseAfterFatSaturation: boolean;
  isSTIROrTIRMHyperintense: boolean;
  isCystSyrinx: boolean;
  isCentralCavityFormation: boolean;
  isEdema: boolean;
  isNumerousVessels: boolean;
  isUsuringOrRemodellingSpinalCanal: boolean;
  isLeptomeningealSpread: boolean;
  isIntraAndExtradural: boolean;
  isDisplacement: boolean;
  isCompression: boolean;
  isScaloppingOrThinnedPedicle: boolean;
  isExtendedNeuralForamen: boolean;
  isCharacterizationIIIHemorrhage: boolean;
  isWideningEpiduralFatTissueMoreThan7Mm: boolean;
  isDeformationOfTheDuralSac: boolean;
  isEpiduralReaction: boolean;
  isLiquorisointense: boolean;
  isFatIsointens: boolean;

  // NoMassEffect
  quantityTransverseType: QuantityTransverseTypeEnum;

  isIntramedullaryFocal: boolean;
  isAnteriorRadix: boolean;
  isPial: boolean;
  pialType: PialTypeEnum;
  isSubarachnoid: boolean;
  isEpidural: boolean;
  isMedullaryCone: boolean;
  isCaudaEquina: boolean;
  isAberrantCourse: boolean;
  aberrantCourseType: AberrantCourseTypeEnum;

  constructor() {
    super();

    this.isDistension = false;
    this.differentialDiagnosis01 = SpinalCanalDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis02 = SpinalCanalDifferentialDiagnosisTypeEnum.None;
    this.isSubordinated = false;
    this.isAnterior = false;
    this.isPosterior = false;
    this.isLeft = false;
    this.isRight = false;
    this.isHaemorrhage = false;
    this.isRootDisplacement = false;
    this.spineLocationBones = new SpineDirectionalLocation();
    this.spineLocationDisks = new SpineDirectionalLocation();
    this.isNecrosis = false;
    this.spineLocationNonTarget = new SpineLocation();
    this.additionalExtensionType = AdditionalExtensionTypeEnum.None;

    this.isPosteriorRadix = false;
    this.isArachnoidDiverticula = false;
    this.isMoreThanOneLesion = false;
    this.spinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisTypeEnum.None;
    this.localizationInTheSpinalCordType = LocalizationInTheSpinalCordTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.t1wSignal = 0;
    this.t2wSignal = 0;
    this.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.isSwelling = false;
    this.isSerpiginousVascularStructures = false;
    this.isFlowVoids = false;
    this.isClottedNerveRoots = false;
    this.isEmptyDuralSac = false;
    this.isSeptationInTheSubarachnoidSpace = false;
    this.marginType = MarginTypeEnum.None;
    this.isT2wHypointenseRim = false;
    this.isT1wHeterogeneousSignalIntensity = false;
    this.isCalcification = false;
    this.isHemorrhage = false;
    this.isHypointenseAfterFatSaturation = false;
    this.isSTIROrTIRMHyperintense = false;
    this.isCystSyrinx = false;
    this.isCentralCavityFormation = false;
    this.isEdema = false;
    this.isNumerousVessels = false;
    this.isUsuringOrRemodellingSpinalCanal = false;
    this.isLeptomeningealSpread = false;
    this.isIntraAndExtradural = false;
    this.isDisplacement = false;
    this.isCompression = false;
    this.isScaloppingOrThinnedPedicle = false;
    this.isExtendedNeuralForamen = false;
    this.isCharacterizationIIIHemorrhage = false;
    this.isWideningEpiduralFatTissueMoreThan7Mm = false;
    this.isDeformationOfTheDuralSac = false;
    this.isEpiduralReaction = false;
    this.isLiquorisointense = false;
    this.isFatIsointens = false;
    this.quantityTransverseType = QuantityTransverseTypeEnum.None;

    this.isIntramedullaryFocal = false;
    this.isAnteriorRadix = false;
    this.isPial = false;
    this.pialType = PialTypeEnum.None;
    this.isSubarachnoid = false;
    this.isEpidural = false;
    this.isMedullaryCone = false;
    this.isCaudaEquina = false;
    this.isAberrantCourse = false;
    this.aberrantCourseType = AberrantCourseTypeEnum.None;
  }
}
