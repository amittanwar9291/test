import { BonesFindingTypeEnum, DifferentialDiagnosisTypeEnum } from '@enums/feetMRT/bones';
import {
  BonesLimitationTypeEnum,
  BonesHomogeneityTypeEnum,
  ContrastAgentEnhancementTypeEnum,
  ContrastAgentEnhancementFormTypeEnum,
  CortexTypeEnum,
  HistologyTypeEnum,
  LocalPropagationTypeEnum
} from '@enums/feetMRT/bones/space-requirement';
import { FindingBase } from '@models/shared/finding/finding.base';

export class BonesFindingBaseUiModel extends FindingBase {
  findingType: BonesFindingTypeEnum;
  spaceRequirementDifferentialDiagnosis: DifferentialDiagnosisTypeEnum;
  limitationType: BonesLimitationTypeEnum;
  homogeneityType: BonesHomogeneityTypeEnum;
  cortexType: CortexTypeEnum;
  contrastAgentEnhancementType: ContrastAgentEnhancementTypeEnum;
  noCaEnhancementHomogeneityType: BonesHomogeneityTypeEnum;
  contrastAgentEnhancementFormType: ContrastAgentEnhancementFormTypeEnum;

  signalT1w: number;
  signalT2w: number;

  isEpiphyseal: boolean;
  isMetaphyseal: boolean;
  isRound: boolean;
  isLobulated: boolean;
  isSessile: boolean;
  isPedunculated: boolean;
  isOrientationFromTheEpiphysisTowardTheDiaphysis: boolean;
  isSeptatedChambered: boolean;
  isLiquidLevel: boolean;
  isCalcification: boolean;
  isCentral: boolean;
  isDiffuse: boolean;
  isNidus: boolean;
  isNidusT2wHyperintense: boolean;
  isOsteoidMatrix: boolean;
  isFatSignal: boolean;
  isPeriostealReaction: boolean;
  isPeriostealSpur: boolean;
  isCartilageCap: boolean;
  isCapT2wHyperintense: boolean;
  isScleroticMargin: boolean;
  isEdgeWithLowSignal: boolean;
  isExpanding: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isSclerotic: boolean;
  isInfiltrationOfSoftTissue: boolean;
  isEnvironmentalReactionSoftTissueEdema: boolean;
  isEnvironmentalReactionBoneMarrowEdema: boolean;

  maxThicknessInMm: number;
  histologyType: HistologyTypeEnum;
  isDiaphyseal: boolean;
  isGeographic: boolean;
  isInfiltrationOfAdjacentBones: boolean;
  isPathologicFracture: boolean;
  isPathologicalFractureSuspicionOf: boolean;
  isPerifocalSclerosis: boolean;
  isSurroundingInflammatoryReaction: boolean;
  localPropagationType: LocalPropagationTypeEnum;
  differentialDiagnosis1: DifferentialDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  differentialDiagnosis2: DifferentialDiagnosisTypeEnum;
  differentialDiagnosis3: DifferentialDiagnosisTypeEnum;
  isMoreThanOneLesionSameEntity: boolean;
  isInsideTheBonePrimarilyAffected: boolean;

  constructor() {
    super();
    this.findingType = BonesFindingTypeEnum.None;
    this.spaceRequirementDifferentialDiagnosis = DifferentialDiagnosisTypeEnum.None;
    this.limitationType = BonesLimitationTypeEnum.None;
    this.homogeneityType = BonesHomogeneityTypeEnum.None;
    this.cortexType = CortexTypeEnum.None;
    this.contrastAgentEnhancementType = ContrastAgentEnhancementTypeEnum.None;
    this.noCaEnhancementHomogeneityType = BonesHomogeneityTypeEnum.None;
    this.contrastAgentEnhancementFormType = ContrastAgentEnhancementFormTypeEnum.None;

    this.signalT2w = 0;
    this.signalT1w = 0;

    this.isRound = false;
    this.isLobulated = false;
    this.isSessile = false;
    this.isPedunculated = false;
    this.isOrientationFromTheEpiphysisTowardTheDiaphysis = false;
    this.isSeptatedChambered = false;
    this.isLiquidLevel = false;
    this.isCalcification = false;
    this.isCentral = false;
    this.isDiffuse = false;
    this.isNidus = false;
    this.isNidusT2wHyperintense = false;
    this.isOsteoidMatrix = false;
    this.isFatSignal = false;
    this.isPeriostealReaction = false;
    this.isPeriostealSpur = false;
    this.isCartilageCap = false;
    this.isCapT2wHyperintense = false;
    this.isScleroticMargin = false;
    this.isEdgeWithLowSignal = false;
    this.isExpanding = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isSclerotic = false;
    this.isInfiltrationOfSoftTissue = false;
    this.isEnvironmentalReactionSoftTissueEdema = false;
    this.isEnvironmentalReactionBoneMarrowEdema = false;

    this.histologyType = HistologyTypeEnum.None;
    this.isEpiphyseal = false;
    this.isMetaphyseal = false;
    this.isDiaphyseal = false;
    this.isGeographic = false;
    this.isInfiltrationOfAdjacentBones = false;
    this.isPathologicFracture = false;
    this.isPathologicalFractureSuspicionOf = false;
    this.isPerifocalSclerosis = false;
    this.isSurroundingInflammatoryReaction = false;
    this.maxThicknessInMm = null;
    this.localPropagationType = LocalPropagationTypeEnum.None;
    this.differentialDiagnosis1 = DifferentialDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.differentialDiagnosis2 = DifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis3 = DifferentialDiagnosisTypeEnum.None;
    this.isMoreThanOneLesionSameEntity = false;
    this.isInsideTheBonePrimarilyAffected = false;
  }
}
