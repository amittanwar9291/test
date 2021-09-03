import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { CerebrospinalFluidSpaceFindingTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-type.enum';
import { NormVariantVentricleTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/norm-variant-ventricle-type.enum';
import { CerebrospinalVentricleDiagnosisTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-ventricle-diagnosis-type.enum';
import { PatternTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/pattern-type.enum';
import { ConfigurationTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/configuration-type.enum';
import { ShrinkingTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/shrinking-type.enum';
import { AsymmetryTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/asymmetry-type.enum';
import { CerebrospinalSideTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-side-type.enum';
import { CerebrospinalFluidSpaceFindingBaseUiModel } from './cerebrospinal-fluid-space-finding-base-ui.model';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

export class CerebrospinalFluidSpaceFindingUiModel extends CerebrospinalFluidSpaceFindingBaseUiModel {
  findingType: CerebrospinalFluidSpaceFindingTypeEnum;

  // Common
  descriptionType: DescriptionTypeEnum;
  isRightSide: boolean;
  isLeftSide: boolean;
  size: number;
  secondPlane: number;
  thirdPlane: number;

  // NormVariantVentricle
  normVariantVentricleType: NormVariantVentricleTypeEnum;

  // VentricleConfiguration
  configurationType: ConfigurationTypeEnum;
  shrinkingType: ShrinkingTypeEnum;
  asymmetryType: AsymmetryTypeEnum;
  isStenosis: boolean;
  isScarredResiduals: boolean;
  isParenchymalDefect: boolean;
  isTemporalHornExpansion: boolean;
  sideType: CerebrospinalSideTypeEnum;
  isFlatteningOfTheGyri: boolean;
  isTransependymalPressureCaps: boolean;
  isPlumpingPosteriorHorns: boolean;
  isEnlargementOfIIIVentricle: boolean;
  isHyperdynamicFluidFlowVoid: boolean;
  isInTheIIIVentricle: boolean;
  isInTheAqueduct: boolean;
  isCompressionBothSinuses: boolean;
  isAtrophyOfBrainParenchyma: boolean;
  isCerebrospinalFluidNegativePressure: boolean;
  isSlitVentricle: boolean;
  isThickeningDuraMater: boolean;
  isBilateralHygromas: boolean;
  isPachymeningealEnhancement: boolean;
  isTonsilDepression: boolean;
  evansIndex: number;
  corpusCallosumAngle: number;
  isExtended: boolean;
  maxDiameter: number;
  mamillopontineDistance: number;
  pontomesencephalicAngle: number;
  ventricleDifferentialDiagnosis1Type: CerebrospinalVentricleDiagnosisTypeEnum;
  ventricleDifferentialDiagnosis2Type: CerebrospinalVentricleDiagnosisTypeEnum;

  // SubarachnoidHemorrhage
  isMedian: boolean;
  isFrontal: boolean;
  isFrontobasal: boolean;
  isTemporal: boolean;
  isParietal: boolean;
  isOccipital: boolean;
  isInfratentorial: boolean;
  patternType: PatternTypeEnum;
  isAdjacentToTheTentorium: boolean;
  isPerimesencephalic: boolean;
  isVasospasm: boolean;
  isIschemia: boolean;
  isSubduralHematoma: boolean;
  isEpiduralHematoma: boolean;

  constructor() {
    super();
    this.findingType = CerebrospinalFluidSpaceFindingTypeEnum.None;

    // Common
    this.descriptionType = DescriptionTypeEnum.None;
    this.isRightSide = false;
    this.isLeftSide = false;
    this.size = null;
    this.secondPlane = null;
    this.thirdPlane = null;

    // NormVariantVentricle
    this.normVariantVentricleType = NormVariantVentricleTypeEnum.None;

    // VentricleConfiguration
    this.configurationType = ConfigurationTypeEnum.None;
    this.shrinkingType = ShrinkingTypeEnum.None;
    this.asymmetryType = AsymmetryTypeEnum.None;
    this.isStenosis = false;
    this.isScarredResiduals = false;
    this.isParenchymalDefect = false;
    this.isTemporalHornExpansion = false;
    this.sideType = CerebrospinalSideTypeEnum.None;
    this.isFlatteningOfTheGyri = false;
    this.isTransependymalPressureCaps = false;
    this.isPlumpingPosteriorHorns = false;
    this.isEnlargementOfIIIVentricle = false;
    this.isHyperdynamicFluidFlowVoid = false;
    this.isInTheIIIVentricle = false;
    this.isInTheAqueduct = false;
    this.isCompressionBothSinuses = false;
    this.isAtrophyOfBrainParenchyma = false;
    this.isCerebrospinalFluidNegativePressure = false;
    this.isSlitVentricle = false;
    this.isThickeningDuraMater = false;
    this.isBilateralHygromas = false;
    this.isPachymeningealEnhancement = false;
    this.isTonsilDepression = false;
    this.evansIndex = null;
    this.corpusCallosumAngle = null;
    this.isExtended = false;
    this.maxDiameter = null;
    this.mamillopontineDistance = null;
    this.pontomesencephalicAngle = null;
    this.ventricleDifferentialDiagnosis1Type = CerebrospinalVentricleDiagnosisTypeEnum.None;
    this.ventricleDifferentialDiagnosis2Type = CerebrospinalVentricleDiagnosisTypeEnum.None;

    // SubarachnoidHemorrhage
    this.isMedian = false;
    this.isFrontal = false;
    this.isFrontobasal = false;
    this.isTemporal = false;
    this.isParietal = false;
    this.isOccipital = false;
    this.isInfratentorial = false;
    this.patternType = PatternTypeEnum.None;
    this.isAdjacentToTheTentorium = false;
    this.isPerimesencephalic = false;
    this.isVasospasm = false;
    this.isIschemia = false;
    this.isSubduralHematoma = false;
    this.isEpiduralHematoma = false;
  }
}
