import {
  CmEnhancementDistributionTypeEnum,
  DelimitationTypeEnum,
  FormTypeEnum,
  HistologyKnownTypeEnum,
  HomogeneityTypeEnum,
  PlantVariationPathologicalAnatomyTypeEnum,
  QuantityTypeEnum,
  SpleenDiagnosisTypeEnum,
  SpleenFindingTypeEnum
} from '@enums/abdomenMRT/spleen';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';
import { FileApiModel } from '@models/shared/uploader/file-api.model';

export class SpleenFindingBaseApiModel extends FindingBase {
  findingType: SpleenFindingTypeEnum;

  differentialDiagnosis: SpleenDiagnosisTypeEnum;

  // mass
  delimitationType: DelimitationTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  formType: FormTypeEnum;
  t1w: string;
  t2w: string;
  cmEnhancementQuantitativeType: CMEnhancementTypeEnum;
  cmEnhancementHomogeneityType: HomogeneityTypeEnum;
  cmEnhancementDistributionType: CmEnhancementDistributionTypeEnum;

  constructor() {
    super();

    this.findingType = SpleenFindingTypeEnum.None;
    this.differentialDiagnosis = SpleenDiagnosisTypeEnum.None;

    // mass
    this.delimitationType = DelimitationTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.t1w = 'None';
    this.t2w = 'None';
    this.cmEnhancementQuantitativeType = CMEnhancementTypeEnum.None;
    this.cmEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.cmEnhancementDistributionType = CmEnhancementDistributionTypeEnum.None;
  }
}
