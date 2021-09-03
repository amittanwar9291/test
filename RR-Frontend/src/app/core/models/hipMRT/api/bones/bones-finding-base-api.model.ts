import { FindingBase } from '@models/shared/finding/finding.base';
import {
  HomogeneityTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  MarginTypeEnum,
  ContrastEnhancementDistributionTypeEnum,
  MassOsteolysisDifferentialDiagnosisTypeEnum,
  MassOrOsteolysisCorticalBoneTypeEnum,
  BonesFindingTypeEnum
} from '@enums/hipMRT/bones';

export class BonesFindingBaseApiModel extends FindingBase {
  // Common
  findingType: BonesFindingTypeEnum;
  isSoftTissueEdema: boolean;
  isBoneMarrowEdema: boolean;

  // MassOrOsteolysis tab 1
  mainDiagnosisType: MassOsteolysisDifferentialDiagnosisTypeEnum;
  isEpiphysis: boolean;
  isMetaphysis: boolean;
  isDiaphysis: boolean;

  // MassOrOsteolysis tab 2
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  massOrOsteolysisCorticalBoneType: MassOrOsteolysisCorticalBoneTypeEnum;
  t1w: string;
  t2w: string;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  pronouncedHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  isRound: boolean;
  isLobulated: boolean;
  isGeographic: boolean;
  isSessile: boolean;
  isPedunculated: boolean;
  isOrientationFacingAwayFrom: boolean;

  // MassOrOsteolysis tab 3
  isSeptated: boolean;
  isFluidLevel: boolean;
  isCalcification: boolean;
  isCentral: boolean;
  isDiffuse: boolean;
  isNidus: boolean;
  isT2wHyperintense: boolean;
  isOsteoidMatrix: boolean;
  isFatSignal: boolean;
  isPeriostealReactionsunBurst: boolean;
  isPeriostealSpurCodmanSpur: boolean;
  isCartilageCap: boolean;
  isCapT2wHyperintense: boolean;
  isScleroticMargin: boolean;
  isLowSignalPerichondriumOver: boolean;
  isExpansile: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isSclerotic: boolean;
  isSoftTissueInfiltration: boolean;

  constructor() {
    super();

    // Common
    this.findingType = BonesFindingTypeEnum.None;
    this.isSoftTissueEdema = false;
    this.isBoneMarrowEdema = false;

    // MassOrOsteolysis tab 1
    this.mainDiagnosisType = MassOsteolysisDifferentialDiagnosisTypeEnum.None;
    this.isEpiphysis = false;
    this.isMetaphysis = false;
    this.isDiaphysis = false;

    // MassOrOsteolysis tab 2
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.massOrOsteolysisCorticalBoneType = MassOrOsteolysisCorticalBoneTypeEnum.None;
    this.t1w = 'None';
    this.t2w = 'None';
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.pronouncedHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.isRound = false;
    this.isLobulated = false;
    this.isGeographic = false;
    this.isSessile = false;
    this.isPedunculated = false;
    this.isOrientationFacingAwayFrom = false;

    // MassOrOsteolysis tab 3
    this.isSeptated = false;
    this.isFluidLevel = false;
    this.isCalcification = false;
    this.isCentral = false;
    this.isDiffuse = false;
    this.isNidus = false;
    this.isT2wHyperintense = false;
    this.isOsteoidMatrix = false;
    this.isFatSignal = false;
    this.isPeriostealReactionsunBurst = false;
    this.isPeriostealSpurCodmanSpur = false;
    this.isCartilageCap = false;
    this.isCapT2wHyperintense = false;
    this.isScleroticMargin = false;
    this.isLowSignalPerichondriumOver = false;
    this.isExpansile = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isSclerotic = false;
    this.isSoftTissueInfiltration = false;
  }
}
