import { FindingBase } from '@models/shared/finding/finding.base';
import { PelvisLegArteriesFindingTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries/';

import {
  AfterTherapyTypeEnum,
  AnastomoticAneurysmTypeEnum,
  BypassTypeEnum,
  CourseTypeEnum,
  DissectionTypeEnum,
  DistalBypassPortTypeEnum,
  NoStenosisTypeEnum,
  PeriprostheticFluidCollectionTypeEnum,
  WithoutContrastEnhancementTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/after-therapy';

import {
  ArterioscleroticPAVKPathologyTypeEnum,
  ChronicLesionsTypeEnum,
  ClassificationAccordingToTASCIITypeEnum,
  LengthTypeEnum,
  LocalizationTypeEnum,
  SegmentTypeEnum,
  TypeADetailsTypeEnum,
  TypeBDetailsTypeEnum,
  TypeCDetailsTypeEnum,
  TypeDDetailsTypeEnum,
  FormTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';

import {
  EntrapmentSyndromeTypeEnum,
  NonArterioscleroticPAVKPathologyTypeEnum,
  PathologyStenosisTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/non-arteriosclerotic-pavk';

import {
  FollowUpTypeEnum,
  VascularDilatationCharacterizationTypeEnum,
  VascularDilatationTypeEnum,
  ShapeTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/vascular-dilatation';

import {
  FemoropoplitealExtentTypeEnum,
  FemoropoplitealLocalizationTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/chronic-femoropopliteal-lesions';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { SeverityTypeEnum } from '@enums/shared/angiography/severity-type.enum';

export class PelvisLegArteriesFindingApiModel extends FindingBase {
  findingType: PelvisLegArteriesFindingTypeEnum;

  // Common

  sideType: SideTypeEnum;
  isSuprarenal: boolean;
  isInfrarenal: boolean;
  length: number;
  isP1Segment: boolean;
  isP2Segment: boolean;
  isP3Segment: boolean;

  // Anatomic

  isPersistentIschiadicArtery: boolean;
  isHighOriginAnteriorTibialArtery: boolean;
  isHighOriginPosteriorTibialArtery: boolean;
  isHighOriginPeronealArtery: boolean;
  isTypeADorsalisPedisArtery: boolean;
  isTypeBDorsalisPedisArtery: boolean;
  isTypeCDorsalisPedisArtery: boolean;
  isTypeDLackOfDorsalisPedisArtery: boolean;

  // Arteriosclerotic

  arterioscleroticPAVKPathologyType: ArterioscleroticPAVKPathologyTypeEnum;
  normal: boolean;
  localizationType: LocalizationTypeEnum;
  isRight: boolean;
  isLeft: boolean;
  segmentType: SegmentTypeEnum;
  arterioscleroticPAVKSeverityType: SeverityTypeEnum;
  isHemodynamicallyRelevant: boolean;
  diameterStenosis: number;
  diameterDiseaseFreePoststenoticSegment: number;
  degreeOfStenosisAccordingToNASCET: number;
  isCalciumPlaque: boolean;
  isSoftPlaque: boolean;
  formType: FormTypeEnum;
  lengthType: LengthTypeEnum;
  isIntermittent: boolean;
  distalRefillingLocalizationType: LocalizationTypeEnum;
  isCollateralsFromAdjacentVessels: boolean;
  isProfundaFemoralArtery: boolean;
  isSuperficialFemoralArteryDistalSegment: boolean;
  isInsufficientCollateralization: boolean;
  classificationAccordingToTASCIIType: ClassificationAccordingToTASCIITypeEnum;
  chronicLesionsType: ChronicLesionsTypeEnum;
  typeADetailsType: TypeADetailsTypeEnum;
  typeBDetailsType: TypeBDetailsTypeEnum;
  typeCDetailsType: TypeCDetailsTypeEnum;
  typeDDetailsType: TypeDDetailsTypeEnum;
  femoropoplitealLocalizationType: FemoropoplitealLocalizationTypeEnum;
  femoropoplitealExtentType: FemoropoplitealExtentTypeEnum;
  isShortLengthStenosis: boolean;
  singularStenosis: boolean;
  isDistalRefillingSuprarenal: boolean;
  isDistalRefillingInfrarenal: boolean;

  // Vascular

  vascularDilatationLocalizationType: LocalizationTypeEnum;
  vascularDilatationShapeType: ShapeTypeEnum;
  maxDiameter: number;
  vesselDiameterProximalOfTheDilatation: number;
  vascularDilatationCharacterizationType: VascularDilatationCharacterizationTypeEnum;
  isPartiallyThrombosed: boolean;
  isEccentric: boolean;
  isPeripheralEmbolisms: boolean;
  isDistalVascularOcclusion: boolean;
  isWandverkalkungen: boolean;
  vascularDilatationType: VascularDilatationTypeEnum;
  isActiveBleedingFreshHematoma: boolean;
  followUpType: FollowUpTypeEnum;
  maxDiameterInPreviousExamination: number;

  // Non-arteriosclerotic

  nonArterioscleroticPAVKPathologyType: NonArterioscleroticPAVKPathologyTypeEnum;
  embolismLocalizationType: LocalizationTypeEnum;
  maxDiameterEmbolus: number;
  entrapmentSyndromeType: EntrapmentSyndromeTypeEnum;
  isEntrapmentSyndromeTypeV: boolean;
  isDetectionOfCystsWithinTheVesselWall: boolean;
  isStenosis: boolean;
  pathologyStenosisType: PathologyStenosisTypeEnum;
  isPeripheralOcclusionsStenoses: boolean;
  isSeveralShortStretchStenoses: boolean;
  isConcentricFilumTerminaleSign: boolean;
  isSegmentalOcclusions: boolean;
  isSuddenChangeInDiameter: boolean;
  isWallThickening: boolean;
  isEdematousChangesOfTheVascularWallPerivascular: boolean;
  isArterialWallEnhancement: boolean;
  isMicroaneurysm: boolean;
  isTortuousCourseOfTheSuperficialFemoralArtery: boolean;
  isCorkscrewCollaterals: boolean;

  // After

  afterTherapyType: AfterTherapyTypeEnum;
  isMultiplePTA: boolean;
  isMultipleStent: boolean;
  bypassType: BypassTypeEnum;
  afterTherapyLocalizationType: LocalizationTypeEnum;
  distalBypassPortType: DistalBypassPortTypeEnum;
  isCrossover: boolean;
  noStenosisType: NoStenosisTypeEnum;
  courseType: CourseTypeEnum;
  isAnastomoticAneurysm: boolean;
  anastomoticAneurysmType: AnastomoticAneurysmTypeEnum;
  isPeriprostheticFluidCollection: boolean;
  periprostheticFluidCollectionType: PeriprostheticFluidCollectionTypeEnum;
  isEspeciallyPeriprostheticInfection: boolean;
  withoutContrastEnhancementType: WithoutContrastEnhancementTypeEnum;
  isPostoperativeScarringTissueChanges: boolean;
  isDissection: boolean;
  dissectionType: DissectionTypeEnum;

  constructor() {
    super();
    this.findingType = PelvisLegArteriesFindingTypeEnum.None;

    // Common

    this.sideType = SideTypeEnum.None;
    this.isSuprarenal = false;
    this.isInfrarenal = false;
    this.length = null;
    this.isP1Segment = false;
    this.isP2Segment = false;
    this.isP3Segment = false;

    // Anatomic

    this.isPersistentIschiadicArtery = false;
    this.isHighOriginAnteriorTibialArtery = false;
    this.isHighOriginPosteriorTibialArtery = false;
    this.isHighOriginPeronealArtery = false;
    this.isTypeADorsalisPedisArtery = false;
    this.isTypeBDorsalisPedisArtery = false;
    this.isTypeCDorsalisPedisArtery = false;
    this.isTypeDLackOfDorsalisPedisArtery = false;

    // Arteriosclerotic

    this.arterioscleroticPAVKPathologyType = ArterioscleroticPAVKPathologyTypeEnum.None;
    this.normal = false;
    this.localizationType = LocalizationTypeEnum.None;
    this.isRight = false;
    this.isLeft = false;
    this.segmentType = SegmentTypeEnum.None;
    this.arterioscleroticPAVKSeverityType = SeverityTypeEnum.None;
    this.isHemodynamicallyRelevant = false;
    this.diameterStenosis = null;
    this.diameterDiseaseFreePoststenoticSegment = null;
    this.degreeOfStenosisAccordingToNASCET = null;
    this.isCalciumPlaque = false;
    this.isSoftPlaque = false;
    this.formType = FormTypeEnum.None;
    this.lengthType = LengthTypeEnum.None;
    this.isIntermittent = false;
    this.distalRefillingLocalizationType = LocalizationTypeEnum.None;
    this.isCollateralsFromAdjacentVessels = false;
    this.isProfundaFemoralArtery = false;
    this.isSuperficialFemoralArteryDistalSegment = false;
    this.isInsufficientCollateralization = false;
    this.classificationAccordingToTASCIIType = ClassificationAccordingToTASCIITypeEnum.None;
    this.chronicLesionsType = ChronicLesionsTypeEnum.None;
    this.typeADetailsType = TypeADetailsTypeEnum.None;
    this.typeBDetailsType = TypeBDetailsTypeEnum.None;
    this.typeCDetailsType = TypeCDetailsTypeEnum.None;
    this.typeDDetailsType = TypeDDetailsTypeEnum.None;
    this.femoropoplitealLocalizationType = FemoropoplitealLocalizationTypeEnum.None;
    this.femoropoplitealExtentType = FemoropoplitealExtentTypeEnum.None;
    this.isShortLengthStenosis = false;
    this.singularStenosis = false;
    this.isDistalRefillingSuprarenal = false;
    this.isDistalRefillingInfrarenal = false;

    // Vascular

    this.vascularDilatationLocalizationType = LocalizationTypeEnum.None;
    this.vascularDilatationShapeType = ShapeTypeEnum.None;
    this.maxDiameter = null;
    this.vesselDiameterProximalOfTheDilatation = null;
    this.vascularDilatationCharacterizationType = VascularDilatationCharacterizationTypeEnum.None;
    this.isPartiallyThrombosed = false;
    this.isEccentric = false;
    this.isPeripheralEmbolisms = false;
    this.isDistalVascularOcclusion = false;
    this.isWandverkalkungen = false;
    this.vascularDilatationType = VascularDilatationTypeEnum.None;
    this.isActiveBleedingFreshHematoma = false;
    this.followUpType = FollowUpTypeEnum.None;
    this.maxDiameterInPreviousExamination = null;

    // Non-arteriosclerotic

    this.nonArterioscleroticPAVKPathologyType = NonArterioscleroticPAVKPathologyTypeEnum.None;
    this.embolismLocalizationType = LocalizationTypeEnum.None;
    this.maxDiameterEmbolus = null;
    this.entrapmentSyndromeType = EntrapmentSyndromeTypeEnum.None;
    this.isEntrapmentSyndromeTypeV = false;
    this.isDetectionOfCystsWithinTheVesselWall = false;
    this.isStenosis = false;
    this.pathologyStenosisType = PathologyStenosisTypeEnum.None;
    this.isPeripheralOcclusionsStenoses = false;
    this.isSeveralShortStretchStenoses = false;
    this.isConcentricFilumTerminaleSign = false;
    this.isSegmentalOcclusions = false;
    this.isSuddenChangeInDiameter = false;
    this.isWallThickening = false;
    this.isEdematousChangesOfTheVascularWallPerivascular = false;
    this.isArterialWallEnhancement = false;
    this.isMicroaneurysm = false;
    this.isTortuousCourseOfTheSuperficialFemoralArtery = false;
    this.isCorkscrewCollaterals = false;

    // After

    this.afterTherapyType = AfterTherapyTypeEnum.None;
    this.isMultiplePTA = false;
    this.isMultipleStent = false;
    this.bypassType = BypassTypeEnum.None;
    this.afterTherapyLocalizationType = LocalizationTypeEnum.None;
    this.distalBypassPortType = DistalBypassPortTypeEnum.None;
    this.isCrossover = false;
    this.noStenosisType = NoStenosisTypeEnum.None;
    this.courseType = CourseTypeEnum.None;
    this.isAnastomoticAneurysm = false;
    this.anastomoticAneurysmType = AnastomoticAneurysmTypeEnum.None;
    this.isPeriprostheticFluidCollection = false;
    this.periprostheticFluidCollectionType = PeriprostheticFluidCollectionTypeEnum.None;
    this.isEspeciallyPeriprostheticInfection = false;
    this.withoutContrastEnhancementType = WithoutContrastEnhancementTypeEnum.None;
    this.isPostoperativeScarringTissueChanges = false;
    this.isDissection = false;
    this.dissectionType = DissectionTypeEnum.None;
  }
}
