import { FindingBase } from '@models/shared/finding/finding.base';
import {
  PharynxFindingTypeEnum,
  DifferentialDiagnosisTypeEnum,
  MarginTypeEnum,
  CmEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum
} from '@enums/neckMRT/pharynx';

export class PharynxFindingBaseApiModel extends FindingBase {
  findingType: PharynxFindingTypeEnum;

  // Common
  isDiffusionRestriction: boolean;
  cmEnhancementQuantitativeType: CmEnhancementQuantitativeTypeEnum;
  homogeneityType: HomogeneityTypeEnum;

  // Mass
  differentialDiagnosis: DifferentialDiagnosisTypeEnum;
  isNasopharynx: boolean;
  isOropharynx: boolean;
  isHypopharynx: boolean;
  marginType: MarginTypeEnum;
  signalT1wType: string;
  signalT2wType: string;
  isNecrosis: boolean;
  isDisplacing: boolean;
  isInvasive: boolean;
  massHomogeneityType: HomogeneityTypeEnum;

  constructor() {
    super();
    this.findingType = PharynxFindingTypeEnum.None;

    // Common
    this.isDiffusionRestriction = false;
    this.cmEnhancementQuantitativeType = CmEnhancementQuantitativeTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;

    // Mass
    this.differentialDiagnosis = DifferentialDiagnosisTypeEnum.None;
    this.isNasopharynx = false;
    this.isOropharynx = false;
    this.isHypopharynx = false;
    this.marginType = MarginTypeEnum.None;
    this.signalT1wType = 'None';
    this.signalT2wType = 'None';
    this.isNecrosis = false;
    this.isDisplacing = false;
    this.isInvasive = false;
    this.massHomogeneityType = HomogeneityTypeEnum.None;
  }
}
