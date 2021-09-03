import { FindingBase } from '@models/shared/finding/finding.base';

import {
  BonesFindingTypeEnum,
  BonesLocalizationTypeEnum,
  LimitationTypeEnum,
  HomogeneityTypeEnum,
  CorticalisTypeEnum,
  ContrastEnhancementTypeEnum,
  BonesDiagnosisType
} from '@enums/kneeMRT/bones';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/kneeMRT/bones/bones-tumor/contrast-enhancement-distribution-type.enum';

export class KneeBonesFindingPresetApiModel extends FindingBase {
  findingType: BonesFindingTypeEnum;

  // Common
  differentialDiagnosis: BonesDiagnosisType;

  // bones-tumor
  localizationType: BonesLocalizationTypeEnum;
  limitationType: LimitationTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  corticalisType: CorticalisTypeEnum;
  signalT1w: string;
  signalT2w: string;
  contrastEnhancementType: ContrastEnhancementTypeEnum;
  contrastHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  isSeptetedOrChambered: boolean;
  isLiquidLevel: boolean;
  isCalcification: boolean;
  isCalcificationCentral: boolean;
  isCalcificationDiffuselyDistributed: boolean;
  isNidus: boolean;
  isOsteoidMatrix: boolean;
  isGreaseSignal: boolean;

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
  isReactionBoneMarrowEdema: boolean;
  isAnotherLesion: boolean;
  isReactionSoftTissueEdema: boolean;

  constructor() {
    super();

    this.findingType = BonesFindingTypeEnum.None;

    // Common
    this.differentialDiagnosis = BonesDiagnosisType.None;

    // bones-tumor
    this.localizationType = BonesLocalizationTypeEnum.None;
    this.limitationType = LimitationTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.corticalisType = CorticalisTypeEnum.None;
    this.signalT1w = 'None';
    this.signalT2w = 'None';
    this.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
    this.contrastHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.isSeptetedOrChambered = false;
    this.isLiquidLevel = false;
    this.isCalcification = false;
    this.isCalcificationCentral = false;
    this.isCalcificationDiffuselyDistributed = false;
    this.isNidus = false;
    this.isOsteoidMatrix = false;
    this.isGreaseSignal = false;

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
    this.isReactionBoneMarrowEdema = false;
    this.isAnotherLesion = false;
    this.isReactionSoftTissueEdema = false;
  }
}
