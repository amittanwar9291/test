import { FindingBase } from '@models/shared/finding/finding.base';
import { ContrastEnhancementQuantitativeTypeEnum, ShapeTypeEnum } from '@enums/hipMRT/capsule-and-ligaments/synovia-mass';

export class CapsuleAndLigamentsFindingPresetApiModel extends FindingBase {
  t1wSignal: string;
  t2wSignal: string;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  shapeType: ShapeTypeEnum;
  isSynovialnodulus: boolean;
  isSusceptibilityArtifacts: boolean;
  isBloomingArtifact: boolean;
  isSynovialProliferations: boolean;
  isNecrosis: boolean;
  isHaemarthrosis: boolean;
  isBonyErosionsSynovialInsertion: boolean;
  isArticularEffusion: boolean;
  isPerifocalSoftTissueEdema: boolean;
  isPeriarticularCalcification: boolean;

  constructor() {
    super();

    this.t1wSignal = 'None';
    this.t2wSignal = 'None';
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.isSynovialnodulus = false;
    this.isSusceptibilityArtifacts = false;
    this.isBloomingArtifact = false;
    this.isSynovialProliferations = false;
    this.isNecrosis = false;
    this.isHaemarthrosis = false;
    this.isBonyErosionsSynovialInsertion = false;
    this.isArticularEffusion = false;
    this.isPerifocalSoftTissueEdema = false;
    this.isPeriarticularCalcification = false;
  }
}
