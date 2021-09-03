import { FindingBase } from '@models/shared/finding/finding.base';
import {
  MarginTypeEnum,
  DifferentialDiagnoseTypeEnum,
  CortexTypeEnum,
  CmEnhancementTypeEnum,
  QuantitativeTypeEnum
} from '@enums/handMRT/bones';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { BonesFindingTypeEnum } from '@enums/handMRT/bones/bones-finding-type.enum';

export class BonesFindingBaseApiModel extends FindingBase {
  findingType: BonesFindingTypeEnum;
  isBoneMarrowEdema: boolean;
  isSoftTissueEdema: boolean;

  // Tab 1
  tumorDifferentialDiagnosisType: DifferentialDiagnoseTypeEnum;
  isEpiphyseal: boolean;
  isMetaphyseal: boolean;

  // Tab 2
  marginType: MarginTypeEnum;
  homogenityType: HomogeneityTypeEnum;
  cortexType: CortexTypeEnum;
  signalT1w: string;
  signalT2w: string;
  contrastEnhancementType: QuantitativeTypeEnum;
  contrastHomogenityType: HomogeneityTypeEnum;
  contrastDistributionType: CmEnhancementTypeEnum;
  isRound: boolean;
  isLobulated: boolean;
  isBroadBased: boolean;
  isPedunculated: boolean;
  isProjectingAway: boolean;

  // Tab 3
  isSeptated: boolean;
  isFluidLevel: boolean;
  isCalcification: boolean;
  isCentral: boolean;
  isDiffuse: boolean;
  isNidus: boolean;
  isT2wHyperintense: boolean;
  isOsteoidMatrix: boolean;
  isFatSignal: boolean;
  isSunBurst: boolean;
  isCodmanSpur: boolean;
  isCartilageCap: boolean;
  isCapT2wHyperintense: boolean;
  isScleroticMargin: boolean;
  isMarginWithLowSignal: boolean;
  isExpansile: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isSclerotic: boolean;
  isSoftTissueInfiltration: boolean;

  constructor() {
    super();
    this.findingType = BonesFindingTypeEnum.None;
    this.isBoneMarrowEdema = false;
    this.isSoftTissueEdema = false;

    // Tab 1
    this.tumorDifferentialDiagnosisType = DifferentialDiagnoseTypeEnum.None;
    this.isEpiphyseal = false;
    this.isMetaphyseal = false;

    // Tab 2
    this.marginType = MarginTypeEnum.None;
    this.homogenityType = HomogeneityTypeEnum.None;
    this.cortexType = CortexTypeEnum.None;
    this.signalT1w = 'None';
    this.signalT2w = 'None';
    this.contrastEnhancementType = QuantitativeTypeEnum.None;
    this.contrastHomogenityType = HomogeneityTypeEnum.None;
    this.contrastDistributionType = CmEnhancementTypeEnum.None;
    this.isRound = false;
    this.isLobulated = false;
    this.isBroadBased = false;
    this.isPedunculated = false;
    this.isProjectingAway = false;

    // Tab 3
    this.isSeptated = false;
    this.isFluidLevel = false;
    this.isCalcification = false;
    this.isCentral = false;
    this.isDiffuse = false;
    this.isNidus = false;
    this.isT2wHyperintense = false;
    this.isOsteoidMatrix = false;
    this.isFatSignal = false;
    this.isSunBurst = false;
    this.isCodmanSpur = false;
    this.isCartilageCap = false;
    this.isCapT2wHyperintense = false;
    this.isScleroticMargin = false;
    this.isMarginWithLowSignal = false;
    this.isExpansile = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isSclerotic = false;
    this.isSoftTissueInfiltration = false;
  }
}
