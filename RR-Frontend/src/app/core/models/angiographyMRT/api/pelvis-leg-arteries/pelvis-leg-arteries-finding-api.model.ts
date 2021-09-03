import {
  AnastomoticAneurysmTypeEnum,
  BypassTypeEnum,
  CharacterizationTypeEnum,
  ClassificationAccordingToTASCIIDetailsTypeEnum,
  ClassificationAccordingToTASCIISubTypeEnum,
  ClassificationAccordingToTASCIITypeEnum,
  CollectionWithoutContrastEnhancementTypeEnum,
  ComplicationsTypeEnum,
  ExtentTypeEnum,
  FormTypeEnum,
  LocalizationTypeEnum,
  PathologySubTypeEnum,
  PathologyTypeEnum,
  PelvisLegArteriesFindingTypeEnum,
  PeriprostheticFluidCollectionTypeEnum,
  SeverityTypeEnum,
  ShapeTypeEnum,
  StenosisTypeEnum,
  TherapyTypeEnum,
  VascularPathologyLocalizationTypeEnum
} from '@enums/angiographyMRT/pelvis-leg-arteries';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class PelvisLegArteriesFindingApiModel extends FindingBase {
  findingType: PelvisLegArteriesFindingTypeEnum;

  // Common
  sideType: LocationTypeEnum;
  pathologyType: PathologyTypeEnum;
  localizationType: LocalizationTypeEnum;
  lengthInMm: number;

  // AnatomicVariants
  isPersistentIschiadicArtery: boolean;
  isHighOriginAnteriorTibialArtery: boolean;
  isHighOriginPosteriorTibialArtery: boolean;
  isHighOriginPeronealArtery: boolean;
  isTypeA: boolean;
  isTypeB: boolean;
  isTypeC: boolean;
  isTypeD: boolean;

  // ArterioscleroticPAVK
  severityType: SeverityTypeEnum;
  isHemodynamicallyRelevant: boolean;
  diameterStenosisInMm: number;
  diameterNormalPoststenoticSegmentInMm: number;
  degreeOfStenosisAccordingToNASCETInPercentage: number;
  formType: FormTypeEnum;
  isShortLengthStenosis: boolean;
  isBridgingCollaterals: boolean;
  isCollateralsFromAdjacentVessels: boolean;
  isPoorCollateralization: boolean;
  classificationAccordingToTASCIIType: ClassificationAccordingToTASCIITypeEnum;
  classificationAccordingToTASCIISubType: ClassificationAccordingToTASCIISubTypeEnum;
  classificationAccordingToTASCIIDetailsType: ClassificationAccordingToTASCIIDetailsTypeEnum;
  vascularPathologyLocalizationType: VascularPathologyLocalizationTypeEnum;
  extentType: ExtentTypeEnum;
  isSingularStenosisLessThan1Cm: boolean;

  // Aneurysm
  shapeType: ShapeTypeEnum;
  maxDiameterInMm: number;
  characterizationType: CharacterizationTypeEnum;
  isActiveBleedingOrFreshHematoma: boolean;
  isPartiallyThrombosed: boolean;
  isEccentric: boolean;

  // NonArterioscleroticPAVK
  lengthEmbolusInMm: number;
  pathologySubType: PathologySubTypeEnum;
  isTypeV: boolean;
  isDetectionOfCystsWithinTheVesselWall: boolean;
  isStenosis: boolean;
  stenosisType: StenosisTypeEnum;
  isPeripheralOcclusionsOrStenoses: boolean;
  isSeveralShortStretchStenoses: boolean;
  isConcentricFilumTerminaleSign: boolean;
  isSegmentalOcclusions: boolean;
  isSuddenChangeInDiameter: boolean;
  isWallThickening: boolean;
  isT2wHyperintensityOfVascularWallOrOedema: boolean;
  isArterialWallEnhancement: boolean;
  isMicroaneurysm: boolean;
  isTortuousCourseOfTheSuperficialFemoralArtery: boolean;
  isCorkscrewCollaterals: boolean;

  // AfterTherapy
  therapyType: TherapyTypeEnum;
  bypassType: BypassTypeEnum;
  complicationsType: ComplicationsTypeEnum;
  isAnastomoticAneurysm: boolean;
  anastomoticAneurysmType: AnastomoticAneurysmTypeEnum;
  isPeriprostheticFluidCollection: boolean;
  periprostheticFluidCollectionType: PeriprostheticFluidCollectionTypeEnum;
  isEspeciallyPeriprostheticInfection: boolean;
  collectionWithoutContrastEnhancementType: CollectionWithoutContrastEnhancementTypeEnum;

  constructor() {
    super();
    this.findingType = PelvisLegArteriesFindingTypeEnum.None;

    // Common
    this.sideType = LocationTypeEnum.None;
    this.pathologyType = PathologyTypeEnum.None;
    this.localizationType = LocalizationTypeEnum.None;
    this.lengthInMm = null;

    // AnatomicVariants
    this.isPersistentIschiadicArtery = false;
    this.isHighOriginAnteriorTibialArtery = false;
    this.isHighOriginPosteriorTibialArtery = false;
    this.isHighOriginPeronealArtery = false;
    this.isTypeA = false;
    this.isTypeB = false;
    this.isTypeC = false;
    this.isTypeD = false;

    // ArterioscleroticPAVK
    this.severityType = SeverityTypeEnum.None;
    this.isHemodynamicallyRelevant = false;
    this.diameterStenosisInMm = null;
    this.diameterNormalPoststenoticSegmentInMm = null;
    this.degreeOfStenosisAccordingToNASCETInPercentage = null;
    this.formType = FormTypeEnum.None;
    this.isShortLengthStenosis = false;
    this.isBridgingCollaterals = false;
    this.isCollateralsFromAdjacentVessels = false;
    this.isPoorCollateralization = false;
    this.classificationAccordingToTASCIIType = ClassificationAccordingToTASCIITypeEnum.None;
    this.classificationAccordingToTASCIISubType = ClassificationAccordingToTASCIISubTypeEnum.None;
    this.classificationAccordingToTASCIIDetailsType = ClassificationAccordingToTASCIIDetailsTypeEnum.None;
    this.vascularPathologyLocalizationType = VascularPathologyLocalizationTypeEnum.None;
    this.extentType = ExtentTypeEnum.None;
    this.isSingularStenosisLessThan1Cm = false;

    // Aneurysm
    this.shapeType = ShapeTypeEnum.None;
    this.maxDiameterInMm = null;
    this.characterizationType = CharacterizationTypeEnum.None;
    this.isActiveBleedingOrFreshHematoma = false;
    this.isPartiallyThrombosed = false;
    this.isEccentric = false;

    // NonArterioscleroticPAVK
    this.lengthEmbolusInMm = null;
    this.pathologySubType = PathologySubTypeEnum.None;
    this.isTypeV = false;
    this.isDetectionOfCystsWithinTheVesselWall = false;
    this.isStenosis = false;
    this.stenosisType = StenosisTypeEnum.None;
    this.isPeripheralOcclusionsOrStenoses = false;
    this.isSeveralShortStretchStenoses = false;
    this.isConcentricFilumTerminaleSign = false;
    this.isSegmentalOcclusions = false;
    this.isSuddenChangeInDiameter = false;
    this.isWallThickening = false;
    this.isT2wHyperintensityOfVascularWallOrOedema = false;
    this.isArterialWallEnhancement = false;
    this.isMicroaneurysm = false;
    this.isTortuousCourseOfTheSuperficialFemoralArtery = false;
    this.isCorkscrewCollaterals = false;

    // AfterTherapy
    this.therapyType = TherapyTypeEnum.None;
    this.bypassType = BypassTypeEnum.None;
    this.complicationsType = ComplicationsTypeEnum.None;
    this.isAnastomoticAneurysm = false;
    this.anastomoticAneurysmType = AnastomoticAneurysmTypeEnum.None;
    this.isPeriprostheticFluidCollection = false;
    this.periprostheticFluidCollectionType = PeriprostheticFluidCollectionTypeEnum.None;
    this.isEspeciallyPeriprostheticInfection = false;
    this.collectionWithoutContrastEnhancementType = CollectionWithoutContrastEnhancementTypeEnum.None;
  }
}
