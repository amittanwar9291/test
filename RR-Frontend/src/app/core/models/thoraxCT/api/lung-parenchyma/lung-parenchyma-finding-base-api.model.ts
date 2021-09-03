import { FindingBase } from '@models/shared/finding/finding.base';
import { LungParenchymaFindingTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-finding-type.enum';
import { LungParenchymaDiagnosisTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-diagnosis-type.enum';
import { LungParenchymaDensityTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-density-type.enum';
import { MarginTypeEnum } from '@enums/thoraxCT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/thoraxCT/common/homogeneity-type.enum';
import { LungParenchymaCalcificationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-calcification-type.enum';
import { LocalizationDetailsTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/localization-details-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxCT/common/contrast-enhancement-quantitative-type.enum';
import { SubsolidTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/subsolid-type.enum';
import { MorphologyTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/morphology-type.enum';
import { LocalizationAxialTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/localization-axial-type.enum';
import { GroundGlassOpacityTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/ground-glass-opacity-type.enum';
import { ConsolidationLocalizationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/consolidation-localization-type.enum';

export class LungParenchymaFindingBaseApiModel extends FindingBase {
  findingType: LungParenchymaFindingTypeEnum;

  // Common
  mainCharacteristicsDifferentialDiagnosis01: LungParenchymaDiagnosisTypeEnum;
  densityType: LungParenchymaDensityTypeEnum;
  subsolidType: SubsolidTypeEnum;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  isEccentricNecrosis: boolean;
  isFat: boolean;
  isCalcification: boolean;
  calcificationType: LungParenchymaCalcificationTypeEnum;
  isCavitation: boolean;
  isPleuralFinger: boolean;
  isCoronaRadiataOrSpiculae: boolean;
  isHaloSign: boolean;
  isReversedHaloSign: boolean;
  isHemorrhage: boolean;
  mainCharacteristicsLungsFlapsLocation: string; // localizer LungsFlapsModel

  // RoundStove
  localizationDetailsType: LocalizationDetailsTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;

  // Consolidation
  isAssociatedAtelectasis: boolean;
  consolidationLocalizationType: ConsolidationLocalizationTypeEnum;
  isPositiveBronchopneumogram: boolean;
  isGroundGlassOpacity: boolean;
  groundGlassOpacityType: GroundGlassOpacityTypeEnum;
  isDarkBronchusSign: boolean;
  localizationAxialType: LocalizationAxialTypeEnum;
  morphologyType: MorphologyTypeEnum;
  isConfluent: boolean;
  isRoundedShape: boolean;
  isGeographicAppearance: boolean;
  isPeribronchovascular: boolean;
  isCrazyPavingPattern: boolean;
  isInterlobularSeptalThickening: boolean;
  isAbscess: boolean;
  isLuftsichelSign: boolean;
  isAccompanyingEffusion: boolean;

  constructor() {
    super();
    this.findingType = LungParenchymaFindingTypeEnum.None;

    // Common
    this.mainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisTypeEnum.None;
    this.densityType = LungParenchymaDensityTypeEnum.None;
    this.subsolidType = SubsolidTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.isEccentricNecrosis = false;
    this.isFat = false;
    this.isCalcification = false;
    this.calcificationType = LungParenchymaCalcificationTypeEnum.None;
    this.isCavitation = false;
    this.isPleuralFinger = false;
    this.isCoronaRadiataOrSpiculae = false;
    this.isHaloSign = false;
    this.isReversedHaloSign = false;
    this.isHemorrhage = false;
    this.mainCharacteristicsLungsFlapsLocation = 'None'; // localizer LungsFlapsModel

    // Nodule
    this.localizationDetailsType = LocalizationDetailsTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;

    // Consolidation
    this.isAssociatedAtelectasis = false;
    this.consolidationLocalizationType = ConsolidationLocalizationTypeEnum.None;
    this.isPositiveBronchopneumogram = false;
    this.isGroundGlassOpacity = false;
    this.groundGlassOpacityType = GroundGlassOpacityTypeEnum.None;
    this.isDarkBronchusSign = false;
    this.localizationAxialType = LocalizationAxialTypeEnum.None;
    this.morphologyType = MorphologyTypeEnum.None;
    this.isConfluent = false;
    this.isRoundedShape = false;
    this.isGeographicAppearance = false;
    this.isPeribronchovascular = false;
    this.isCrazyPavingPattern = false;
    this.isInterlobularSeptalThickening = false;
    this.isAbscess = false;
    this.isLuftsichelSign = false;
    this.isAccompanyingEffusion = false;
  }
}
