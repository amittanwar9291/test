import { FindingBase } from '@models/shared/finding/finding.base';

import {
  SoftTissueDiagnosisTypeEnum,
  NeurofibromatosisTypeEnum,
  HomogeneityTypeEnum,
  ContrastEnhancementTypeEnum
} from '@enums/spineMRT/soft-tissues';

export class SpineSoftTissuesFindingPresetApiModel extends FindingBase {
  differentialDiagnosis: SoftTissueDiagnosisTypeEnum;
  signalT1w: string;
  signalT2w: string;
  homogeneityType: HomogeneityTypeEnum;
  contrastEnhancementType: ContrastEnhancementTypeEnum;
  cmEnhancementHomogeneityType: HomogeneityTypeEnum;
  isMoreThanOneLesion: boolean;
  isHypointensAfterFatSaturation: boolean;
  isIsointenseToCerebrospinalFluid: boolean;
  isMirrorFormation: boolean;
  isCalcification: boolean;
  isCapsule: boolean;
  isSurroundingInflammatoryReaction: boolean;
  isCommunicationWithIntraduralSpace: boolean;
  isSepta: boolean;
  isThickeningOfTheNerve: boolean;
  isNecrosis: boolean;
  isHemorrhage: boolean;
  isTargetSign: boolean;
  isHourglassShape: boolean;
  isSpindleShaped: boolean;
  neurofibromatosisType: NeurofibromatosisTypeEnum;
  isSuspicionOf: boolean;

  constructor() {
    super();
    this.differentialDiagnosis = SoftTissueDiagnosisTypeEnum.None;
    this.signalT1w = 'None';
    this.signalT2w = 'None';
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
    this.cmEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.isMoreThanOneLesion = false;
    this.isHypointensAfterFatSaturation = false;
    this.isIsointenseToCerebrospinalFluid = false;
    this.isMirrorFormation = false;
    this.isCalcification = false;
    this.isCapsule = false;
    this.isSurroundingInflammatoryReaction = false;
    this.isCommunicationWithIntraduralSpace = false;
    this.isSepta = false;
    this.isThickeningOfTheNerve = false;
    this.isNecrosis = false;
    this.isHemorrhage = false;
    this.isTargetSign = false;
    this.isHourglassShape = false;
    this.isSpindleShaped = false;
    this.neurofibromatosisType = NeurofibromatosisTypeEnum.None;
    this.isSuspicionOf = false;
  }
}
