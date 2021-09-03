import { FindingBase } from '@models/shared/finding/finding.base';
import { CerebrospinalFluidSpaceFindingTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-type.enum';
import { CerebrospinalMassDiagnosisTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-mass-diagnosis-type.enum';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

export class CerebrospinalFluidSpaceFindingBaseApiModel extends FindingBase {
  findingType: CerebrospinalFluidSpaceFindingTypeEnum;
  massDifferentialDiagnosisIKnow1Type: CerebrospinalMassDiagnosisTypeEnum;

  isLateralVentricle: boolean;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  isDisplacement: boolean;
  isInfiltration: boolean;
  t1WSignal: string;
  t2WSignal: string;
  flairSignal: string;
  isSignalVoid: boolean;
  signalVoidType: SignalVoidTypeEnum;
  isDiffusionRestriction: boolean;
  isHemorrhage: boolean;
  isNecrosis: boolean;
  isCalcification: boolean;
  isCysts: boolean;
  isSignalVoids: boolean;
  isFluidLevel: boolean;
  isHypertrophyChoroidPlexus: boolean;
  isPerifocalEdema: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;

  constructor() {
    super();

    this.findingType = CerebrospinalFluidSpaceFindingTypeEnum.None;
    this.massDifferentialDiagnosisIKnow1Type = CerebrospinalMassDiagnosisTypeEnum.None;

    this.isLateralVentricle = false;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.isDisplacement = false;
    this.isInfiltration = false;
    this.t1WSignal = 'None';
    this.t2WSignal = 'None';
    this.flairSignal = 'None';
    this.isSignalVoid = false;
    this.signalVoidType = SignalVoidTypeEnum.None;
    this.isDiffusionRestriction = false;
    this.isHemorrhage = false;
    this.isNecrosis = false;
    this.isCalcification = false;
    this.isCysts = false;
    this.isSignalVoids = false;
    this.isFluidLevel = false;
    this.isHypertrophyChoroidPlexus = false;
    this.isPerifocalEdema = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
  }
}
