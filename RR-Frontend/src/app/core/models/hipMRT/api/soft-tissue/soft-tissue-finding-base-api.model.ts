import { FindingBase } from '@models/shared/finding/finding.base';
import {
  FindingTypeEnum,
  DifferentialDiagnosisTypeEnum,
  MarginTypeEnum,
  HomogeneityTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  ContrastEnhancementDistributionTypeEnum
} from '@enums/hipMRT/soft-tissue';

export class SoftTissueFindingBaseApiModel extends FindingBase {
  findingType: FindingTypeEnum;

  // Common
  t1wSignal: string;
  t2wSignal: string;
  differentialDiagnosis: DifferentialDiagnosisTypeEnum;

  // SoftTissueMass
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  isFat: boolean;
  isCysts: boolean;
  isCalcification: boolean;
  isCapsule: boolean;
  isBoneErosion: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  cmHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;

  constructor() {
    super();
    this.findingType = FindingTypeEnum.None;

    // Common
    this.t1wSignal = 'None';
    this.t2wSignal = 'None';
    this.differentialDiagnosis = DifferentialDiagnosisTypeEnum.None;

    // SoftTissueMass
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.isFat = false;
    this.isCysts = false;
    this.isCalcification = false;
    this.isCapsule = false;
    this.isBoneErosion = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.cmHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
  }
}
