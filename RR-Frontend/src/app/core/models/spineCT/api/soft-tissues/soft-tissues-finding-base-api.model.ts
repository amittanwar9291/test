import { FindingBase } from '@models/shared/finding/finding.base';
import { SoftTissuesFindingTypeEnum } from '@enums/spineCT/soft-tissues/soft-tissues-finding-type.enum';
import { SoftTissuesDiagnosisTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/soft-tissues-diagnosis-type.enum';
import { MarginTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/margin-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/contrast-enhancement-distribution-type.enum';

export class SoftTissuesFindingBaseApiModel extends FindingBase {
  findingType: SoftTissuesFindingTypeEnum;

  // Common

  isCalcification: boolean;

  // ParaspinalMass

  differentialDiagnosis: SoftTissuesDiagnosisTypeEnum;
  marginType: MarginTypeEnum;
  isFluidLevel: boolean;
  isCapsuleOrMembrane: boolean;
  isSurroundinginflammatoryReaction: boolean;
  isCommunicationWithTheIntraduralSpace: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;

  constructor() {
    super();
    this.findingType = SoftTissuesFindingTypeEnum.None;

    // Common

    this.isCalcification = false;

    // ParaspinalMass

    this.differentialDiagnosis = SoftTissuesDiagnosisTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.isFluidLevel = false;
    this.isCapsuleOrMembrane = false;
    this.isSurroundinginflammatoryReaction = false;
    this.isCommunicationWithTheIntraduralSpace = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
  }
}
