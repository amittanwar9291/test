import { FindingBase } from '@models/shared/finding/finding.base';
import { BrainstemCranialNervesDiagnosisTypeEnum, BrainstemCranialNervesFindingTypeEnum } from '@enums/headMRT/brainstem-cranial-nerves';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';

export class BrainstemCranialNervesFindingBaseApiModel extends FindingBase {
  findingType: BrainstemCranialNervesFindingTypeEnum;
  differentialDiagnosis: BrainstemCranialNervesDiagnosisTypeEnum;

  isPons: boolean;
  t1WSignalType: string;
  t2WSignalType: string;
  flairSignalType: string;
  isSignalVoid: boolean;
  signalVoidType: SignalVoidTypeEnum;
  dwiSignalType: string;
  isCysts: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;

  constructor() {
    super();

    this.findingType = BrainstemCranialNervesFindingTypeEnum.None;
    this.differentialDiagnosis = BrainstemCranialNervesDiagnosisTypeEnum.None;

    this.isPons = false;
    this.t1WSignalType = 'None';
    this.t2WSignalType = 'None';
    this.flairSignalType = 'None';
    this.isSignalVoid = false;
    this.signalVoidType = SignalVoidTypeEnum.None;
    this.dwiSignalType = 'None';
    this.isCysts = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
  }
}
