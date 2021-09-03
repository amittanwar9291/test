import { FindingBase } from '@models/shared/finding/finding.base';
import { FileApiModel } from '@models/shared/uploader/file-api.model';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { MarginTypeEnum } from '@enums/cardioMRT/spatial-requirement/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/cardioMRT/spatial-requirement/homogeneity-type.enum';
import { EnhancementIntensityTypeEnum } from '@enums/cardioMRT/spatial-requirement/enhancement-intensity-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MobilityTypeEnum } from '@enums/cardioMRT/spatial-requirement/mobility-type.enum';

export class SpatialRequirementFindingApiModel extends FindingBase {
  findingType: string;
  descriptionType: DescriptionTypeEnum;

  mainTumorLocalizer: string;
  nonTargetLesionLocalizer: string;
  differentialDiagnosis01: string;
  differentialDiagnosis1: string;
  differentialDiagnosis2: string;
  differentialDiagnosis3: string;
  signalT1wCharacteristics: string;
  signalT2wCharacteristics: string;
  isLesionSame: boolean;
  diameterMaxAxialInMm: number;

  isBleeding: boolean;
  isNecrosis: boolean;
  isCalcification: boolean;
  isFatSignal: boolean;
  isHyperIntensitySTIR: boolean;
  isValveAssociated: boolean;

  isInfiltrationThroughDifferentTissue: boolean;
  isSubordinate: boolean;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;

  contrastEnhancementPerfusionType: SimpleAnswerEnum;
  gdEnhancementEGEType: SimpleAnswerEnum;
  gdEnhancementLGEType: SimpleAnswerEnum;

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

  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileApiModel;
  imageFileId: string;

  constructor() {
    super();

    this.findingType = 'None';
    this.descriptionType = DescriptionTypeEnum.None;

    this.mainTumorLocalizer = 'None';
    this.nonTargetLesionLocalizer = 'None';
    this.differentialDiagnosis01 = 'None';
    this.differentialDiagnosis1 = 'None';
    this.differentialDiagnosis2 = 'None';
    this.differentialDiagnosis3 = 'None';
    this.signalT1wCharacteristics = 'None';
    this.signalT2wCharacteristics = 'None';
    this.isLesionSame = false;
    this.diameterMaxAxialInMm = null;

    this.isBleeding = false;
    this.isNecrosis = false;
    this.isCalcification = false;
    this.isFatSignal = false;
    this.isHyperIntensitySTIR = false;
    this.isValveAssociated = false;

    this.isInfiltrationThroughDifferentTissue = false;
    this.isSubordinate = false;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;

    this.contrastEnhancementPerfusionType = SimpleAnswerEnum.None;
    this.gdEnhancementEGEType = SimpleAnswerEnum.None;
    this.gdEnhancementLGEType = SimpleAnswerEnum.None;

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

    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;
  }
}
