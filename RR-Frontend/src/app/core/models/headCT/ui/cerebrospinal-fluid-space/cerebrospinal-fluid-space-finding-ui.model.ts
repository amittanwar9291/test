import { FindingBase } from '@models/shared/finding/finding.base';
import { CerebrospinalFluidSpaceFindingTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MarginTypeEnum } from '@enums/headCT/common/margin-type.enum';
import { DensityTypeEnum } from '@enums/headCT/common/density-type.enum';
import { HomogeneityTypeEnum } from '@enums/headCT/common/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/headCT/common/shape-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headCT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastDistributionTypeEnum } from '@enums/headCT/common/contrast-distribution-type.enum';
import { NormVariantVentricleTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/norm-variant-ventricle-type.enum';
import { ConfigurationTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/configuration-type.enum';
import { ShrinkingTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/shrinking-type.enum';
import { AsymmetryTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/asymmetry-type.enum';
import { CerebrospinalSideTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/cerebrospinal-side-type.enum';
import { CerebrospinalVentricleDiagnosisTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/cerebrospinal-ventricle-diagnosis-type.enum';
import { HistologyKnownTypeEnum } from '@enums/headCT/common/histology-known-type.enum';
import { CerebrospinalMassDiagnosisTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/cerebrospinal-mass-diagnosis-type.enum';
import { PatternTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/pattern-type.enum';
import { FisherScaleTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/fisher-scale-type.enum';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';

export class CerebrospinalFluidSpaceFindingUiModel extends FindingBase {
  findingType: CerebrospinalFluidSpaceFindingTypeEnum;
  descriptionType: DescriptionTypeEnum;

  referencePicture: ReferencePictureUiModel;

  isLateralVentricle: boolean;
  isLateralVentricleRight: boolean;
  isAnteriorHornRight: boolean;
  isCellaMediaRight: boolean;
  isTrigonumRight: boolean;
  isPosteriorHornRight: boolean;
  isTemporalHornRight: boolean;
  isLateralVentricleLeft: boolean;
  isAnteriorHornLeft: boolean;
  isCellaMediaLeft: boolean;
  isTrigonumLeft: boolean;
  isPosteriorHornLeft: boolean;
  isTemporalHornLeft: boolean;
  isForamenMonroi: boolean;
  isForamenMonroiRight: boolean;
  isForamenMonroiLeft: boolean;
  isIIIVentricle: boolean;
  isAquaeductusMesencephaliSylvii: boolean;
  isIVVentricle: boolean;
  isForamenLuschkae: boolean;
  isForamenLuschkaeRight: boolean;
  isForamenLuschkaeLeft: boolean;
  isForamenMagendie: boolean;
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
  size: number;
  secondPlane: number;
  thirdPlane: number;
  isRightSide: boolean;
  isLeftSide: boolean;
  marginType: MarginTypeEnum;
  densityType: DensityTypeEnum;
  quantitative: number;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastDistributionTypeEnum;
  isSuspicionOf: boolean;
  isSubordinate: boolean;
  normVariantVentricleType: NormVariantVentricleTypeEnum;
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
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  isSubstanceDefect: boolean;
  isHemorrhage: boolean;
  isNecrosis: boolean;
  isCalcification: boolean;
  isFat: boolean;
  isCysts: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  isFluidLevel: boolean;
  isDisplacement: boolean;
  isInfiltration: boolean;
  isSubependymalNodules: boolean;
  isCalcified: boolean;
  isHypertrophyChoroidPlexus: boolean;
  isPerifocalEdema: boolean;
  isHydrocephalus: boolean;
  massDifferentialDiagnosisIKnow1Type: CerebrospinalMassDiagnosisTypeEnum;
  massDifferentialDiagnosisIDescribe1Type: CerebrospinalMassDiagnosisTypeEnum;
  massDifferentialDiagnosis2Type: CerebrospinalMassDiagnosisTypeEnum;
  massDifferentialDiagnosis3Type: CerebrospinalMassDiagnosisTypeEnum;
  is1LesionOfTheSameEntity: boolean;
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
  fisherScaleType: FisherScaleTypeEnum;

  constructor() {
    super();
    this.findingType = CerebrospinalFluidSpaceFindingTypeEnum.None;
    this.descriptionType = DescriptionTypeEnum.None;

    this.referencePicture = new ReferencePictureUiModel();

    this.isLateralVentricle = false;
    this.isLateralVentricleRight = false;
    this.isAnteriorHornRight = false;
    this.isCellaMediaRight = false;
    this.isTrigonumRight = false;
    this.isPosteriorHornRight = false;
    this.isTemporalHornRight = false;
    this.isLateralVentricleLeft = false;
    this.isAnteriorHornLeft = false;
    this.isCellaMediaLeft = false;
    this.isTrigonumLeft = false;
    this.isPosteriorHornLeft = false;
    this.isTemporalHornLeft = false;
    this.isForamenMonroi = false;
    this.isForamenMonroiRight = false;
    this.isForamenMonroiLeft = false;
    this.isIIIVentricle = false;
    this.isAquaeductusMesencephaliSylvii = false;
    this.isIVVentricle = false;
    this.isForamenLuschkae = false;
    this.isForamenLuschkaeRight = false;
    this.isForamenLuschkaeLeft = false;
    this.isForamenMagendie = false;
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
    this.size = null;
    this.secondPlane = null;
    this.thirdPlane = null;
    this.isRightSide = false;
    this.isLeftSide = false;
    this.marginType = MarginTypeEnum.None;
    this.densityType = DensityTypeEnum.None;
    this.quantitative = null;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastDistributionTypeEnum.None;
    this.isSuspicionOf = false;
    this.isSubordinate = false;
    this.normVariantVentricleType = NormVariantVentricleTypeEnum.None;
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
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.isSubstanceDefect = false;
    this.isHemorrhage = false;
    this.isNecrosis = false;
    this.isCalcification = false;
    this.isFat = false;
    this.isCysts = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.isFluidLevel = false;
    this.isDisplacement = false;
    this.isInfiltration = false;
    this.isSubependymalNodules = false;
    this.isCalcified = false;
    this.isHypertrophyChoroidPlexus = false;
    this.isPerifocalEdema = false;
    this.isHydrocephalus = false;
    this.massDifferentialDiagnosisIKnow1Type = CerebrospinalMassDiagnosisTypeEnum.None;
    this.massDifferentialDiagnosisIDescribe1Type = CerebrospinalMassDiagnosisTypeEnum.None;
    this.massDifferentialDiagnosis2Type = CerebrospinalMassDiagnosisTypeEnum.None;
    this.massDifferentialDiagnosis3Type = CerebrospinalMassDiagnosisTypeEnum.None;
    this.is1LesionOfTheSameEntity = false;
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
    this.fisherScaleType = FisherScaleTypeEnum.None;
  }
}
