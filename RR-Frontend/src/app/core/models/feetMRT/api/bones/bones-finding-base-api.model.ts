import { BonesFindingTypeEnum, DifferentialDiagnosisTypeEnum } from '@enums/feetMRT/bones';
import {
  BonesLimitationTypeEnum,
  BonesHomogeneityTypeEnum,
  ContrastAgentEnhancementTypeEnum,
  ContrastAgentEnhancementFormTypeEnum,
  CortexTypeEnum
} from '@enums/feetMRT/bones/space-requirement';
import { FindingBase } from '@models/shared/finding/finding.base';

export class BonesFindingBaseApiModel extends FindingBase {
  findingType: BonesFindingTypeEnum;
  spaceRequirementDifferentialDiagnosis: DifferentialDiagnosisTypeEnum;

  limitationType: BonesLimitationTypeEnum;
  homogeneityType: BonesHomogeneityTypeEnum;
  contrastAgentEnhancementType: ContrastAgentEnhancementTypeEnum;
  contrastAgentEnhancementFormType: ContrastAgentEnhancementFormTypeEnum;
  cortexType: CortexTypeEnum;
  noCaEnhancementHomogeneityType: BonesHomogeneityTypeEnum;

  signalT1w: string;
  signalT2w: string;
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
  isExpanding: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isSclerotic: boolean;
  isInfiltrationOfSoftTissue: boolean;
  isEnvironmentalReactionSoftTissueEdema: boolean;
  isEnvironmentalReactionBoneMarrowEdema: boolean;
  isCapT2wHyperintense: boolean;
  isCartilageCap: boolean;
  isPeriostealReaction: boolean;
  isPeriostealSpur: boolean;
  isScleroticMargin: boolean;
  isEdgeWithLowSignal: boolean;

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

    this.signalT1w = 'None';
    this.signalT2w = 'None';

    this.isEpiphyseal = false;
    this.isMetaphyseal = false;
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
    this.isEdgeWithLowSignal = false;
    this.isExpanding = false;
    this.isEnvironmentalReactionSoftTissueEdema = false;
    this.isEnvironmentalReactionBoneMarrowEdema = false;
    this.isInfiltrationOfSoftTissue = false;
    this.isScleroticMargin = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isSclerotic = false;
  }
}
