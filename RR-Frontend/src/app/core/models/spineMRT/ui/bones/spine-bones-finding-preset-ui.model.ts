import { FindingBase } from '@models/shared/finding/finding.base';
import { DiscGeneralLocationModel } from '@models/shared/spine/localizers/disc-general-location.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

import { BonesDiagnosisTypeEnum } from '@enums/spineMRT/bones/bones-diagnosis-type.enum';
import { CmEnhancementFormTypeEnum } from '@enums/spineMRT/bones/tumor-focal/cm-enhancement-form-type.enum';
import {
  ShapeTypeEnum,
  InfiltrationPatternTypeEnum,
  CorticalisTypeEnum,
  HomogeneityTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  LimitationTypeEnum
} from '@enums/spineMRT/bones';

export class SpineBonesFindingPresetUiModel extends FindingBase {
  isInTheSepta: boolean;
  isDiffuse: boolean;
  maxThicknessOfCap: number;
  isLowSignalOfTheRim: boolean;
  isSclerotic: boolean;
  isSpinalCanalInfiltration: boolean;
  isPedicleDestruction: boolean;
  isInfiltrationOfAdjacentBones: boolean;
  differentialDiagnosis01: BonesDiagnosisTypeEnum;
  differentialDiagnosis02: BonesDiagnosisTypeEnum;
  isSecondary: boolean;
  differentialDiagnosis03: BonesDiagnosisTypeEnum;
  isPathologicFracture: boolean;
  spineLocation2: SpineLocation;
  isInfiltrationAdjacentSoftTissues: boolean;

  traumaLocation: DiscGeneralLocationModel;
  corticalisType: CorticalisTypeEnum;
  isFluidLevel: boolean;
  isCalcification: boolean;
  isPeriostealReaction: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isInfiltrationOfSoftTissue: boolean;
  t1wSignal: number;
  t2wSignal: number;
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
  signalSTIR: number;
  isCartilagecapT2wHyperintense: boolean;
  isInterruptionEndPlate: boolean;
  isPeriostealSpur: boolean;

  constructor() {
    super();
    this.traumaLocation = new DiscGeneralLocationModel();
    this.corticalisType = CorticalisTypeEnum.None;
    this.isFluidLevel = false;
    this.isCalcification = false;
    this.isPeriostealReaction = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isInfiltrationOfSoftTissue = false;
    this.t1wSignal = 0;
    this.t2wSignal = 0;
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
    this.signalSTIR = 0;
    this.isCartilagecapT2wHyperintense = false;
    this.isInterruptionEndPlate = false;
    this.isPeriostealSpur = false;

    this.isInTheSepta = false;
    this.isDiffuse = false;
    this.maxThicknessOfCap = null;
    this.isLowSignalOfTheRim = false;
    this.isSclerotic = false;
    this.isSpinalCanalInfiltration = false;
    this.isPedicleDestruction = false;
    this.isInfiltrationOfAdjacentBones = false;
    this.differentialDiagnosis01 = BonesDiagnosisTypeEnum.None;
    this.differentialDiagnosis02 = BonesDiagnosisTypeEnum.None;
    this.isSecondary = false;
    this.differentialDiagnosis03 = BonesDiagnosisTypeEnum.None;
    this.isPathologicFracture = false;
    this.spineLocation2 = new SpineLocation();
    this.isInfiltrationAdjacentSoftTissues = false;
  }
}
