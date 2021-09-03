import {
  BonesFindingTypeEnum,
  ContrastEnhancementQuantitativeType,
  ContrastEnhancementDistributionTypeEnum,
  CorticalisTypeEnum,
  DiagnosisTypeEnum,
  LimitationTypeEnum
} from '@enums/elbowMRT/bones';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class BonesFindingBaseApiModel extends FindingBase {
  findingType: BonesFindingTypeEnum;
  differentialDiagnosis: DiagnosisTypeEnum;
  limitationType: LimitationTypeEnum;
  isEpiphyseal: boolean;
  isMetaphyseal: boolean;
  signalT1w: string;
  signalT2w: string;
  homogeneityType: HomogeneityTypeEnum;
  corticalisType: CorticalisTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeType;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  isRound: boolean;
  isLobulated: boolean;
  isGeographic: boolean;
  isSessile: boolean;
  isPedunculated: boolean;
  isOrientation: boolean;
  isSeptatedChambered: boolean;
  isFluidLevel: boolean;
  isCalcification: boolean;
  isCentral: boolean;
  isDiffuselyDistributed: boolean;
  isNidus: boolean;
  isNidusT2wHyperintense: boolean;
  isOsteoidMatrix: boolean;
  isFatSignal: boolean;
  isExpansile: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isSclerotic: boolean;
  isInfiltrationOfSoftTissue: boolean;
  isBoneMarrowEdema: boolean;
  isSoftTissueEdema: boolean;
  isPeriostealReactionSunBurst: boolean;
  isCodmanTriangle: boolean;
  isCartilageCap: boolean;
  isScleroticMargin: boolean;
  isRimWithLowSignal: boolean;
  isCapT2wHyperintense: boolean;
  isMoreThanOneLesionSameEntity: boolean;

  constructor() {
    super();
    this.findingType = BonesFindingTypeEnum.None;
    this.differentialDiagnosis = DiagnosisTypeEnum.None;
    this.limitationType = LimitationTypeEnum.None;
    this.isEpiphyseal = false;
    this.isMetaphyseal = false;
    this.signalT1w = 'None';
    this.signalT2w = 'None';
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.corticalisType = CorticalisTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.isRound = false;
    this.isLobulated = false;
    this.isGeographic = false;
    this.isSessile = false;
    this.isPedunculated = false;
    this.isOrientation = false;
    this.isSeptatedChambered = false;
    this.isFluidLevel = false;
    this.isCalcification = false;
    this.isCentral = false;
    this.isDiffuselyDistributed = false;
    this.isNidus = false;
    this.isNidusT2wHyperintense = false;
    this.isOsteoidMatrix = false;
    this.isFatSignal = false;
    this.isExpansile = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isSclerotic = false;
    this.isInfiltrationOfSoftTissue = false;
    this.isBoneMarrowEdema = false;
    this.isSoftTissueEdema = false;
    this.isPeriostealReactionSunBurst = false;
    this.isCodmanTriangle = false;
    this.isCartilageCap = false;
    this.isScleroticMargin = false;
    this.isRimWithLowSignal = false;
    this.isCapT2wHyperintense = false;
    this.isMoreThanOneLesionSameEntity = false;
  }
}
