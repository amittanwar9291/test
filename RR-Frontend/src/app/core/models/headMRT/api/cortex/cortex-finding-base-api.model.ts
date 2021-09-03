import { FindingBase } from '@models/shared/finding/finding.base';
import { CortexFindingTypeEnum } from '@enums/headMRT/cortex/';

import { CortexDifferentialDiagnosisTypeEnum } from '@enums/headMRT/cortex/common';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

export class CortexFindingBaseApiModel extends FindingBase {
  findingType: CortexFindingTypeEnum;
  differentialDiagnosisType: CortexDifferentialDiagnosisTypeEnum;

  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  isNecrosis: boolean;
  isCysts: boolean;
  isHemorrhage: boolean;
  isInternalStructureSignalVoids: boolean;
  isFluidLevel: boolean;
  isMassEffect: boolean;
  isPerifocalEdema: boolean;
  isNarrowedSulci: boolean;
  isBlurringOfWhiteGreyJunction: boolean;
  t1WSignal: string;
  t2WSignal: string;
  flairWSignal: string;
  isT2SignalVoid: boolean;
  signalVoidType: SignalVoidTypeEnum;
  dwiSignal: string;
  adcSignal: string;
  isDiffusionRestriction: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  isLesionOfTheSameEntity: boolean;

  constructor() {
    super();

    this.findingType = CortexFindingTypeEnum.None;
    this.differentialDiagnosisType = CortexDifferentialDiagnosisTypeEnum.None;

    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.isNecrosis = false;
    this.isCysts = false;
    this.isHemorrhage = false;
    this.isInternalStructureSignalVoids = false;
    this.isFluidLevel = false;
    this.isMassEffect = false;
    this.isPerifocalEdema = false;
    this.isNarrowedSulci = false;
    this.isBlurringOfWhiteGreyJunction = false;
    this.t1WSignal = 'None';
    this.t2WSignal = 'None';
    this.flairWSignal = 'None';
    this.isT2SignalVoid = false;
    this.signalVoidType = SignalVoidTypeEnum.None;
    this.dwiSignal = 'None';
    this.adcSignal = 'None';
    this.isDiffusionRestriction = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.isLesionOfTheSameEntity = false;
  }
}
