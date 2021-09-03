import { FindingBase } from '@models/shared/finding/finding.base';
import { MeningesFindingTypeEnum } from '@enums/headMRT/meninges';

import { MeningesMassDiagnosisTypeEnum, ShapeTypeEnum } from '@enums/headMRT/meninges';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

export class MeningesFindingBaseApiModel extends FindingBase {
  findingType: MeningesFindingTypeEnum;
  massDifferentialDiagnosisLocalization: MeningesMassDiagnosisTypeEnum;

  // Common

  isSignalVoid: boolean;
  signalVoidType: SignalVoidTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  t1WSignal: string;
  t2WSignal: string;
  flairSignal: string;

  // Mass

  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  isCysts: boolean;
  isNecrosis: boolean;
  isDuraTailSign: boolean;
  isLocalHyperostosisOfTheBone: boolean;
  isPerifocalEdema: boolean;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;

  constructor() {
    super();

    this.findingType = MeningesFindingTypeEnum.None;
    this.massDifferentialDiagnosisLocalization = MeningesMassDiagnosisTypeEnum.None;

    // Common

    this.isSignalVoid = false;
    this.signalVoidType = SignalVoidTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.t1WSignal = 'None';
    this.t2WSignal = 'None';
    this.flairSignal = 'None';

    // Mass

    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.isCysts = false;
    this.isNecrosis = false;
    this.isDuraTailSign = false;
    this.isLocalHyperostosisOfTheBone = false;
    this.isPerifocalEdema = false;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
  }
}
