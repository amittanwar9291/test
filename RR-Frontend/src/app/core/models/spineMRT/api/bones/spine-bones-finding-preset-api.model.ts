import {
  BonesFindingTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  CorticalisTypeEnum,
  HomogeneityTypeEnum,
  InfiltrationPatternTypeEnum,
  LimitationTypeEnum,
  ShapeTypeEnum
} from '@enums/spineMRT/bones';
import { BonesDiagnosisTypeEnum } from '@enums/spineMRT/bones/bones-diagnosis-type.enum';
import { CmEnhancementFormTypeEnum } from '@enums/spineMRT/bones/tumor-focal/cm-enhancement-form-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class SpineBonesFindingPresetApiModel extends FindingBase {
  findingType: BonesFindingTypeEnum;
  traumaLocation: string;
  mainCharacteristicsDifferentialDiagnosis01: BonesDiagnosisTypeEnum;
  corticalisType: CorticalisTypeEnum;
  isFluidLevel: boolean;
  isCalcification: boolean;
  isPeriostealReaction: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isInfiltrationOfSoftTissue: boolean;
  t1wSignal: string;
  t2wSignal: string;
  homogeneityType: HomogeneityTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  cmEnhancementHomogeneityType: HomogeneityTypeEnum;
  limitationType: LimitationTypeEnum;
  cmEnhancementForm: CmEnhancementFormTypeEnum;
  shapeType: ShapeTypeEnum;
  isSeptaChambered: boolean;
  isExpansive: boolean;
  isNidus: boolean;
  isT2wHyperintense: boolean;
  isCentral: boolean;
  isScleroticMargin: boolean;
  isBoneMarrowEdema: boolean;
  isSoftTissueEdema: boolean;
  isPerifocalSclerosis: boolean;
  isSurroundingInflammatoryReaction: boolean;
  isMoreThanOneLesion: boolean;
  isCartilagecap: boolean;
  isGroundGlassMatrix: boolean;
  isOsteoidMatrix: boolean;
  isFatSignal: boolean;
  isInvolvementAdjacentEndplate: boolean;
  isOriginFromMidline: boolean;
  infiltrationPatternType: InfiltrationPatternTypeEnum;
  signalSTIR: string;
  isCartilagecapT2wHyperintense: boolean;
  isInterruptionEndPlate: boolean;
  isPeriostealSpur: boolean;

  constructor() {
    super();
    this.findingType = BonesFindingTypeEnum.None;
    this.traumaLocation = 'None';
    this.mainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisTypeEnum.None;
    this.corticalisType = CorticalisTypeEnum.None;
    this.isFluidLevel = false;
    this.isCalcification = false;
    this.isPeriostealReaction = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isInfiltrationOfSoftTissue = false;
    this.t1wSignal = 'None';
    this.t2wSignal = 'None';
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.cmEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.limitationType = LimitationTypeEnum.None;
    this.cmEnhancementForm = CmEnhancementFormTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.isSeptaChambered = false;
    this.isExpansive = false;
    this.isNidus = false;
    this.isT2wHyperintense = false;
    this.isCentral = false;
    this.isScleroticMargin = false;
    this.isBoneMarrowEdema = false;
    this.isSoftTissueEdema = false;
    this.isPerifocalSclerosis = false;
    this.isSurroundingInflammatoryReaction = false;
    this.isMoreThanOneLesion = false;
    this.isCartilagecap = false;
    this.isGroundGlassMatrix = false;
    this.isOsteoidMatrix = false;
    this.isFatSignal = false;
    this.isInvolvementAdjacentEndplate = false;
    this.isOriginFromMidline = false;
    this.infiltrationPatternType = InfiltrationPatternTypeEnum.None;
    this.signalSTIR = 'None';
    this.isCartilagecapT2wHyperintense = false;
    this.isInterruptionEndPlate = false;
    this.isPeriostealSpur = false;
  }
}
