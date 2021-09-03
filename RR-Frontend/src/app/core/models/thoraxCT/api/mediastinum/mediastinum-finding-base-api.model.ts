import { FindingBase } from '@models/shared/finding/finding.base';
import {
  ContrastEnhancementTypeEnum,
  DensityTypeEnum,
  MediastinumCalcificationTypeEnum,
  MediastinumDiagnosisTypeEnum,
  MediastinumFindingTypeEnum,
  MediastinumGrowthPatternsTypeEnum,
  MediastinumLimitationTypeEnum
} from '@enums/thoraxCT/mediastinum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';

export class MediastinumFindingBaseApiModel extends FindingBase {
  findingType: MediastinumFindingTypeEnum;
  isCalcification: boolean;
  calcificationType: MediastinumCalcificationTypeEnum;
  isUpperMediastinum: boolean;
  isLowerMediastinum: boolean;
  isAnteriorMediastinum: boolean;
  isMiddleMediastinum: boolean;
  isPosteriorMediastinum: boolean;
  mainCharacteristicsDifferentialDiagnosis01: MediastinumDiagnosisTypeEnum;
  limitationType: MediastinumLimitationTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  densityType: DensityTypeEnum;
  isFat: boolean;
  isCysts: boolean;
  isCapsule: boolean;
  isFibrousSepta: boolean;
  isLiquidFatMirror: boolean;
  isToothBoneSystem: boolean;
  isNecroses: boolean;
  growthPatternsType: MediastinumGrowthPatternsTypeEnum;
  contrastEnhancementType: ContrastEnhancementTypeEnum;
  noCMEnhancementHomogeneityType: HomogeneityTypeEnum;

  constructor() {
    super();

    this.findingType = MediastinumFindingTypeEnum.None;
    this.isCalcification = false;
    this.calcificationType = MediastinumCalcificationTypeEnum.None;
    this.isUpperMediastinum = false;
    this.isLowerMediastinum = false;
    this.isAnteriorMediastinum = false;
    this.isMiddleMediastinum = false;
    this.isPosteriorMediastinum = false;
    this.mainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisTypeEnum.None;
    this.limitationType = MediastinumLimitationTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.densityType = DensityTypeEnum.None;
    this.isFat = false;
    this.isCysts = false;
    this.isCapsule = false;
    this.isFibrousSepta = false;
    this.isLiquidFatMirror = false;
    this.isToothBoneSystem = false;
    this.isNecroses = false;
    this.growthPatternsType = MediastinumGrowthPatternsTypeEnum.None;
    this.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
    this.noCMEnhancementHomogeneityType = HomogeneityTypeEnum.None;
  }
}
