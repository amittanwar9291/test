import { FindingBase } from '@models/shared/finding/finding.base';
import { MeningesFindingTypeEnum } from '@enums/headMRT/meninges';

import {
  CystTypeEnum,
  FatTypeEnum,
  GrowthPatternTypeEnum,
  HistologyKnownTypeEnum,
  MeningesMassDiagnosisTypeEnum,
  ShapeTypeEnum
} from '@enums/headMRT/meninges';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

export class MeningesFindingBaseUiModel extends FindingBase {
  findingType: MeningesFindingTypeEnum;
  massDifferentialDiagnosisLocalization: MeningesMassDiagnosisTypeEnum;

  // Common

  isRight: boolean;
  isLeft: boolean;
  isMedian: boolean;
  isFrontal: boolean;
  isTemporal: boolean;
  isParietal: boolean;
  isOccipital: boolean;
  isInfratentorial: boolean;
  isFalx: boolean;
  isTentorium: boolean;
  isLaminaCribrosa: boolean;
  isOpticNerveSheath: boolean;
  isIntrasellar: boolean;
  isPosteriorClinoidProcess: boolean;
  isSphenoidWing: boolean;
  isCerebellopontineAngle: boolean;
  isSulcusSigmoideus: boolean;
  isTrigoneOfTheLateralVentricle: boolean;
  isInsularCistern: boolean;
  isForamenMagnum: boolean;
  isSignalVoid: boolean;
  signalVoidType: SignalVoidTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  t1WSignal: number;
  t2WSignal: number;
  flairSignal: number;
  isDiffusionRestriction: boolean;
  isCapsule: boolean;
  isSignalVoids: boolean;
  isSuspicionOf: boolean;

  // Mass

  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  isFat: boolean;
  fatType: FatTypeEnum;
  isCysts: boolean;
  cystType: CystTypeEnum;
  isHemorrhageHemosiderin: boolean;
  isSepta: boolean;
  isNecrosis: boolean;
  isCalcification: boolean;
  growthPatternType: GrowthPatternTypeEnum;
  isIntrameatalGrowth: boolean;
  isIntraforaminalFissuralGrowth: boolean;
  isLocalVenousStasis: boolean;
  isBoneInfiltration: boolean;
  isPerifocalEdema: boolean;
  isDuraTailSign: boolean;
  isLocalHyperostosisOfTheBone: boolean;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  massDifferentialDiagnosis1: MeningesMassDiagnosisTypeEnum;
  massDifferentialDiagnosis2: MeningesMassDiagnosisTypeEnum;
  isSubordinate: boolean;
  massDifferentialDiagnosis3: MeningesMassDiagnosisTypeEnum;
  isLesionOfTheSameEntity: boolean;
  dwiSignal: number;
  adcSignal: number;

  constructor() {
    super();

    this.findingType = MeningesFindingTypeEnum.None;
    this.massDifferentialDiagnosisLocalization = MeningesMassDiagnosisTypeEnum.None;

    // Common

    this.isRight = false;
    this.isLeft = false;
    this.isMedian = false;
    this.isFrontal = false;
    this.isTemporal = false;
    this.isParietal = false;
    this.isOccipital = false;
    this.isInfratentorial = false;
    this.isFalx = false;
    this.isTentorium = false;
    this.isLaminaCribrosa = false;
    this.isOpticNerveSheath = false;
    this.isIntrasellar = false;
    this.isPosteriorClinoidProcess = false;
    this.isSphenoidWing = false;
    this.isCerebellopontineAngle = false;
    this.isSulcusSigmoideus = false;
    this.isTrigoneOfTheLateralVentricle = false;
    this.isInsularCistern = false;
    this.isForamenMagnum = false;
    this.isSignalVoid = false;
    this.signalVoidType = SignalVoidTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.t1WSignal = 0;
    this.t2WSignal = 0;
    this.flairSignal = 0;
    this.isDiffusionRestriction = false;
    this.isCapsule = false;
    this.isSignalVoids = false;
    this.isSuspicionOf = false;

    // Mass

    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.isFat = false;
    this.fatType = FatTypeEnum.None;
    this.isCysts = false;
    this.cystType = CystTypeEnum.None;
    this.isHemorrhageHemosiderin = false;
    this.isSepta = false;
    this.isNecrosis = false;
    this.isCalcification = false;
    this.growthPatternType = GrowthPatternTypeEnum.None;
    this.isIntrameatalGrowth = false;
    this.isIntraforaminalFissuralGrowth = false;
    this.isLocalVenousStasis = false;
    this.isBoneInfiltration = false;
    this.isPerifocalEdema = false;
    this.isDuraTailSign = false;
    this.isLocalHyperostosisOfTheBone = false;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.massDifferentialDiagnosis1 = MeningesMassDiagnosisTypeEnum.None;
    this.massDifferentialDiagnosis2 = MeningesMassDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.massDifferentialDiagnosis3 = MeningesMassDiagnosisTypeEnum.None;
    this.isLesionOfTheSameEntity = false;
    this.dwiSignal = 0;
    this.adcSignal = 0;
  }
}
