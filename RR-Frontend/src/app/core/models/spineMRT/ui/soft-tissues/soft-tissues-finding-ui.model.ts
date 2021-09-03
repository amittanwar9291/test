import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  ArteriopathyTypeEnum,
  BonyAvulsionTypeEnum,
  CharacterizationTypeEnum,
  ClassificationMunichConsensusTypeEnum,
  ContrastEnhancementTypeEnum,
  HematomaCharacterizationTypeEnum,
  HomogeneityTypeEnum,
  LocalizationWithinMuscleTypeEnum,
  MuscleAtrophyTypeEnum,
  NeurofibromatosisTypeEnum,
  PathologyTypeEnum,
  SoftTissueDiagnosisTypeEnum,
  SoftTissueFindingTypeEnum,
  VesselsSideTypeEnum,
  VesselsUretersTypeEnum
} from '@enums/spineMRT/soft-tissues';
import { FindingBase } from '@models/shared/finding/finding.base';
import { AxialLocation } from '@models/shared/spine/localizers/axial-location.model';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

export class SoftTissuesFindingUiModel extends FindingBase {
  findingType: SoftTissueFindingTypeEnum;

  // Common
  descriptionType: DescriptionTypeEnum;
  sizeDiameterInMm: number;
  differentialDiagnosis: SoftTissueDiagnosisTypeEnum;
  signalT1w: number;
  signalT2w: number;
  homogeneityType: HomogeneityTypeEnum;
  contrastEnhancementType: ContrastEnhancementTypeEnum;
  cmEnhancementHomogeneityType: HomogeneityTypeEnum;
  differentialDiagnosis1: SoftTissueDiagnosisTypeEnum;
  differentialDiagnosis2: SoftTissueDiagnosisTypeEnum;
  isSecondary: boolean;
  isMoreThanOneLesion: boolean;

  // ParaspinalSpace
  spineLocation1: SpineLocation;
  expansionInMm: number;
  spineAxialLocation: AxialLocation;
  isHypointensAfterFatSaturation: boolean;
  isIsointenseToCerebrospinalFluid: boolean;
  isMirrorFormation: boolean;
  isCalcification: boolean;
  isCapsule: boolean;
  isSurroundingInflammatoryReaction: boolean;
  isCommunicationWithIntraduralSpace: boolean;
  isInfiltration: boolean;
  isBones: boolean;
  isMuscle: boolean;
  isNerveRoot: boolean;
  spineLocationBones: SpineDirectionalLocation;
  spineLocation2: SpineLocation;

  // IntraduralExtramedullarySpace
  spineLocationDisks1: SpineDirectionalLocation;
  maxCraniocaudalDiameter: number;
  isSepta: boolean;
  isThickeningOfTheNerve: boolean;
  isNecrosis: boolean;
  isHemorrhage: boolean;
  isTargetSign: boolean;
  isHourglassShape: boolean;
  isSpindleShaped: boolean;
  isExtensionOsseousNeuralForamen: boolean;
  isScalloping: boolean;
  isOsteolysis: boolean;
  spineLocationDisks2: SpineDirectionalLocation;
  spineLocationDisks3: SpineDirectionalLocation;
  neurofibromatosisType: NeurofibromatosisTypeEnum;
  isSuspicionOf: boolean;

  // LymphNodes
  isCervical: boolean;
  isCervicalRight: boolean;
  isCervicalLeft: boolean;
  isParaaortal: boolean;
  isAortocaval: boolean;
  isParailiacal: boolean;
  isParailiacalRight: boolean;
  isParailiacalLeft: boolean;
  isPreSacral: boolean;
  isPreSacralRight: boolean;
  isPreSacralLeft: boolean;
  characterizationType: CharacterizationTypeEnum;
  lymphadenopathyInMm: number;

  // VesselsUreters
  vesselsUretersType: VesselsUretersTypeEnum;
  vesselsSide: VesselsSideTypeEnum;
  arteriopathyType: ArteriopathyTypeEnum;
  aneurysmMaximumDiameter: number;
  pathologyType: PathologyTypeEnum;
  isUreterRight: boolean;
  isUreterLeft: boolean;

  // ParavertebralMuscles
  isLongissimusCapitisMuscle: boolean;
  isLevatorScapulaeMuscle: boolean;
  isSemispinalisColliMuscle: boolean;
  isSemispinalisCapitisMuscle: boolean;
  isSpleniusCapitisMuscle: boolean;
  isTrapeziusMuscle: boolean;
  isErectorSpinaeMuscle: boolean;
  isIliocostalisMuscle: boolean;
  isLongissimusMuscle: boolean;
  isQuadratusLumborumMuscle: boolean;
  isPsoasMajorMuscle: boolean;
  isMultifidusMuscle: boolean;
  localizationWithinTheMuscleType: LocalizationWithinMuscleTypeEnum;
  isMuscleLesion: boolean;
  classificationMunichConsensusType: ClassificationMunichConsensusTypeEnum;
  isDiameterOfRupture: boolean;
  isRetraction: boolean;
  retractionInMm: number;
  isWavyAppearanceOfTheFibers: boolean;
  isOsseousAvulsion: boolean;
  bonyAvulsionType: BonyAvulsionTypeEnum;
  isHematoma: boolean;
  isIntramuscularly: boolean;
  isInterfascial: boolean;
  isIntermuscular: boolean;
  hematomaCharacterizationType: HematomaCharacterizationTypeEnum;
  isFattyDegeneration: boolean;
  isMuscleHypertrophy: boolean;
  isMuscleAtrophy: boolean;
  muscleAtrophyType: MuscleAtrophyTypeEnum;
  isApophysitis: boolean;
  isFascialRupture: boolean;
  isMuscleHernia: boolean;

  directionalLocationShown: boolean;
  spineLocationShown: boolean;

  constructor() {
    super();

    this.findingType = SoftTissueFindingTypeEnum.None;

    // COMMON
    this.descriptionType = DescriptionTypeEnum.None;
    this.sizeDiameterInMm = null;
    this.differentialDiagnosis = SoftTissueDiagnosisTypeEnum.None;
    this.signalT1w = 0;
    this.signalT2w = 0;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
    this.cmEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.differentialDiagnosis1 = SoftTissueDiagnosisTypeEnum.None;
    this.differentialDiagnosis2 = SoftTissueDiagnosisTypeEnum.None;
    this.isSecondary = false;
    this.isMoreThanOneLesion = false;

    // ParaspinalSpace
    this.spineLocation1 = new SpineLocation();
    this.expansionInMm = null;
    this.spineAxialLocation = new AxialLocation();
    this.isHypointensAfterFatSaturation = false;
    this.isIsointenseToCerebrospinalFluid = false;
    this.isMirrorFormation = false;
    this.isCalcification = false;
    this.isCapsule = false;
    this.isSurroundingInflammatoryReaction = false;
    this.isCommunicationWithIntraduralSpace = false;
    this.isInfiltration = false;
    this.isBones = false;
    this.isMuscle = false;
    this.isNerveRoot = false;
    this.spineLocationBones = new SpineDirectionalLocation();
    this.spineLocation2 = new SpineLocation();

    // IntraduralExtramedullarySpace
    this.spineLocationDisks1 = new SpineDirectionalLocation();
    this.maxCraniocaudalDiameter = null;
    this.isSepta = false;
    this.isThickeningOfTheNerve = false;
    this.isNecrosis = false;
    this.isHemorrhage = false;
    this.isTargetSign = false;
    this.isHourglassShape = false;
    this.isSpindleShaped = false;
    this.isExtensionOsseousNeuralForamen = false;
    this.isScalloping = false;
    this.isOsteolysis = false;
    this.spineLocationDisks2 = new SpineDirectionalLocation();
    this.spineLocationDisks3 = new SpineDirectionalLocation();
    this.neurofibromatosisType = NeurofibromatosisTypeEnum.None;
    this.isSuspicionOf = false;

    // LymphNodes
    this.isCervical = false;
    this.isCervicalRight = false;
    this.isCervicalLeft = false;
    this.isParaaortal = false;
    this.isAortocaval = false;
    this.isParailiacal = false;
    this.isParailiacalRight = false;
    this.isParailiacalLeft = false;
    this.isPreSacral = false;
    this.isPreSacralRight = false;
    this.isPreSacralLeft = false;
    this.characterizationType = CharacterizationTypeEnum.None;
    this.lymphadenopathyInMm = null;

    // VesselsUreters
    this.vesselsUretersType = VesselsUretersTypeEnum.None;
    this.vesselsSide = VesselsSideTypeEnum.None;
    this.arteriopathyType = ArteriopathyTypeEnum.None;
    this.aneurysmMaximumDiameter = null;
    this.pathologyType = PathologyTypeEnum.None;
    this.isUreterRight = false;
    this.isUreterLeft = false;

    // ParavertebralMuscles
    this.isLongissimusCapitisMuscle = false;
    this.isLevatorScapulaeMuscle = false;
    this.isSemispinalisColliMuscle = false;
    this.isSemispinalisCapitisMuscle = false;
    this.isSpleniusCapitisMuscle = false;
    this.isTrapeziusMuscle = false;
    this.isErectorSpinaeMuscle = false;
    this.isIliocostalisMuscle = false;
    this.isLongissimusMuscle = false;
    this.isQuadratusLumborumMuscle = false;
    this.isPsoasMajorMuscle = false;
    this.isMultifidusMuscle = false;
    this.localizationWithinTheMuscleType = LocalizationWithinMuscleTypeEnum.None;
    this.isMuscleLesion = false;
    this.classificationMunichConsensusType = ClassificationMunichConsensusTypeEnum.None;
    this.isDiameterOfRupture = false;
    this.isRetraction = false;
    this.retractionInMm = null;
    this.isWavyAppearanceOfTheFibers = false;
    this.isOsseousAvulsion = false;
    this.bonyAvulsionType = BonyAvulsionTypeEnum.None;
    this.isHematoma = false;
    this.isIntramuscularly = false;
    this.isInterfascial = false;
    this.isIntermuscular = false;
    this.hematomaCharacterizationType = HematomaCharacterizationTypeEnum.None;
    this.isFattyDegeneration = false;
    this.isMuscleHypertrophy = false;
    this.isMuscleAtrophy = false;
    this.muscleAtrophyType = MuscleAtrophyTypeEnum.None;
    this.isApophysitis = false;
    this.isFascialRupture = false;
    this.isMuscleHernia = false;

    this.directionalLocationShown = false;
    this.spineLocationShown = false;
  }
}
