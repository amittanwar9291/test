import { FindingBase } from '@models/shared/finding/finding.base';

import {
  CerebralVeinsPathologyTypeEnum,
  ArteriovenousMalformationTypeEnum,
  CharacterizationTypeEnum,
  DetailsVascularMalformationTypeEnum,
  DifferentialDiagnosisTypeEnum,
  ExtentTypeEnum,
  FormTypeEnum,
  PathologyTypeEnum,
  ShapeTypeEnum,
  SideTypeEnum,
  SubarachnoidHemorrhageTypeEnum,
  VesselsFindingTypeEnum,
  AffectedBranchTypeEnum,
  VeinsCharacterizationTypeEnum,
  VeinsPathologyTypeEnum
} from '@enums/neckMRT/vessels';
import { CarotidArteryUiModel } from '@models/shared/angiography/localizers/carotid-artery-ui-model';
import { ArteriesSegmentsLocalizerModel } from '@models/shared/angiography/localizers/arteries-segments-localizer.model';

export class VesselsFindingUiModel extends FindingBase {
  findingType: VesselsFindingTypeEnum;

  // Common
  sideType: SideTypeEnum;
  pathologyType: PathologyTypeEnum;
  extentType: ExtentTypeEnum;
  formType: FormTypeEnum;
  shapeType: ShapeTypeEnum;
  subarachnoidHemorrhageType: SubarachnoidHemorrhageTypeEnum;
  characterizationType: CharacterizationTypeEnum;
  detailsVascularMalformationType: DetailsVascularMalformationTypeEnum;
  arteriovenousMalformationType: ArteriovenousMalformationTypeEnum;
  differentialDiagnosisType: DifferentialDiagnosisTypeEnum;
  diameterStenosisInMm: number;
  diameterDiseaseFreePoststenoticSegmentInMm: number;
  degreeOfStenosisInPercent: number;
  stenosisOcclusionExtentInMm: number;
  dissectionExtentInMm: number;
  aneurysmExtentInMm: number;
  maxDiameterInMm: number;
  isHemodynamicallyRelevant: boolean;
  isShortLength: boolean;
  isWallHematomaHyperintenseInUnenhancedT1W: boolean;
  isContrastEnhancementOfTheVesselWall: boolean;
  isT2WHyperintensityOfTheVesselWallEdema: boolean;
  isIrregularVesselCaliber: boolean;
  isPanarteritisNodosa: boolean;
  isBranchesOfTheExternalCarotidArteryToTheOphthalmicArtery: boolean;
  isCircleOfWillis: boolean;
  isSubarachnoidHemorrhage: boolean;
  isThrombusSurroundedByContrastAgent: boolean;
  isCollateralization: boolean;
  isPreStenoticDilatation: boolean;
  isSubclavianStealSyndrome: boolean;
  isSuspicionOf: boolean;

  // InternalCarotidArtery
  arteryLocalisationType: CarotidArteryUiModel;

  // ExternalCarotidArtery
  affectedBranchType: AffectedBranchTypeEnum;

  // VertebralArtery
  isV1: boolean;
  isV2: boolean;
  isV3: boolean;
  isV4: boolean;
  isViaContralateralVertebralArtery: boolean;

  // CircleOfWillisCerebralArteries
  arteriesSegmentType: ArteriesSegmentsLocalizerModel;
  isLeptomeningealTranscortical: boolean;
  isContralateralAci: boolean;
  isPosteriorCommunicansArtery: boolean;
  isViaOphtalmicArtery: boolean;

  // SubclavianArtery
  isProximalSegment: boolean;
  isIntermediateSegment: boolean;
  isDistalSegment: boolean;

  // CerebralVeinsDuralSinuses
  isSuperiorSagittalSinus: boolean;
  isInferiorSagittalSinus: boolean;
  isVMagnaCerebri: boolean;
  isStraightSinus: boolean;
  isConfluensOfSinuses: boolean;
  isRightTransverseSinus: boolean;
  isLeftTransverseSinus: boolean;
  isRightSigmoidSinus: boolean;
  isLeftSigmoidSinus: boolean;
  isRightPetrosalSinus: boolean;
  isLeftPetrosalSinus: boolean;
  isCavernousSinusRightPart: boolean;
  isCavernousSinusLeftPart: boolean;
  cerebralVeinsPathologyType: CerebralVeinsPathologyTypeEnum;
  isCerebralEdema: boolean;

  // Veins
  veinsCharacterizationType: VeinsCharacterizationTypeEnum;
  lengthInMm: number;
  isLongDistance: boolean;
  veinsPathologyType: VeinsPathologyTypeEnum;

  constructor() {
    super();
    this.findingType = VesselsFindingTypeEnum.None;

    // Common
    this.sideType = SideTypeEnum.None;
    this.pathologyType = PathologyTypeEnum.None;
    this.extentType = ExtentTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.subarachnoidHemorrhageType = SubarachnoidHemorrhageTypeEnum.None;
    this.characterizationType = CharacterizationTypeEnum.None;
    this.detailsVascularMalformationType = DetailsVascularMalformationTypeEnum.None;
    this.arteriovenousMalformationType = ArteriovenousMalformationTypeEnum.None;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
    this.diameterStenosisInMm = null;
    this.diameterDiseaseFreePoststenoticSegmentInMm = null;
    this.degreeOfStenosisInPercent = null;
    this.stenosisOcclusionExtentInMm = null;
    this.dissectionExtentInMm = null;
    this.aneurysmExtentInMm = null;
    this.maxDiameterInMm = null;
    this.isHemodynamicallyRelevant = false;
    this.isShortLength = false;
    this.isWallHematomaHyperintenseInUnenhancedT1W = false;
    this.isContrastEnhancementOfTheVesselWall = false;
    this.isT2WHyperintensityOfTheVesselWallEdema = false;
    this.isIrregularVesselCaliber = false;
    this.isPanarteritisNodosa = false;
    this.isBranchesOfTheExternalCarotidArteryToTheOphthalmicArtery = false;
    this.isCircleOfWillis = false;
    this.isSubarachnoidHemorrhage = false;
    this.isThrombusSurroundedByContrastAgent = false;
    this.isCollateralization = false;
    this.isPreStenoticDilatation = false;
    this.isSubclavianStealSyndrome = false;
    this.isSuspicionOf = false;

    // InternalCarotidArtery
    this.arteryLocalisationType = new CarotidArteryUiModel();

    // ExternalCarotidArtery
    this.affectedBranchType = AffectedBranchTypeEnum.None;

    // VertebralArtery
    this.isV1 = false;
    this.isV2 = false;
    this.isV3 = false;
    this.isV4 = false;
    this.isViaContralateralVertebralArtery = false;

    // CircleOfWillisCerebralArteries
    this.arteriesSegmentType = new ArteriesSegmentsLocalizerModel();
    this.isLeptomeningealTranscortical = false;
    this.isContralateralAci = false;
    this.isPosteriorCommunicansArtery = false;
    this.isViaOphtalmicArtery = false;

    // SubclavianArtery
    this.isProximalSegment = false;
    this.isIntermediateSegment = false;
    this.isDistalSegment = false;

    // CerebralVeinsDuralSinuses
    this.isSuperiorSagittalSinus = false;
    this.isInferiorSagittalSinus = false;
    this.isVMagnaCerebri = false;
    this.isStraightSinus = false;
    this.isConfluensOfSinuses = false;
    this.isRightTransverseSinus = false;
    this.isLeftTransverseSinus = false;
    this.isRightSigmoidSinus = false;
    this.isLeftSigmoidSinus = false;
    this.isRightPetrosalSinus = false;
    this.isLeftPetrosalSinus = false;
    this.isCavernousSinusRightPart = false;
    this.isCavernousSinusLeftPart = false;
    this.cerebralVeinsPathologyType = CerebralVeinsPathologyTypeEnum.None;
    this.isCerebralEdema = false;

    // Veins
    this.veinsCharacterizationType = VeinsCharacterizationTypeEnum.None;
    this.lengthInMm = null;
    this.isLongDistance = false;
    this.veinsPathologyType = VeinsPathologyTypeEnum.None;
  }
}
