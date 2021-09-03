import { FindingBase } from '@models/shared/finding/finding.base';

import {
  SoftTissueDiagnosisTypeEnum,
  NeurofibromatosisTypeEnum,
  HomogeneityTypeEnum,
  ContrastEnhancementTypeEnum
} from '@enums/spineMRT/soft-tissues';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { AxialLocation } from '@models/shared/spine/localizers/axial-location.model';

export class SpineSoftTissuesFindingPresetUiModel extends FindingBase {
  isInfiltration: boolean;
  isBones: boolean;
  isMuscle: boolean;
  isNerveRoot: boolean;
  spineDirectionalLocation: SpineDirectionalLocation;
  nonTargetLesionLocation: SpineLocation;
  isExtensionOsseousNeuralForamen;
  isScalloping: boolean;
  isOsteolysis: boolean;
  spineDirectionalLocation2: SpineDirectionalLocation;
  spineDirectionalLocation3: SpineDirectionalLocation;
  spineLocationDisks2: SpineDirectionalLocation;
  spineLocationDisks3: SpineDirectionalLocation;

  differentialDiagnosis: SoftTissueDiagnosisTypeEnum;
  signalT1w: number;
  signalT2w: number;
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

    this.isInfiltration = false;
    this.isBones = false;
    this.isMuscle = false;
    this.isNerveRoot = false;
    this.spineDirectionalLocation = new SpineDirectionalLocation();
    this.nonTargetLesionLocation = new SpineLocation();
    this.isExtensionOsseousNeuralForamen = false;
    this.isScalloping = false;
    this.isOsteolysis = false;
    this.spineDirectionalLocation2 = new SpineDirectionalLocation();
    this.spineDirectionalLocation3 = new SpineDirectionalLocation();
    this.spineLocationDisks2 = new SpineDirectionalLocation();
    this.spineLocationDisks3 = new SpineDirectionalLocation();

    this.differentialDiagnosis = SoftTissueDiagnosisTypeEnum.None;
    this.signalT1w = 0;
    this.signalT2w = 0;
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
