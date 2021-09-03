import { FindingBase } from '@models/shared/finding/finding.base';
import {
  HomogeneityTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  MarginTypeEnum,
  ContrastEnhancementDistributionTypeEnum,
  MassOsteolysisDifferentialDiagnosisTypeEnum,
  MassOrOsteolysisCorticalBoneTypeEnum,
  BonesFindingTypeEnum,
  HistologyKnownTypeEnum,
  LocalExpansionTypeEnum
} from '@enums/hipMRT/bones';

export class BonesFindingBaseUiModel extends FindingBase {
  // Common
  findingType: BonesFindingTypeEnum;
  isSoftTissueEdema: boolean;
  isBoneMarrowEdema: boolean;
  isSecondary: boolean;

  // MassOrOsteolysis tab 1
  mainDiagnosisType: MassOsteolysisDifferentialDiagnosisTypeEnum;
  isEpiphysis: boolean;
  isMetaphysis: boolean;
  isDiaphysis: boolean;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;

  // MassOrOsteolysis tab 2
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  massOrOsteolysisCorticalBoneType: MassOrOsteolysisCorticalBoneTypeEnum;
  t1w: number;
  t2w: number;
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
  maxThicknessInMm: number;
  isInfiltrationOfAdjacentBone: boolean;
  isPathologicalFracture: boolean;
  isPathologicalFractureSuspected: boolean;
  isPerifocalSclerosis: boolean;
  localExpansionType: LocalExpansionTypeEnum;

  // MassOrOsteolysis tab 4
  differentialDiagnosis2: MassOsteolysisDifferentialDiagnosisTypeEnum;
  differentialDiagnosis3: MassOsteolysisDifferentialDiagnosisTypeEnum;
  isOverOneLesionSameEntity: boolean;
  isInThePrimarilyAffected: boolean;

  constructor() {
    super();

    // Common
    this.findingType = BonesFindingTypeEnum.None;
    this.isSoftTissueEdema = false;
    this.isBoneMarrowEdema = false;
    this.isSecondary = false;

    // MassOrOsteolysis tab 1
    this.mainDiagnosisType = MassOsteolysisDifferentialDiagnosisTypeEnum.None;
    this.isEpiphysis = false;
    this.isMetaphysis = false;
    this.isDiaphysis = false;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;

    // MassOrOsteolysis tab 2
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.massOrOsteolysisCorticalBoneType = MassOrOsteolysisCorticalBoneTypeEnum.None;
    this.t1w = 0;
    this.t2w = 0;
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
    this.maxThicknessInMm = null;
    this.isInfiltrationOfAdjacentBone = false;
    this.isPathologicalFracture = false;
    this.isPathologicalFractureSuspected = false;
    this.isPerifocalSclerosis = false;
    this.localExpansionType = LocalExpansionTypeEnum.None;

    // MassOrOsteolysis tab 4
    this.differentialDiagnosis2 = MassOsteolysisDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis3 = MassOsteolysisDifferentialDiagnosisTypeEnum.None;
    this.isOverOneLesionSameEntity = false;
    this.isInThePrimarilyAffected = false;
  }
}
