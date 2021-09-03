import { FindingBase } from '@models/shared/finding/finding.base';
import {
  PharynxFindingTypeEnum,
  DifferentialDiagnosisTypeEnum,
  MarginTypeEnum,
  CmEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum,
  AsymmetryTypeEnum,
  CmEnhancementDistributionTypeEnum,
  CystTypeEnum,
  ShapeTypeEnum
} from '@enums/neckMRT/pharynx';

export class PharynxFindingBaseUiModel extends FindingBase {
  findingType: PharynxFindingTypeEnum;

  // Common
  isDiffusionRestriction: boolean;
  cmEnhancementQuantitativeType: CmEnhancementQuantitativeTypeEnum;
  homogeneityType: HomogeneityTypeEnum;

  // Mass
  differentialDiagnosis: DifferentialDiagnosisTypeEnum;
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
  isNasopharynx: boolean;
  isOropharynx: boolean;
  isHypopharynx: boolean;
  signalT1wType: number;
  signalT2wType: number;
  isNecrosis: boolean;
  isDisplacing: boolean;
  isInvasive: boolean;

  asymmetryType: AsymmetryTypeEnum;
  marginType: MarginTypeEnum;
  massHomogeneityType: HomogeneityTypeEnum;
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
  isMoreThan1LesionSameEntity: boolean;

  constructor() {
    super();
    this.findingType = PharynxFindingTypeEnum.None;

    // Common
    this.isDiffusionRestriction = false;
    this.cmEnhancementQuantitativeType = CmEnhancementQuantitativeTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;

    // Mass
    this.differentialDiagnosis = DifferentialDiagnosisTypeEnum.None;
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
    this.isNasopharynx = false;
    this.isOropharynx = false;
    this.isHypopharynx = false;

    this.asymmetryType = AsymmetryTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.massHomogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;

    this.signalT1wType = 0;
    this.signalT2wType = 0;
    this.isNecrosis = false;
    this.isDisplacing = false;
    this.isInvasive = false;
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
    this.isMoreThan1LesionSameEntity = false;
  }
}
