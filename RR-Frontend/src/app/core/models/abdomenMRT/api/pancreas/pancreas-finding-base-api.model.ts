import { FindingBase } from '@models/shared/finding/finding.base';
import { ContrastEnhancementQuantitativeEnum, PancreasFindingTypeEnum } from '@enums/abdomenMRT/pancreas/';
import { FormTypeEnum, GrowthPatternsTypeEnum, MarginTypeEnum, ContrastEnhancementDistributionEnum } from '@enums/abdomenMRT/pancreas/mass';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';
import { PancreaticDuctPathologyTypeEnum } from '@enums/abdomenMRT/pancreas/acute-pancreatitis';

export class PancreasFindingBaseApiModel extends FindingBase {
  findingType: PancreasFindingTypeEnum;

  // Mass
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  formType: FormTypeEnum;
  signalT1wType: string;
  signalT2wType: string;
  isCapsule: boolean;
  isHemorrhage: boolean;
  isHemosiderin: boolean;
  isCalcification: boolean;
  contrastEnhancementDistribution: ContrastEnhancementDistributionEnum;

  // AcutePancreatitis
  pancreaticDuctPathologyType: PancreaticDuctPathologyTypeEnum;
  growthPatternsType: GrowthPatternsTypeEnum;
  contrastEnhancementQuantitative: ContrastEnhancementQuantitativeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;

  constructor() {
    super();
    this.findingType = PancreasFindingTypeEnum.None;

    // Mass
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.signalT1wType = 'None';
    this.signalT2wType = 'None';
    this.isCapsule = false;
    this.isHemorrhage = false;
    this.isHemosiderin = false;
    this.isCalcification = false;
    this.contrastEnhancementDistribution = ContrastEnhancementDistributionEnum.None;

    // AcutePancreatitis
    this.pancreaticDuctPathologyType = PancreaticDuctPathologyTypeEnum.None;
    this.growthPatternsType = GrowthPatternsTypeEnum.None;
    this.contrastEnhancementQuantitative = ContrastEnhancementQuantitativeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
  }
}
