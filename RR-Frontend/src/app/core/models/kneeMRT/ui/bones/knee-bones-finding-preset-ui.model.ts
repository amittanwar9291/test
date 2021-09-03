import { FindingBase } from '@models/shared/finding/finding.base';

import {
  BonesLocalizationTypeEnum,
  LimitationTypeEnum,
  HomogeneityTypeEnum,
  CorticalisTypeEnum,
  ContrastEnhancementTypeEnum,
  LocalSpreadTypeEnum,
  BonesClassificationTypeEnum,
  HistologicallySecuredTypeEnum
} from '@enums/kneeMRT/bones';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/kneeMRT/bones/bones-tumor/contrast-enhancement-distribution-type.enum';

export class KneeBonesFindingPresetUiModel extends FindingBase {
  differentialDiagnosis1: string;
  differentialDiagnosis2: string;
  differentialDiagnosis3: string;
  localizationType: BonesLocalizationTypeEnum;
  limitationType: LimitationTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  corticalisType: CorticalisTypeEnum;
  signalT1w: number;
  signalT2w: number;
  contrastEnhancementType: ContrastEnhancementTypeEnum;
  contrastHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  isContrastInSepta: boolean;
  isSeptetedOrChambered: boolean;
  isLiquidLevel: boolean;
  isCalcification: boolean;
  isCalcificationCentral: boolean;
  isCalcificationDiffuselyDistributed: boolean;
  isNidus: boolean;
  isOsteoidMatrix: boolean;
  isGreaseSignal: boolean;
  isNidusT2wHyperintensity: boolean;
  isCapT2wHyperintensity: boolean;
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
  isInfiltrationBoundary: boolean;
  isGrowthPatternPathologicalFracture: boolean;
  isReactionSoftTissueEdema: boolean;
  isReactionBoneMarrowEdema: boolean;
  isPerifocalSclerosis: boolean;
  isSurroundingInflammatoryReaction: boolean;
  isAnotherLesion: boolean;
  isWithinThePrimarilyAffectedBone: boolean;
  isStagingPathologicalFracture: boolean;
  localSpreadType: LocalSpreadTypeEnum;
  classificationType: BonesClassificationTypeEnum;
  isHistologicallySecured: boolean;
  histologicallySecuredType: HistologicallySecuredTypeEnum;
  isDifferentialDiagnosisSubordinate: boolean;

  constructor() {
    super();

    this.differentialDiagnosis1 = 'None';
    this.differentialDiagnosis2 = 'None';
    this.differentialDiagnosis3 = 'None';
    this.localizationType = BonesLocalizationTypeEnum.None;
    this.limitationType = LimitationTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.corticalisType = CorticalisTypeEnum.None;
    this.signalT1w = 0;
    this.signalT2w = 0;
    this.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
    this.contrastHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.isContrastInSepta = false;
    this.isSeptetedOrChambered = false;
    this.isLiquidLevel = false;
    this.isCalcification = false;
    this.isCalcificationCentral = false;
    this.isCalcificationDiffuselyDistributed = false;
    this.isNidus = false;
    this.isOsteoidMatrix = false;
    this.isGreaseSignal = false;
    this.isNidusT2wHyperintensity = false;
    this.isCapT2wHyperintensity = false;
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
    this.isInfiltrationBoundary = false;
    this.isGrowthPatternPathologicalFracture = false;
    this.isReactionSoftTissueEdema = false;
    this.isReactionBoneMarrowEdema = false;
    this.isPerifocalSclerosis = false;
    this.isSurroundingInflammatoryReaction = false;
    this.isAnotherLesion = false;
    this.isWithinThePrimarilyAffectedBone = false;
    this.isStagingPathologicalFracture = false;
    this.localSpreadType = LocalSpreadTypeEnum.None;
    this.classificationType = BonesClassificationTypeEnum.None;
    this.isHistologicallySecured = false;
    this.histologicallySecuredType = HistologicallySecuredTypeEnum.None;
    this.isDifferentialDiagnosisSubordinate = false;
  }
}
