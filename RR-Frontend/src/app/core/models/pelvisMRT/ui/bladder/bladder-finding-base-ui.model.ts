import { FindingBase } from '@models/shared/finding/finding.base';
import { BladderDiagnosisTypeEnum, BladderFindingTypeEnum, MarginTypeEnum } from '@enums/pelvisMRT/bladder/';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';

export class BladderFindingBaseUiModel extends FindingBase {
  findingType: BladderFindingTypeEnum;

  // Common
  contrastEnhancementType: CMEnhancementTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  t1wSignal: number;
  t2wSignal: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  homogeneityType: HomogeneityTypeEnum;
  isCalcification: boolean;
  isSmallIntestine: boolean;
  differentialDiagnosis2: BladderDiagnosisTypeEnum;
  isSubordinate: boolean;
  isMoreThan1Lesion: boolean;

  // SoftTissueMass
  differentialDiagnosis: BladderDiagnosisTypeEnum;
  isCapsuleMembrane: boolean;
  isFluidLevel: boolean;
  isInflammatoryReaction: boolean;
  marginType: MarginTypeEnum;
  isFat: boolean;
  isNecrosis: boolean;
  isCysts: boolean;
  isSepta: boolean;
  isSignalVoids: boolean;
  isHemorrhage: boolean;
  isBone: boolean;
  isUrinaryBladder: boolean;
  isUterus: boolean;
  isVagina: boolean;
  isProstate: boolean;
  isSeminalVesicles: boolean;
  isRectum: boolean;
  isSigma: boolean;
  isVascular: boolean;
  isSkinExulceration: boolean;

  constructor() {
    super();

    this.findingType = BladderFindingTypeEnum.None;

    // Common
    this.contrastEnhancementType = CMEnhancementTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.t1wSignal = 0;
    this.t2wSignal = 0;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.isCalcification = false;
    this.isSmallIntestine = false;
    this.differentialDiagnosis2 = BladderDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.isMoreThan1Lesion = false;

    // SoftTissueMass
    this.differentialDiagnosis = BladderDiagnosisTypeEnum.None;
    this.isCapsuleMembrane = false;
    this.isFluidLevel = false;
    this.isInflammatoryReaction = false;
    this.marginType = MarginTypeEnum.None;
    this.isFat = false;
    this.isNecrosis = false;
    this.isCysts = false;
    this.isSepta = false;
    this.isSignalVoids = false;
    this.isHemorrhage = false;
    this.isBone = false;
    this.isUrinaryBladder = false;
    this.isUterus = false;
    this.isVagina = false;
    this.isProstate = false;
    this.isSeminalVesicles = false;
    this.isRectum = false;
    this.isSigma = false;
    this.isVascular = false;
    this.isSkinExulceration = false;
  }
}
