import { FindingBase } from '@models/shared/finding/finding.base';
import { MarginTypeEnum } from '@enums/cardioMRT/spatial-requirement/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/cardioMRT/spatial-requirement/homogeneity-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { HeartCompartment } from '@models/cardioMRT/ui/spatial-requirement/heart-compartment.model';
import { EnhancementIntensityTypeEnum } from '@enums/cardioMRT/spatial-requirement/enhancement-intensity-type.enum';
import { MobilityTypeEnum } from '@enums/cardioMRT/spatial-requirement/mobility-type.enum';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';

export class SpatialRequirementFindingPresetUiModel extends FindingBase {
  // properties from preset model
  signalT1wCharacteristics: number;
  signalT2wCharacteristics: number;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  contrastEnhancementPerfusionType: SimpleAnswerEnum;
  gdEnhancementEGEType: SimpleAnswerEnum;
  gdEnhancementLGEType: SimpleAnswerEnum;
  isBleeding: boolean;
  isNecrosis: boolean;
  isCalcification: boolean;
  isFatSignal: boolean;
  isHyperIntensitySTIR: boolean;
  isValveAssociated: boolean;

  // other finding model properties (to be overwritten when resetting the current preset)
  nonTargetLesionLocalizer: HeartCompartment;
  differentialDiagnosis01: string;
  differentialDiagnosis1: string;
  differentialDiagnosis2: string;
  differentialDiagnosis3: string;
  isLesionSame: boolean;

  isInfiltrationThroughDifferentTissue: boolean;

  isSubordinate: boolean;

  contrastEnhancementIntensityPerfusionType: EnhancementIntensityTypeEnum;
  gdEnhancementIntensityEGEType: EnhancementIntensityTypeEnum;
  gdEnhancementIntensityLGEType: EnhancementIntensityTypeEnum;

  contrastEnhancementQualityPerfusionType: HomogeneityTypeEnum;
  gdEnhancementQualityEGEType: HomogeneityTypeEnum;
  gdEnhancementQualityLGEType: HomogeneityTypeEnum;

  mobilityType: MobilityTypeEnum;
  isPericardialEffusion: boolean;
  isHaemorrhage: boolean;
  isPleuralEffusion: boolean;
  isSuperimposedThrombus: boolean;

  referencePicture: ReferencePictureUiModel;

  constructor() {
    super();

    // properties from preset model
    this.signalT1wCharacteristics = 0;
    this.signalT2wCharacteristics = 0;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementPerfusionType = SimpleAnswerEnum.None;
    this.gdEnhancementEGEType = SimpleAnswerEnum.None;
    this.gdEnhancementLGEType = SimpleAnswerEnum.None;
    this.isBleeding = false;
    this.isNecrosis = false;
    this.isCalcification = false;
    this.isFatSignal = false;
    this.isHyperIntensitySTIR = false;
    this.isValveAssociated = false;

    // other finding model properties (to be overwritten when resetting the current preset)
    this.nonTargetLesionLocalizer = new HeartCompartment();
    this.differentialDiagnosis01 = 'None';
    this.differentialDiagnosis1 = 'None';
    this.differentialDiagnosis2 = 'None';
    this.differentialDiagnosis3 = 'None';
    this.isLesionSame = false;

    this.isInfiltrationThroughDifferentTissue = false;

    this.isSubordinate = false;

    this.contrastEnhancementIntensityPerfusionType = EnhancementIntensityTypeEnum.None;
    this.gdEnhancementIntensityEGEType = EnhancementIntensityTypeEnum.None;
    this.gdEnhancementIntensityLGEType = EnhancementIntensityTypeEnum.None;

    this.contrastEnhancementQualityPerfusionType = HomogeneityTypeEnum.None;
    this.gdEnhancementQualityEGEType = HomogeneityTypeEnum.None;
    this.gdEnhancementQualityLGEType = HomogeneityTypeEnum.None;

    this.mobilityType = MobilityTypeEnum.None;
    this.isPericardialEffusion = false;
    this.isHaemorrhage = false;
    this.isPleuralEffusion = false;
    this.isSuperimposedThrombus = false;

    this.referencePicture = new ReferencePictureUiModel();
  }
}
