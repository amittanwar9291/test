import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import {
  DensityTypeEnum,
  SoftPartsCalcificationTypeEnum,
  SoftPartsDiagnosisTypeEnum,
  SoftPartsFindingTypeEnum,
  SoftPartsLocalizationCraniocaudalTypeEnum,
  SoftPartsSiteTypeEnum
} from '@enums/thoraxCT/soft-parts/';
import {
  HeterogeneousTypeEnum,
  LocalizationAxialTypeEnum,
  SoftPartsGrowthPatternsTypeEnum
} from '@enums/thoraxCT/soft-parts/chest-wall-soft-tissue';
import { ChestWallAngleTypeEnum, DisplacementOfFatTissueTypeEnum, PleuralMassTypeEnum } from '@enums/thoraxCT/soft-parts/pleural-mass';
import { FindingBase } from '@models/shared/finding/finding.base';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxCT/common/contrast-enhancement-quantitative-type.enum';
import { MarginTypeEnum } from '@enums/thoraxCT/common/margin-type.enum';

export class SoftPartsFindingBaseUiModel extends FindingBase {
  findingType: SoftPartsFindingTypeEnum;
  siteType: SoftPartsSiteTypeEnum;
  localizationCraniocaudalType: SoftPartsLocalizationCraniocaudalTypeEnum;
  differentialDiagnosis: SoftPartsDiagnosisTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  isFat: boolean;
  isCalcification: boolean;
  calcificationType: SoftPartsCalcificationTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  marginType: MarginTypeEnum;
  cmEnhancementHomogeneityType: HomogeneityTypeEnum;
  isMoreThanOneLesion: boolean;
  chestWallAngleType: ChestWallAngleTypeEnum;
  displacementOfFatTissueType: DisplacementOfFatTissueTypeEnum;
  pleuralMassType: PleuralMassTypeEnum;
  isNecrosis: boolean;
  isHemorrhage: boolean;
  isCysticChanges: boolean;
  isExtrapleuralFatSign: boolean;
  isCircumferentialSoftTissueAugmentation: boolean;
  isCircumferentialSoftTissueAugmentationRight: boolean;
  isCircumferentialSoftTissueAugmentationLeft: boolean;
  isInfiltrationChestWall: boolean;
  isInfiltrationOfExtrapleuralFatTissue: boolean;
  spineLocation: SpineLocation;
  localizationAxialType: LocalizationAxialTypeEnum;
  densityType: DensityTypeEnum;
  isCysts: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  isNecroses: boolean;
  growthPatternsType: SoftPartsGrowthPatternsTypeEnum;
  isPleura: boolean;
  isPericardium: boolean;
  isBones: boolean;
  isLungs: boolean;
  isMediastinum: boolean;
  isCutisThickening: boolean;
  isPressureErosionRib: boolean;
  heterogeneousType: HeterogeneousTypeEnum;

  constructor() {
    super();
    this.findingType = SoftPartsFindingTypeEnum.None;

    // Common

    this.siteType = SoftPartsSiteTypeEnum.None;
    this.localizationCraniocaudalType = SoftPartsLocalizationCraniocaudalTypeEnum.None;
    this.differentialDiagnosis = SoftPartsDiagnosisTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.isFat = false;
    this.isCalcification = false;
    this.calcificationType = SoftPartsCalcificationTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.cmEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.isMoreThanOneLesion = false;
    this.chestWallAngleType = ChestWallAngleTypeEnum.None;
    this.displacementOfFatTissueType = DisplacementOfFatTissueTypeEnum.None;
    this.pleuralMassType = PleuralMassTypeEnum.None;
    this.isNecrosis = false;
    this.isHemorrhage = false;
    this.isCysticChanges = false;
    this.isExtrapleuralFatSign = false;
    this.isCircumferentialSoftTissueAugmentation = false;
    this.isCircumferentialSoftTissueAugmentationRight = false;
    this.isCircumferentialSoftTissueAugmentationLeft = false;
    this.isInfiltrationChestWall = false;
    this.isInfiltrationOfExtrapleuralFatTissue = false;
    this.spineLocation = new SpineLocation();
    this.localizationAxialType = LocalizationAxialTypeEnum.None;
    this.densityType = DensityTypeEnum.None;
    this.isCysts = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.isNecroses = false;
    this.growthPatternsType = SoftPartsGrowthPatternsTypeEnum.None;
    this.isPleura = false;
    this.isPericardium = false;
    this.isBones = false;
    this.isLungs = false;
    this.isMediastinum = false;
    this.isCutisThickening = false;
    this.isPressureErosionRib = false;
    this.heterogeneousType = HeterogeneousTypeEnum.None;
  }
}
