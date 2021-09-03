import {
  ArteriovenousMalformationTypeEnum,
  CharacterizationTypeEnum,
  DetailsVascularMalformationTypeEnum,
  FormTypeEnum,
  HemodialysisShuntTypeEnum,
  NumberOfAffectedArteriesTypeEnum,
  PathologyTypeEnum,
  SeverityTypeEnum,
  ShapeTypeEnum,
  UpperArteriesDiagnosisTypeEnum,
  UpperArteriesFindingTypeEnum
} from '@enums/angiographyMRT/upper-arteries';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class UpperArteriesFindingUiModel extends FindingBase {
  findingType: UpperArteriesFindingTypeEnum;

  // Common
  pathologyType: PathologyTypeEnum;
  severityType: SeverityTypeEnum;
  isHemodynamicallyRelevant: boolean;
  diameterStenosis: number;
  diameterDiseaseFreePoststenoticSegment: number;
  degreeOfStenosisAccordingToNASCET: number;
  formType: FormTypeEnum;
  length: number;
  isShortStenosis: boolean;
  isThrombusSurroundedByContrastAgent: boolean;
  isCollateralization: boolean;
  isPreStenoticDilatation: boolean;
  isSubclavianStealSyndrome: boolean;
  isSuspiciousFor: boolean;
  isWallHematoma: boolean;
  shapeType: ShapeTypeEnum;
  maxDiameter: number;
  characterizationType: CharacterizationTypeEnum;
  sideType: LocationTypeEnum;
  detailsVascularMalformationType: DetailsVascularMalformationTypeEnum;
  arteriovenousMalformationType: ArteriovenousMalformationTypeEnum;
  hemodialysisShuntType: HemodialysisShuntTypeEnum;
  isStenosis: boolean;
  isOcclusion: boolean;
  isAneurysm: boolean;
  isInfection: boolean;

  // SubclavianArtery
  isProximalAspect: boolean;
  isMidAspect: boolean;
  isDistalAspect: boolean;

  // DiffuseVascularPathology
  isBrachiocephalicTrunk: boolean;
  isRightSubclavianArtery: boolean;
  isRightProximalAspect: boolean;
  isRightMidAspect: boolean;
  isRightDistalAspect: boolean;
  isRightAxillarArtery: boolean;
  isRightBrachialArtery: boolean;
  isRightUlnarArtery: boolean;
  isRightRadialArtery: boolean;
  isRightDeepPalmarArch: boolean;
  isRightSuperficialPalmarArch: boolean;
  isRightPalmarDigitalArteries: boolean;
  rightNumberOfAffectedArteriesType: NumberOfAffectedArteriesTypeEnum;
  isLeftSubclavianArtery: boolean;
  isLeftProximalAspect: boolean;
  isLeftMidAspect: boolean;
  isLeftDistalAspect: boolean;
  isLeftAxillarArtery: boolean;
  isLeftBrachialArtery: boolean;
  isLeftUlnarArtery: boolean;
  isLeftRadialArtery: boolean;
  isLeftDeepPalmarArch: boolean;
  isLeftSuperficialPalmarArch: boolean;
  isLeftPalmarDigitalArteries: boolean;
  leftNumberOfAffectedArteriesType: NumberOfAffectedArteriesTypeEnum;
  isSeveralShortStenoses: boolean;
  isSegmentalOcclusions: boolean;
  isWallThickening: boolean;
  isT2wHyperintensityOfArterialWallOrEdema: boolean;
  isContrastEnhancementOfTheArterialWall: boolean;
  isMicroaneurysms: boolean;
  isCorkscrewCollaterals: boolean;
  isCaliberVariations: boolean;
  differentialDiagnosis1: UpperArteriesDiagnosisTypeEnum;
  differentialDiagnosis2: UpperArteriesDiagnosisTypeEnum;
  isSubordinated: boolean;

  constructor() {
    super();
    this.findingType = UpperArteriesFindingTypeEnum.None;

    // Common
    this.pathologyType = PathologyTypeEnum.None;
    this.severityType = SeverityTypeEnum.None;
    this.isHemodynamicallyRelevant = false;
    this.diameterStenosis = null;
    this.diameterDiseaseFreePoststenoticSegment = null;
    this.degreeOfStenosisAccordingToNASCET = null;
    this.formType = FormTypeEnum.None;
    this.length = null;
    this.isShortStenosis = false;
    this.isThrombusSurroundedByContrastAgent = false;
    this.isCollateralization = false;
    this.isPreStenoticDilatation = false;
    this.isSubclavianStealSyndrome = false;
    this.isSuspiciousFor = false;
    this.isWallHematoma = false;
    this.shapeType = ShapeTypeEnum.None;
    this.maxDiameter = null;
    this.characterizationType = CharacterizationTypeEnum.None;
    this.sideType = LocationTypeEnum.None;
    this.detailsVascularMalformationType = DetailsVascularMalformationTypeEnum.None;
    this.arteriovenousMalformationType = ArteriovenousMalformationTypeEnum.None;
    this.hemodialysisShuntType = HemodialysisShuntTypeEnum.None;
    this.isStenosis = false;
    this.isOcclusion = false;
    this.isAneurysm = false;
    this.isInfection = false;

    // SubclavianArtery
    this.isProximalAspect = false;
    this.isMidAspect = false;
    this.isDistalAspect = false;

    // DiffuseVascularPathology
    this.isBrachiocephalicTrunk = false;
    this.isRightSubclavianArtery = false;
    this.isRightProximalAspect = false;
    this.isRightMidAspect = false;
    this.isRightDistalAspect = false;
    this.isRightAxillarArtery = false;
    this.isRightBrachialArtery = false;
    this.isRightUlnarArtery = false;
    this.isRightRadialArtery = false;
    this.isRightDeepPalmarArch = false;
    this.isRightSuperficialPalmarArch = false;
    this.isRightPalmarDigitalArteries = false;
    this.rightNumberOfAffectedArteriesType = NumberOfAffectedArteriesTypeEnum.None;
    this.isLeftSubclavianArtery = false;
    this.isLeftProximalAspect = false;
    this.isLeftMidAspect = false;
    this.isLeftDistalAspect = false;
    this.isLeftAxillarArtery = false;
    this.isLeftBrachialArtery = false;
    this.isLeftUlnarArtery = false;
    this.isLeftRadialArtery = false;
    this.isLeftDeepPalmarArch = false;
    this.isLeftSuperficialPalmarArch = false;
    this.isLeftPalmarDigitalArteries = false;
    this.leftNumberOfAffectedArteriesType = NumberOfAffectedArteriesTypeEnum.None;
    this.isSeveralShortStenoses = false;
    this.isSegmentalOcclusions = false;
    this.isWallThickening = false;
    this.isT2wHyperintensityOfArterialWallOrEdema = false;
    this.isContrastEnhancementOfTheArterialWall = false;
    this.isMicroaneurysms = false;
    this.isCorkscrewCollaterals = false;
    this.isCaliberVariations = false;
    this.differentialDiagnosis1 = UpperArteriesDiagnosisTypeEnum.None;
    this.differentialDiagnosis2 = UpperArteriesDiagnosisTypeEnum.None;
    this.isSubordinated = false;
  }
}
