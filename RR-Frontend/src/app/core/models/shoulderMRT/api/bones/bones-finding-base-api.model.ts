import { FindingBase } from '@models/shared/finding/finding.base';
import {
  BonesFindingTypeEnum,
  TumorDifferentialDiagnosisEnum,
  SecondLocalizationTypeEnum,
  LimitationTypeEnum,
  HomogeneityTypeEnum,
  CortexTypeEnum,
  CmEnhancementQuantitativeTypeEnum
} from '@enums/shoulderMRT/bones';

export abstract class BonesFindingBaseApiModel extends FindingBase {
  findingType: BonesFindingTypeEnum;
  tumorDifferentialDiagnosis: TumorDifferentialDiagnosisEnum;
  secondLocalizationType: SecondLocalizationTypeEnum;
  limitationType: LimitationTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  cortexType: CortexTypeEnum;
  signalT2w: string;
  signalT1w: string;
  cMenhancementQuantitativeType: CmEnhancementQuantitativeTypeEnum;
  noCMEnhancementHomogeneityType: HomogeneityTypeEnum;
  isLobulated: boolean;
  isRound: boolean;
  isGeographicConfiguration: boolean;
  isBroadBased: boolean;
  isStalked: boolean;
  isOrientationFromTheEpiphysisTowardsTheDiaphysis: boolean;
  isSeptated: boolean;
  isFluidLevel: boolean;
  isCalcification: boolean;
  isCentrally: boolean;
  isDiffuselyDistributed: boolean;
  isNidus: boolean;
  isOsteoidMatrix: boolean;
  isFatSignal: boolean;
  isT2wHyperIntense: boolean;
  isPeriostealReactionSunburst: boolean;
  isPeriostealSpurCodmanSpur: boolean;
  isCartilageCap: boolean;
  isScleroticMargin: boolean;
  isMarginWithLowSignalPerichondriumAboveCartilageCap: boolean;
  isCapT2wHyperintense: boolean;
  isExpansive: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isSclerotic: boolean;
  isInfiltrationOfSoftTissue: boolean;
  isEnvironmentalReactionSoftTissueEdema: boolean;
  isBoneMarrowEdema: boolean;

  constructor() {
    super();
    this.findingType = BonesFindingTypeEnum.None;
    this.tumorDifferentialDiagnosis = TumorDifferentialDiagnosisEnum.None;
    this.secondLocalizationType = SecondLocalizationTypeEnum.None;
    this.limitationType = LimitationTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.cortexType = CortexTypeEnum.None;
    this.signalT2w = 'None';
    this.signalT1w = 'None';
    this.cMenhancementQuantitativeType = CmEnhancementQuantitativeTypeEnum.None;
    this.noCMEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.isLobulated = false;
    this.isRound = false;
    this.isGeographicConfiguration = false;
    this.isBroadBased = false;
    this.isStalked = false;
    this.isOrientationFromTheEpiphysisTowardsTheDiaphysis = false;
    this.isSeptated = false;
    this.isFluidLevel = false;
    this.isCalcification = false;
    this.isCentrally = false;
    this.isDiffuselyDistributed = false;
    this.isNidus = false;
    this.isOsteoidMatrix = false;
    this.isFatSignal = false;
    this.isT2wHyperIntense = false;
    this.isPeriostealReactionSunburst = false;
    this.isPeriostealSpurCodmanSpur = false;
    this.isCartilageCap = false;
    this.isScleroticMargin = false;
    this.isMarginWithLowSignalPerichondriumAboveCartilageCap = false;
    this.isCapT2wHyperintense = false;
    this.isExpansive = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isSclerotic = false;
    this.isInfiltrationOfSoftTissue = false;
    this.isEnvironmentalReactionSoftTissueEdema = false;
    this.isBoneMarrowEdema = false;
  }
}
