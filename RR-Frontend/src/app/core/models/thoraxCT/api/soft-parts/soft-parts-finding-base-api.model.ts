import { FindingBase } from '@models/shared/finding/finding.base';
import {
  DensityTypeEnum,
  SoftPartsCalcificationTypeEnum,
  SoftPartsDiagnosisTypeEnum,
  SoftPartsFindingTypeEnum
} from '@enums/thoraxCT/soft-parts';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxCT/common/contrast-enhancement-quantitative-type.enum';
import { MarginTypeEnum } from '@enums/thoraxCT/common/margin-type.enum';
import { DisplacementOfFatTissueTypeEnum } from '@enums/thoraxCT/soft-parts/pleural-mass';
import {
  HeterogeneousTypeEnum,
  LocalizationAxialTypeEnum,
  SoftPartsGrowthPatternsTypeEnum
} from '@enums/thoraxCT/soft-parts/chest-wall-soft-tissue';

export class SoftPartsFindingBaseApiModel extends FindingBase {
  findingType: SoftPartsFindingTypeEnum;
  differentialDiagnosis: SoftPartsDiagnosisTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  isFat: boolean;
  isCalcification: boolean;
  calcificationType: SoftPartsCalcificationTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  marginType: MarginTypeEnum;
  cmEnhancementHomogeneityType: HomogeneityTypeEnum;
  displacementOfFatTissueType: DisplacementOfFatTissueTypeEnum;
  isNecrosis: boolean;
  isHemorrhage: boolean;
  isCysticChanges: boolean;
  isExtrapleuralFatSign: boolean;
  isInfiltrationChestWall: boolean;
  isInfiltrationOfExtrapleuralFatTissue: boolean;
  localizationAxialType: LocalizationAxialTypeEnum;
  densityType: DensityTypeEnum;
  isCysts: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  growthPatternsType: SoftPartsGrowthPatternsTypeEnum;
  heterogeneousType: HeterogeneousTypeEnum;

  constructor() {
    super();
    this.findingType = SoftPartsFindingTypeEnum.None;
    this.differentialDiagnosis = SoftPartsDiagnosisTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.isFat = false;
    this.isCalcification = false;
    this.calcificationType = SoftPartsCalcificationTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.cmEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.displacementOfFatTissueType = DisplacementOfFatTissueTypeEnum.None;
    this.isNecrosis = false;
    this.isHemorrhage = false;
    this.isCysticChanges = false;
    this.isExtrapleuralFatSign = false;
    this.isInfiltrationChestWall = false;
    this.isInfiltrationOfExtrapleuralFatTissue = false;
    this.localizationAxialType = LocalizationAxialTypeEnum.None;
    this.densityType = DensityTypeEnum.None;
    this.isCysts = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.growthPatternsType = SoftPartsGrowthPatternsTypeEnum.None;
    this.heterogeneousType = HeterogeneousTypeEnum.None;
  }
}
