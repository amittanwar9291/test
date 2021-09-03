import { FindingBase } from '@models/shared/finding/finding.base';
import { MarginTypeEnum } from '@enums/cardioMRT/spatial-requirement/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/cardioMRT/spatial-requirement/homogeneity-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

export class SpatialRequirementFindingPresetApiModel extends FindingBase {
  signalT1wCharacteristics: string;
  signalT2wCharacteristics: string;
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

  constructor() {
    super();

    this.signalT1wCharacteristics = 'None';
    this.signalT2wCharacteristics = 'None';
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
  }
}
