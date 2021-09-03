import { FindingBase } from '@models/shared/finding/finding.base';
import { CortexFindingTypeEnum } from '@enums/headMRT/cortex/';

import { ClassificationFazekasTypeEnum, CortexDifferentialDiagnosisTypeEnum } from '@enums/headMRT/cortex/common';

import { ClassificationAdamsTypeEnum } from '@enums/headMRT/cortex/diffuse';

import { ClassificationWHOTypeEnum, DetailsTypeEnum, LocalizationTypeEnum } from '@enums/headMRT/cortex/focal';
import { CorticalThinningTypeEnum } from '@enums/headMRT/cortex/common';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { CortexLocalizerModel } from '@models/headMRT/ui/cortex-localizer.model';
import { HistologyKnownTypeEnum } from '@enums/headMRT/common/histology-known-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { RegionTypeEnum } from '@enums/headMRT/common/region-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
export class CortexFindingBaseUiModel extends FindingBase {
  // COMMON

  findingType: CortexFindingTypeEnum;
  differentialDiagnosisType: CortexDifferentialDiagnosisTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  localizationFazekasScale: ClassificationFazekasTypeEnum;
  cortexLocations: CortexLocalizerModel;
  isPraecuneus: boolean;
  isCuneus: boolean;
  isLingualGyrus: boolean;
  isGyrusTemporalisTransversus: boolean;
  isLateralOccipitotemporalGyrus: boolean;
  isParsIntermedia: boolean;
  isSuperiorCerebellarPeduncle: boolean;
  isMiddleCerebellarPeduncle: boolean;
  isInferiorCerebellarPeduncle: boolean;
  isCortex: boolean;
  isWhiteMatter: boolean;
  localizationType: LocalizationTypeEnum;
  detailsType: DetailsTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  t1WSignal: number;
  t2WSignal: number;
  flairWSignal: number;
  isT2SignalVoid: boolean;
  signalVoidType: SignalVoidTypeEnum;
  isDiffusionRestriction: boolean;
  isCysts: boolean;
  isCalcification: boolean;
  isNecrosis: boolean;
  isInternalStructureSignalVoids: boolean;
  isHemorrhage: boolean;
  isConfluent: boolean;
  isMassEffect: boolean;
  isInfiltration: boolean;
  isNarrowedSulci: boolean;
  isBlurringOfWhiteGreyJunction: boolean;
  isPerifocalEdema: boolean;
  isDescentOfTheCerebellarTonsils: boolean;
  isHydrocephalus: boolean;
  isMidlineShift: boolean;
  sideType: SideTypeEnum;
  midlineShift: number;
  isHerniation: boolean;
  regionType: RegionTypeEnum;
  isCorticalThinning: boolean;
  corticalThinningType: CorticalThinningTypeEnum;
  isMesiotemporalSclerosis: boolean;
  isCorticalTuber: boolean;
  isSubependymalNodules: boolean;
  isCalcified: boolean;
  isAbscess: boolean;
  maxDiameter: number;
  isVentricularHerniation: boolean;
  isLateralVentricleRight: boolean;
  isLateralVentricleLeft: boolean;
  is3RdVentricle: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  differentialDiagnosisType1: CortexDifferentialDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  classificationFazekas1: ClassificationFazekasTypeEnum;
  differentialDiagnosisType2: CortexDifferentialDiagnosisTypeEnum;
  isSubordinate: boolean;
  classificationFazekas2: ClassificationFazekasTypeEnum;
  differentialDiagnosisType3: CortexDifferentialDiagnosisTypeEnum;
  classificationFazekas3: ClassificationFazekasTypeEnum;
  isLesionOfTheSameEntity: boolean;
  isRight: boolean;
  isLeft: boolean;
  isFrontal: boolean;
  isTemporal: boolean;
  isParietal: boolean;
  isOccipital: boolean;
  isInfratentorial: boolean;

  // FOCAL

  localizationWHOClassification: ClassificationWHOTypeEnum;
  marginType: MarginTypeEnum;
  dwiSignal: number;
  adcSignal: number;
  isSubstanceDefect: boolean;
  isFat: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  isFluidLevel: boolean;
  classificationWHO1: ClassificationWHOTypeEnum;
  classificationWHO2: ClassificationWHOTypeEnum;
  classificationWHO3: ClassificationWHOTypeEnum;

  // DIFFUSE

  localizationModifiedClassificationAdams: ClassificationAdamsTypeEnum;
  isMicroBleeding: boolean;
  isHemorrhagicLacunae: boolean;
  isAtrophy: boolean;
  classificationAdams1: ClassificationAdamsTypeEnum;
  classificationAdams2: ClassificationAdamsTypeEnum;
  classificationAdams3: ClassificationAdamsTypeEnum;

  constructor() {
    super();

    // COMMON

    this.findingType = CortexFindingTypeEnum.None;
    this.differentialDiagnosisType = CortexDifferentialDiagnosisTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.localizationFazekasScale = ClassificationFazekasTypeEnum.None;
    this.cortexLocations = new CortexLocalizerModel();
    this.isPraecuneus = false;
    this.isCuneus = false;
    this.isLingualGyrus = false;
    this.isGyrusTemporalisTransversus = false;
    this.isLateralOccipitotemporalGyrus = false;
    this.isParsIntermedia = false;
    this.isSuperiorCerebellarPeduncle = false;
    this.isMiddleCerebellarPeduncle = false;
    this.isInferiorCerebellarPeduncle = false;
    this.isCortex = false;
    this.isWhiteMatter = false;
    this.localizationType = LocalizationTypeEnum.None;
    this.detailsType = DetailsTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.t1WSignal = 0;
    this.t2WSignal = 0;
    this.flairWSignal = 0;
    this.isT2SignalVoid = false;
    this.signalVoidType = SignalVoidTypeEnum.None;
    this.isDiffusionRestriction = false;
    this.isCysts = false;
    this.isCalcification = false;
    this.isNecrosis = false;
    this.isInternalStructureSignalVoids = false;
    this.isHemorrhage = false;
    this.isConfluent = false;
    this.isMassEffect = false;
    this.isInfiltration = false;
    this.isNarrowedSulci = false;
    this.isBlurringOfWhiteGreyJunction = false;
    this.isPerifocalEdema = false;
    this.isDescentOfTheCerebellarTonsils = false;
    this.isHydrocephalus = false;
    this.isMidlineShift = false;
    this.sideType = SideTypeEnum.None;
    this.midlineShift = null;
    this.isHerniation = false;
    this.regionType = RegionTypeEnum.None;
    this.isCorticalThinning = false;
    this.corticalThinningType = CorticalThinningTypeEnum.None;
    this.isMesiotemporalSclerosis = false;
    this.isCorticalTuber = false;
    this.isSubependymalNodules = false;
    this.isCalcified = false;
    this.isAbscess = false;
    this.maxDiameter = null;
    this.isVentricularHerniation = false;
    this.isLateralVentricleRight = false;
    this.isLateralVentricleLeft = false;
    this.is3RdVentricle = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.differentialDiagnosisType1 = CortexDifferentialDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.classificationFazekas1 = ClassificationFazekasTypeEnum.None;
    this.differentialDiagnosisType2 = CortexDifferentialDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.classificationFazekas2 = ClassificationFazekasTypeEnum.None;
    this.differentialDiagnosisType3 = CortexDifferentialDiagnosisTypeEnum.None;
    this.classificationFazekas3 = ClassificationFazekasTypeEnum.None;
    this.isLesionOfTheSameEntity = false;
    this.isRight = false;
    this.isLeft = false;
    this.isFrontal = false;
    this.isTemporal = false;
    this.isParietal = false;
    this.isOccipital = false;
    this.isInfratentorial = false;

    // FOCAL

    this.localizationWHOClassification = ClassificationWHOTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.dwiSignal = 0;
    this.adcSignal = 0;
    this.isSubstanceDefect = false;
    this.isFat = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.isFluidLevel = false;
    this.classificationWHO1 = ClassificationWHOTypeEnum.None;
    this.classificationWHO2 = ClassificationWHOTypeEnum.None;
    this.classificationWHO3 = ClassificationWHOTypeEnum.None;

    // DIFFUSE

    this.localizationModifiedClassificationAdams = ClassificationAdamsTypeEnum.None;
    this.isMicroBleeding = false;
    this.isHemorrhagicLacunae = false;
    this.isAtrophy = false;
    this.classificationAdams1 = ClassificationAdamsTypeEnum.None;
    this.classificationAdams2 = ClassificationAdamsTypeEnum.None;
    this.classificationAdams3 = ClassificationAdamsTypeEnum.None;
  }
}
