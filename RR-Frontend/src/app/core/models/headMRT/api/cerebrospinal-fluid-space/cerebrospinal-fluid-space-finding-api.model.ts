import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { NormVariantVentricleTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/norm-variant-ventricle-type.enum';
import { CerebrospinalVentricleDiagnosisTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-ventricle-diagnosis-type.enum';
import { CerebrospinalMassDiagnosisTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-mass-diagnosis-type.enum';
import { HistologyKnownTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/histology-known-type.enum';
import { PatternTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/pattern-type.enum';
import { ConfigurationTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/configuration-type.enum';
import { ShrinkingTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/shrinking-type.enum';
import { AsymmetryTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/asymmetry-type.enum';
import { CerebrospinalSideTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-side-type.enum';
import { CerebrospinalFluidSpaceFindingBaseApiModel } from './cerebrospinal-fluid-space-finding-base-api.model';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

export class CerebrospinalFluidSpaceFindingApiModel extends CerebrospinalFluidSpaceFindingBaseApiModel {
  // Common
  descriptionType: DescriptionTypeEnum;
  isAnteriorHornRight: boolean;
  isCellaMediaRight: boolean;
  isTrigonumRight: boolean;
  isPosteriorHornRight: boolean;
  isTemporalHornRight: boolean;
  isAnteriorHornLeft: boolean;
  isCellaMediaLeft: boolean;
  isTrigonumLeft: boolean;
  isPosteriorHornLeft: boolean;
  isTemporalHornLeft: boolean;
  isForamenOfMonro: boolean;
  isForamenOfMonroRight: boolean;
  isForamenOfMonroLeft: boolean;
  isIIIVentricle: boolean;
  isAquaeductusMesencephaliSylvii: boolean;
  isIVVentricle: boolean;
  isForaminaOfLuschka: boolean;
  isForaminaOfLuschkaRight: boolean;
  isForaminaOfLuschkaLeft: boolean;
  isForamenOfMagendie: boolean;
  isSubarachnoidCisterns: boolean;
  isSuprasellarCistern: boolean;
  isInterpeduncularCistern: boolean;
  isQuadrigeminalCistern: boolean;
  isPontineCistern: boolean;
  isPrepontineCistern: boolean;
  isPontomedullaryCistern: boolean;
  isPontocerebellarCistern: boolean;
  isMeckelCave: boolean;
  isCisternaMagna: boolean;
  isInsularCistern: boolean;
  isRightSide: boolean;
  isLeftSide: boolean;
  size: number;
  secondPlane: number;
  thirdPlane: number;
  isSuspicionOf: boolean;
  isSubordinate: boolean;

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

  // Mass
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  isFat: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  isSubependymalNodules: boolean;
  isCalcified: boolean;
  massDifferentialDiagnosisIDescribe1Type: CerebrospinalMassDiagnosisTypeEnum;
  massDifferentialDiagnosis2Type: CerebrospinalMassDiagnosisTypeEnum;
  massDifferentialDiagnosis3Type: CerebrospinalMassDiagnosisTypeEnum;
  is1LesionOfTheSameEntity: boolean;

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

    // Common
    this.descriptionType = DescriptionTypeEnum.None;
    this.isAnteriorHornRight = false;
    this.isCellaMediaRight = false;
    this.isTrigonumRight = false;
    this.isPosteriorHornRight = false;
    this.isTemporalHornRight = false;
    this.isAnteriorHornLeft = false;
    this.isCellaMediaLeft = false;
    this.isTrigonumLeft = false;
    this.isPosteriorHornLeft = false;
    this.isTemporalHornLeft = false;
    this.isForamenOfMonro = false;
    this.isForamenOfMonroRight = false;
    this.isForamenOfMonroLeft = false;
    this.isIIIVentricle = false;
    this.isAquaeductusMesencephaliSylvii = false;
    this.isIVVentricle = false;
    this.isForaminaOfLuschka = false;
    this.isForaminaOfLuschkaRight = false;
    this.isForaminaOfLuschkaLeft = false;
    this.isForamenOfMagendie = false;
    this.isSubarachnoidCisterns = false;
    this.isSuprasellarCistern = false;
    this.isInterpeduncularCistern = false;
    this.isQuadrigeminalCistern = false;
    this.isPontineCistern = false;
    this.isPrepontineCistern = false;
    this.isPontomedullaryCistern = false;
    this.isPontocerebellarCistern = false;
    this.isMeckelCave = false;
    this.isCisternaMagna = false;
    this.isInsularCistern = false;
    this.isRightSide = false;
    this.isLeftSide = false;
    this.size = null;
    this.secondPlane = null;
    this.thirdPlane = null;
    this.isSuspicionOf = false;
    this.isSubordinate = false;

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

    // Mass
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.isFat = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.isSubependymalNodules = false;
    this.isCalcified = false;
    this.massDifferentialDiagnosisIDescribe1Type = CerebrospinalMassDiagnosisTypeEnum.None;
    this.massDifferentialDiagnosis2Type = CerebrospinalMassDiagnosisTypeEnum.None;
    this.massDifferentialDiagnosis3Type = CerebrospinalMassDiagnosisTypeEnum.None;
    this.is1LesionOfTheSameEntity = false;

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
