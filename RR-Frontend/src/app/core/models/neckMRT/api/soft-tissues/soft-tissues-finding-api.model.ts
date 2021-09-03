import { FindingBase } from '@models/shared/finding/finding.base';
import { SoftTissuesFindingTypeEnum } from '@enums/neckMRT/soft-tissues/';

import {
  AnterolateralTypeEnum,
  CharacterizationCystTypeEnum,
  LateralNeckCystTypeEnum,
  LNCDifferentialDiagnosisEnum,
  LocalizationTypeEnum,
  PeriauricularTypeEnum,
  SideTypeEnum,
  TCDifferentialDiagnosisEnum
} from '@enums/neckMRT/soft-tissues/cysts';

import {
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  CystTypeEnum,
  DifferentialDiagnosisTypeEnum,
  HistologyProvenTypeEnum,
  HomogeneityTypeEnum,
  MarginTypeEnum,
  OrientationAxialTypeEnum,
  TrachealDisplacementTypeEnum,
  VascularNerveSheathTypeEnum
} from '@enums/neckMRT/soft-tissues/mass-inflammation';
import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export class SoftTissuesFindingApiModel extends FindingBase {
  findingType: SoftTissuesFindingTypeEnum;

  // Common
  isSubordinate: boolean;
  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileApiModel;
  imageFileId: string;

  // Cysts
  characterizationCystType: CharacterizationCystTypeEnum;
  isMNCThickeningOfTheCystWall: boolean;
  isMNCStreakySignalEnhancementFatSaturatedT2wSequence: boolean;
  isMNCStreakyContrastEnhancementPerifocal: boolean;
  isCutaneousFistula: boolean;
  sideType: SideTypeEnum;
  localizationType: LocalizationTypeEnum;
  periauricularType: PeriauricularTypeEnum;
  anterolateralType: AnterolateralTypeEnum;
  lateralNeckCystType: LateralNeckCystTypeEnum;
  isLNCThickeningOfTheCystWall: boolean;
  isLNCStreakySignalEnhancementFatSaturatedT2wSequence: boolean;
  isLNCStreakyContrastEnhancementPerifocal: boolean;
  isSuppurativeThyroiditis: boolean;
  lncDifferentialDiagnosis: LNCDifferentialDiagnosisEnum;
  isMedianToThePosteriorWallOfTheNasopharynx: boolean;
  isTCThickeningOfTheCystWall: boolean;
  isTCStreakySignalEnhancementFatSaturatedT2wSequence: boolean;
  isTCStreakyContrastEnhancementPerifocal: boolean;
  tcDifferentialDiagnosis: TCDifferentialDiagnosisEnum;
  isCystSubordinate: boolean;

  // MassInflammation
  descriptionType: DescriptionTypeEnum;
  characterizationIDifferentialDiagnosis: DifferentialDiagnosisTypeEnum;
  isHistologyProven: boolean;
  histologyProvenType: HistologyProvenTypeEnum;
  localizationReferenceVertebra: string;
  orientationAxialType: OrientationAxialTypeEnum;
  isPharyngealMucosalSpacePMS: boolean;
  isParapharyngealSpacePPS: boolean;
  isMastatorSpaceMS: boolean;
  isBuccalSpaceBS: boolean;
  isParotidSpacePS: boolean;
  isCarotidSpaceCS: boolean;
  isRetropharyngealSpaceRPSAndDangerSpace: boolean;
  isPerivertebralSpacePVSPrevertebral: boolean;
  isPerivertebralSpacePVSParaspinal: boolean;
  isVisceralSpaceVS: boolean;
  isAnteriorCervicalSpaceACS: boolean;
  isPosteriorCervicalSpacePCS: boolean;
  isOralMucosalSpaceOMS: boolean;
  isSublingualSpaceSLS: boolean;
  isSubmandibularSpaceSMS: boolean;
  isApexLinguae: boolean;
  isCorpusLinguae: boolean;
  isRadixLinguae: boolean;
  isTongueBaseTonsil: boolean;
  isValleculae: boolean;
  isTransspatialSpread: boolean;
  vascularNerveSheathType: VascularNerveSheathTypeEnum;
  isRegioParotideomasseterica: boolean;
  isBuccalRegion: boolean;
  isOralRegion: boolean;
  isMentalRegion: boolean;
  isSubmental: boolean;
  isUpperLip: boolean;
  isLowerLip: boolean;
  isPharyngealMuscles: boolean;
  isUvulaeMuscle: boolean;
  isLaryngealMuscles: boolean;
  isVocalMuscle: boolean;
  isIntrinsicMusclesOfTheTongue: boolean;
  isGenioglossusMuscle: boolean;
  isHyoglossusMuscle: boolean;
  isFloorOfMouthMuscles: boolean;
  isMylohyoidMuscle: boolean;
  isGeniohyoidMuscle: boolean;
  isDigastricMuscle: boolean;
  isNeckMuscles: boolean;
  isLongusCapitisMuscle: boolean;
  isLongusColliMuscle: boolean;
  isLevatorScapulaeMuscle: boolean;
  isScalenusAnteriorMuscle: boolean;
  isScalenusMediusMuscle: boolean;
  isScalenusPosteriorMuscle: boolean;
  isSternocleidomastoideusMuscle: boolean;
  isParaspinalMuscles: boolean;
  isDeepOrIntrinsicMusclesMedialTract: boolean;
  isDeepOrIntrinsicMusclesLateralTract: boolean;
  isTrapeziusMuscle: boolean;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  shapeDifferentialDiagnosis: DifferentialDiagnosisTypeEnum;
  signalT1w: string;
  signalT2w: string;
  isDiffusionRestriction: boolean;
  isMicroscopicFat: boolean;
  isMacroscopicFat: boolean;
  isCyst: boolean;
  cystType: CystTypeEnum;
  isHemorrhageOrHemosiderin: boolean;
  isCalcifications: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  isToothOrBone: boolean;
  isNecrosis: boolean;
  isAirFluidLevel: boolean;
  isExophytic: boolean;
  isEndophytic: boolean;
  isDisplacing: boolean;
  isInvasive: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  significantHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  isLymphadenitis: boolean;
  isSoftTissueEdema: boolean;
  isObliterationOfPerifocalFatTissue: boolean;
  isSoftTissueEmphysema: boolean;
  isAdjacentToTheRecurrentLaryngealNerve: boolean;
  isEdemaOfTheLongusColliMuscleRight: boolean;
  isEdemaLongusColliMuscleLeft: boolean;
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
  airwayObstructionMinDiameterInMm: number;
  isTrachealDisplacement: boolean;
  trachealDisplacementType: TrachealDisplacementTypeEnum;
  isActiveBleeding: boolean;
  isInternalJugularVeinThrombosisRight: boolean;
  isInternalJugularVeinThrombosisLeft: boolean;
  isPseudoaneurysmICARight: boolean;
  isPseudoaneurysmICALeft: boolean;
  isStenosisICARight: boolean;
  isStenosisICALeft: boolean;
  isAffectionSpinalCanal: boolean;
  isEpiduralExtension: boolean;
  differentialDiagnosis1: DifferentialDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  differentialDiagnosis2: DifferentialDiagnosisTypeEnum;
  isAbove1LesionSameEntity: boolean;
  isDisseminated: boolean;

  constructor() {
    super();
    this.findingType = SoftTissuesFindingTypeEnum.None;

    // Common
    this.isSubordinate = false;
    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;

    // Cysts
    this.characterizationCystType = CharacterizationCystTypeEnum.None;
    this.isMNCThickeningOfTheCystWall = false;
    this.isMNCStreakySignalEnhancementFatSaturatedT2wSequence = false;
    this.isMNCStreakyContrastEnhancementPerifocal = false;
    this.isCutaneousFistula = false;
    this.sideType = SideTypeEnum.None;
    this.localizationType = LocalizationTypeEnum.None;
    this.periauricularType = PeriauricularTypeEnum.None;
    this.anterolateralType = AnterolateralTypeEnum.None;
    this.lateralNeckCystType = LateralNeckCystTypeEnum.None;
    this.isLNCThickeningOfTheCystWall = false;
    this.isLNCStreakySignalEnhancementFatSaturatedT2wSequence = false;
    this.isLNCStreakyContrastEnhancementPerifocal = false;
    this.isSuppurativeThyroiditis = false;
    this.lncDifferentialDiagnosis = LNCDifferentialDiagnosisEnum.None;
    this.isMedianToThePosteriorWallOfTheNasopharynx = false;
    this.isTCThickeningOfTheCystWall = false;
    this.isTCStreakySignalEnhancementFatSaturatedT2wSequence = false;
    this.isTCStreakyContrastEnhancementPerifocal = false;
    this.tcDifferentialDiagnosis = TCDifferentialDiagnosisEnum.None;
    this.isCystSubordinate = false;

    // MassInflammation
    this.descriptionType = DescriptionTypeEnum.None;
    this.characterizationIDifferentialDiagnosis = DifferentialDiagnosisTypeEnum.None;
    this.isHistologyProven = false;
    this.histologyProvenType = HistologyProvenTypeEnum.None;
    this.localizationReferenceVertebra = 'None';
    this.orientationAxialType = OrientationAxialTypeEnum.None;
    this.isPharyngealMucosalSpacePMS = false;
    this.isParapharyngealSpacePPS = false;
    this.isMastatorSpaceMS = false;
    this.isBuccalSpaceBS = false;
    this.isParotidSpacePS = false;
    this.isCarotidSpaceCS = false;
    this.isRetropharyngealSpaceRPSAndDangerSpace = false;
    this.isPerivertebralSpacePVSPrevertebral = false;
    this.isPerivertebralSpacePVSParaspinal = false;
    this.isVisceralSpaceVS = false;
    this.isAnteriorCervicalSpaceACS = false;
    this.isPosteriorCervicalSpacePCS = false;
    this.isOralMucosalSpaceOMS = false;
    this.isSublingualSpaceSLS = false;
    this.isSubmandibularSpaceSMS = false;
    this.isApexLinguae = false;
    this.isCorpusLinguae = false;
    this.isRadixLinguae = false;
    this.isTongueBaseTonsil = false;
    this.isValleculae = false;
    this.isTransspatialSpread = false;
    this.vascularNerveSheathType = VascularNerveSheathTypeEnum.None;
    this.isRegioParotideomasseterica = false;
    this.isBuccalRegion = false;
    this.isOralRegion = false;
    this.isMentalRegion = false;
    this.isSubmental = false;
    this.isUpperLip = false;
    this.isLowerLip = false;
    this.isPharyngealMuscles = false;
    this.isUvulaeMuscle = false;
    this.isLaryngealMuscles = false;
    this.isVocalMuscle = false;
    this.isIntrinsicMusclesOfTheTongue = false;
    this.isGenioglossusMuscle = false;
    this.isHyoglossusMuscle = false;
    this.isFloorOfMouthMuscles = false;
    this.isMylohyoidMuscle = false;
    this.isGeniohyoidMuscle = false;
    this.isDigastricMuscle = false;
    this.isNeckMuscles = false;
    this.isLongusCapitisMuscle = false;
    this.isLongusColliMuscle = false;
    this.isLevatorScapulaeMuscle = false;
    this.isScalenusAnteriorMuscle = false;
    this.isScalenusMediusMuscle = false;
    this.isScalenusPosteriorMuscle = false;
    this.isSternocleidomastoideusMuscle = false;
    this.isParaspinalMuscles = false;
    this.isDeepOrIntrinsicMusclesMedialTract = false;
    this.isDeepOrIntrinsicMusclesLateralTract = false;
    this.isTrapeziusMuscle = false;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeDifferentialDiagnosis = DifferentialDiagnosisTypeEnum.None;
    this.signalT1w = 'None';
    this.signalT2w = 'None';
    this.isDiffusionRestriction = false;
    this.isMicroscopicFat = false;
    this.isMacroscopicFat = false;
    this.isCyst = false;
    this.cystType = CystTypeEnum.None;
    this.isHemorrhageOrHemosiderin = false;
    this.isCalcifications = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.isToothOrBone = false;
    this.isNecrosis = false;
    this.isAirFluidLevel = false;
    this.isExophytic = false;
    this.isEndophytic = false;
    this.isDisplacing = false;
    this.isInvasive = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.significantHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.isLymphadenitis = false;
    this.isSoftTissueEdema = false;
    this.isObliterationOfPerifocalFatTissue = false;
    this.isSoftTissueEmphysema = false;
    this.isAdjacentToTheRecurrentLaryngealNerve = false;
    this.isEdemaOfTheLongusColliMuscleRight = false;
    this.isEdemaLongusColliMuscleLeft = false;
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
    this.airwayObstructionMinDiameterInMm = null;
    this.isTrachealDisplacement = false;
    this.trachealDisplacementType = TrachealDisplacementTypeEnum.None;
    this.isActiveBleeding = false;
    this.isInternalJugularVeinThrombosisRight = false;
    this.isInternalJugularVeinThrombosisLeft = false;
    this.isPseudoaneurysmICARight = false;
    this.isPseudoaneurysmICALeft = false;
    this.isStenosisICARight = false;
    this.isStenosisICALeft = false;
    this.isAffectionSpinalCanal = false;
    this.isEpiduralExtension = false;
    this.differentialDiagnosis1 = DifferentialDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.differentialDiagnosis2 = DifferentialDiagnosisTypeEnum.None;
    this.isAbove1LesionSameEntity = false;
    this.isDisseminated = false;
  }
}
