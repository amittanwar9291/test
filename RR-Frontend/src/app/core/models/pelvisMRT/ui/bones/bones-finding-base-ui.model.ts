import { FindingBase } from '@models/shared/finding/finding.base';
import { BonesFindingTypeEnum } from '@enums/pelvisMRT/bones/bones-finding-type.enum';
import { BonesDiagnosisTypeEnum } from '@enums/pelvisMRT/bones/tumor/bones-diagnosis-type.enum';
import {
  ContrastEnhancementDistributionTypeEnum,
  CorticalisTypeEnum,
  LimitationTypeEnum,
  LocalSpreadTypeEnum,
  TClassificationTypeEnum,
  HistologicallySecuredTypeEnum
} from '@enums/pelvisMRT/bones/tumor';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/bones';

export class BonesFindingBaseUiModel extends FindingBase {
  // Common

  findingType: BonesFindingTypeEnum;
  isBoneMarrowEdema: boolean;
  isSoftTissueEdema: boolean;
  isCalcification: boolean;
  contrastEnhancementType: ContrastEnhancementTypeEnum;
  isSubordinated: boolean;

  // Tumor

  differentialDiagnosis: BonesDiagnosisTypeEnum;
  isEpiphyseal: boolean;
  isMetaphyseal: boolean;
  isDiaphyseal: boolean;
  limitationType: LimitationTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  corticalisType: CorticalisTypeEnum;
  signalT1w: number;
  signalT2w: number;
  contrastHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  isSeptetedOrChambered: boolean;
  isLiquidLevel: boolean;
  isCalcificationCentral: boolean;
  isOsteoidMatrix: boolean;
  isGreaseSignal: boolean;
  isNidusT2wHyperintensity: boolean;
  isPeriostalReaction: boolean;
  isPeriostealSpur: boolean;
  isCartilageCap: boolean;
  isSclerosingRim: boolean;
  isRimLowSignal: boolean;
  isFormLobbied: boolean;
  isFormRoundly: boolean;
  isFormMaplikeConfiguration: boolean;
  isFormBroadBased: boolean;
  isFormStored: boolean;
  isFormOrientation: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isExpansive: boolean;
  isSclerotic: boolean;
  isInfiltrationSoftTissue: boolean;
  isAnotherLesion: boolean;
  expansion2ndLayerSizeInMm: number;
  expansion3rdLayerSizeInMm: number;
  isContrastInSepta: boolean;
  isCalcificationDiffuselyDistributed: boolean;
  isNidus: boolean;
  isCapT2wHyperintensity: boolean;
  isInfiltrationBoundary: boolean;
  isPerifocalSclerosis: boolean;
  isSurroundingInflammatoryReaction: boolean;
  isPathologicalFracture: boolean;
  isWithinThePrimarilyAffectedBone: boolean;
  localSpreadType: LocalSpreadTypeEnum;
  classificationType: TClassificationTypeEnum;
  isHistologicallySecured: boolean;
  histologicallySecuredType: HistologicallySecuredTypeEnum;
  differentialDiagnosis1: BonesDiagnosisTypeEnum;
  differentialDiagnosis2: BonesDiagnosisTypeEnum;
  differentialDiagnosis3: BonesDiagnosisTypeEnum;

  constructor() {
    super();

    // Common

    this.findingType = BonesFindingTypeEnum.None;
    this.isBoneMarrowEdema = false;
    this.isSoftTissueEdema = false;
    this.isCalcification = false;
    this.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
    this.isSubordinated = false;

    // Tumor

    this.differentialDiagnosis = BonesDiagnosisTypeEnum.None;
    this.isEpiphyseal = false;
    this.isMetaphyseal = false;
    this.isDiaphyseal = false;
    this.limitationType = LimitationTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.corticalisType = CorticalisTypeEnum.None;
    this.signalT1w = 0;
    this.signalT2w = 0;
    this.contrastHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.isSeptetedOrChambered = false;
    this.isLiquidLevel = false;
    this.isCalcificationCentral = false;
    this.isOsteoidMatrix = false;
    this.isGreaseSignal = false;
    this.isNidusT2wHyperintensity = false;
    this.isPeriostalReaction = false;
    this.isPeriostealSpur = false;
    this.isCartilageCap = false;
    this.isSclerosingRim = false;
    this.isRimLowSignal = false;
    this.isFormLobbied = false;
    this.isFormRoundly = false;
    this.isFormMaplikeConfiguration = false;
    this.isFormBroadBased = false;
    this.isFormStored = false;
    this.isFormOrientation = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isExpansive = false;
    this.isSclerotic = false;
    this.isInfiltrationSoftTissue = false;
    this.isAnotherLesion = false;
    this.expansion2ndLayerSizeInMm = null;
    this.expansion3rdLayerSizeInMm = null;
    this.isContrastInSepta = false;
    this.isCalcificationDiffuselyDistributed = false;
    this.isNidus = false;
    this.isCapT2wHyperintensity = false;
    this.isInfiltrationBoundary = false;
    this.isPerifocalSclerosis = false;
    this.isSurroundingInflammatoryReaction = false;
    this.isPathologicalFracture = false;
    this.isWithinThePrimarilyAffectedBone = false;
    this.localSpreadType = LocalSpreadTypeEnum.None;
    this.classificationType = TClassificationTypeEnum.None;
    this.isHistologicallySecured = false;
    this.histologicallySecuredType = HistologicallySecuredTypeEnum.None;
    this.differentialDiagnosis1 = BonesDiagnosisTypeEnum.None;
    this.differentialDiagnosis2 = BonesDiagnosisTypeEnum.None;
    this.differentialDiagnosis3 = BonesDiagnosisTypeEnum.None;
  }
}
