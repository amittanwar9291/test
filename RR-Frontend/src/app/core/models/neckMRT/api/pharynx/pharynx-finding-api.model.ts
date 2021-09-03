import { PharynxFindingBaseApiModel } from '@models/neckMRT/api/pharynx/pharynx-finding-base-api.model';
import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  AsymmetryTypeEnum,
  CmEnhancementDistributionTypeEnum,
  CystTypeEnum,
  DifferentialDiagnosisTypeEnum,
  OrientationAxialTypeEnum,
  ProvenHistologyTypeEnum,
  ShapeTypeEnum,
  CmEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum,
  AnatomicVariantTypeEnum,
  CleftLipAndPalateTypeEnum,
  GradingTypeEnum
} from '@enums/neckMRT/pharynx';

export class PharynxFindingApiModel extends PharynxFindingBaseApiModel {
  // Common
  cmEnhancementQuantitativeType: CmEnhancementQuantitativeTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileApiModel;
  imageFileId: string;

  // AnatomicVariantDysplasia
  anatomicVariantType: AnatomicVariantTypeEnum;
  gradingType: GradingTypeEnum;
  isChoanalAtresiaRight: boolean;
  isChoanalAtresiaLeft: boolean;
  cleftLipAndPalateType: CleftLipAndPalateTypeEnum;
  isCleftLipAndPalateRight: boolean;
  isCleftLipAndPalateLeft: boolean;
  isZenkerSDiverticulum: boolean;
  isFat: boolean;
  isMacroscopic: boolean;
  isMicroscopic: boolean;
  isCysticChange: boolean;

  // Mass
  descriptionType: DescriptionTypeEnum;
  provenHistologyType: ProvenHistologyTypeEnum;
  isProvenHistology: boolean;
  isRoof: boolean;
  isPharyngealTonsil: boolean;
  isNasopharynxPosteriorWall: boolean;
  isNasopharynxLateralWall: boolean;
  isTorusTubarius: boolean;
  isPharyngealRecess: boolean;
  isInferiorSoftPalate: boolean;
  isOropharynxPosteriorWall: boolean;
  isOropharynxLateralWall: boolean;
  isTonsilLodge: boolean;
  isLateralPharyngealWall: boolean;
  isInferior: boolean;
  isTongueBase: boolean;
  isInferiorLingualTonsils: boolean;
  isEpiglottisUpperMargin: boolean;
  isInferiorValleculae: boolean;
  isHypopharynxPosteriorWall: boolean;
  isPiriformSinus: boolean;
  isPostcricoidRegion: boolean;
  orientationAxialType: OrientationAxialTypeEnum;

  isPharyngealMucosalSpacePms: boolean;
  isParapharyngealSpacePps: boolean;
  isMasticatorSpaceMs: boolean;
  isBuccalSpaceBs: boolean;
  isParotidSpacePs: boolean;
  isCarotidSpaceCs: boolean;
  isRetropharyngealSpaceRpsAndDangerSpace: boolean;
  isPerivertebralSpacePvsPrevertebral: boolean;
  isPerivertebralSpacePvsParaspinal: boolean;
  isVisceralSpaceVs: boolean;
  isAnteriorCervicalSpaceAcs: boolean;
  isPosteriorCervicalSpacePcs: boolean;
  isOralMucosalSpaceOms: boolean;
  isSublingualSpaceSls: boolean;
  isSubmandibularSpaceSms: boolean;
  isRootOfTheTongueRot: boolean;
  isFasciaSpacesLingualTonsils: boolean;
  isFasciaSpacesValleculae: boolean;
  isTransspatialGrowth: boolean;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  asymmetryType: AsymmetryTypeEnum;
  shapeType: ShapeTypeEnum;

  isMicroscopicFat: boolean;
  isMacroscopicFat: boolean;
  isCyst: boolean;
  cystType: CystTypeEnum;
  isHemorrhageHemosiderin: boolean;
  isFocalSignalVoids: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  isTissueBridging: boolean;
  isGasFluidLevel: boolean;
  isToothBoneFormation: boolean;
  isEdematousSwelling: boolean;
  isExophytic: boolean;
  isEndophytic: boolean;
  cmEnhancementDistributionType: CmEnhancementDistributionTypeEnum;

  isLymphadenitis: boolean;
  isSoftTissueEdema: boolean;
  isImbibitionOfPerifocalFatTissue: boolean;
  isAffectionOfParapharyngealFatStrips: boolean;
  isSoftTissueEmphysema: boolean;
  isHyperplasiaRightTonsillaPalatina: boolean;
  isHyperplasiaLeftTonsilPalatina: boolean;
  isHyperplasiaTonsillaPharyngea: boolean;
  isTopographicalRelationToRecurrentLaryngealNerve: boolean;
  isEdemaOfTheRightLongusColliMuscle: boolean;
  isEdemaOfTheLeftLongusColliMuscle: boolean;
  isOsteomyelitis: boolean;
  isOsteomyelitisMaxilla: boolean;
  isOsteomyelitisMandible: boolean;
  isOsteomyelitisCorpusMandibulae: boolean;
  isOsteomyelitisRamusMandibulae: boolean;
  isOsteolysis: boolean;
  isOsteolysisMaxilla: boolean;
  isOsteolysisMandible: boolean;
  isOsteolysisCorpusMandibulae: boolean;
  isOsteolysisRamusMandibulae: boolean;
  isMediastinitis: boolean;
  isAirwayObstruction: boolean;
  isThrombosisRightInternalJugularVein: boolean;
  isThrombosisLeftInternalJugularVein: boolean;
  isPseudoaneurysmRightIca: boolean;
  isPseudoaneurysmLeftIca: boolean;
  isStenosisRightIca: boolean;
  isStenosisLeftIca: boolean;
  isAffectionSpinalCanal: boolean;
  isEpiduralExtension: boolean;
  differentialDiagnosis1: DifferentialDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  differentialDiagnosis2: DifferentialDiagnosisTypeEnum;
  isSubordinate: boolean;
  isMoreThan1LesionSameEntity: boolean;

  constructor() {
    super();

    // Common
    this.cmEnhancementQuantitativeType = CmEnhancementQuantitativeTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;

    // AnatomicVariantDysplasia
    this.anatomicVariantType = AnatomicVariantTypeEnum.None;
    this.gradingType = GradingTypeEnum.None;
    this.isChoanalAtresiaRight = false;
    this.isChoanalAtresiaLeft = false;
    this.cleftLipAndPalateType = CleftLipAndPalateTypeEnum.None;
    this.isCleftLipAndPalateRight = false;
    this.isCleftLipAndPalateLeft = false;
    this.isZenkerSDiverticulum = false;
    this.isFat = false;
    this.isMacroscopic = false;
    this.isMicroscopic = false;
    this.isCysticChange = false;

    // Mass
    this.descriptionType = DescriptionTypeEnum.None;
    this.provenHistologyType = ProvenHistologyTypeEnum.None;
    this.isProvenHistology = false;
    this.isRoof = false;
    this.isPharyngealTonsil = false;
    this.isNasopharynxPosteriorWall = false;
    this.isNasopharynxLateralWall = false;
    this.isTorusTubarius = false;
    this.isPharyngealRecess = false;
    this.isInferiorSoftPalate = false;
    this.isOropharynxPosteriorWall = false;
    this.isOropharynxLateralWall = false;
    this.isTonsilLodge = false;
    this.isLateralPharyngealWall = false;
    this.isInferior = false;
    this.isTongueBase = false;
    this.isInferiorLingualTonsils = false;
    this.isEpiglottisUpperMargin = false;
    this.isInferiorValleculae = false;
    this.isHypopharynxPosteriorWall = false;
    this.isPiriformSinus = false;
    this.isPostcricoidRegion = false;
    this.orientationAxialType = OrientationAxialTypeEnum.None;

    this.isPharyngealMucosalSpacePms = false;
    this.isParapharyngealSpacePps = false;
    this.isMasticatorSpaceMs = false;
    this.isBuccalSpaceBs = false;
    this.isParotidSpacePs = false;
    this.isCarotidSpaceCs = false;
    this.isRetropharyngealSpaceRpsAndDangerSpace = false;
    this.isPerivertebralSpacePvsPrevertebral = false;
    this.isPerivertebralSpacePvsParaspinal = false;
    this.isVisceralSpaceVs = false;
    this.isAnteriorCervicalSpaceAcs = false;
    this.isPosteriorCervicalSpacePcs = false;
    this.isOralMucosalSpaceOms = false;
    this.isSublingualSpaceSls = false;
    this.isSubmandibularSpaceSms = false;
    this.isRootOfTheTongueRot = false;
    this.isFasciaSpacesLingualTonsils = false;
    this.isFasciaSpacesValleculae = false;
    this.isTransspatialGrowth = false;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.asymmetryType = AsymmetryTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;

    this.isMicroscopicFat = false;
    this.isMacroscopicFat = false;
    this.isCyst = false;
    this.cystType = CystTypeEnum.None;
    this.isHemorrhageHemosiderin = false;
    this.isFocalSignalVoids = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.isTissueBridging = false;
    this.isGasFluidLevel = false;
    this.isToothBoneFormation = false;
    this.isEdematousSwelling = false;
    this.isExophytic = false;
    this.isEndophytic = false;
    this.cmEnhancementDistributionType = CmEnhancementDistributionTypeEnum.None;

    this.isLymphadenitis = false;
    this.isSoftTissueEdema = false;
    this.isImbibitionOfPerifocalFatTissue = false;
    this.isAffectionOfParapharyngealFatStrips = false;
    this.isSoftTissueEmphysema = false;
    this.isHyperplasiaRightTonsillaPalatina = false;
    this.isHyperplasiaLeftTonsilPalatina = false;
    this.isHyperplasiaTonsillaPharyngea = false;
    this.isTopographicalRelationToRecurrentLaryngealNerve = false;
    this.isEdemaOfTheRightLongusColliMuscle = false;
    this.isEdemaOfTheLeftLongusColliMuscle = false;
    this.isOsteomyelitis = false;
    this.isOsteomyelitisMaxilla = false;
    this.isOsteomyelitisMandible = false;
    this.isOsteomyelitisCorpusMandibulae = false;
    this.isOsteomyelitisRamusMandibulae = false;
    this.isOsteolysis = false;
    this.isOsteolysisMaxilla = false;
    this.isOsteolysisMandible = false;
    this.isOsteolysisCorpusMandibulae = false;
    this.isOsteolysisRamusMandibulae = false;
    this.isMediastinitis = false;
    this.isAirwayObstruction = false;
    this.isThrombosisRightInternalJugularVein = false;
    this.isThrombosisLeftInternalJugularVein = false;
    this.isPseudoaneurysmRightIca = false;
    this.isPseudoaneurysmLeftIca = false;
    this.isStenosisRightIca = false;
    this.isStenosisLeftIca = false;
    this.isAffectionSpinalCanal = false;
    this.isEpiduralExtension = false;
    this.differentialDiagnosis1 = DifferentialDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.differentialDiagnosis2 = DifferentialDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.isMoreThan1LesionSameEntity = false;
  }
}
