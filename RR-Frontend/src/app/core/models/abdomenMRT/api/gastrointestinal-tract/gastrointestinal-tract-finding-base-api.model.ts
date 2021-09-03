import { FindingBase } from '@models/shared/finding/finding.base';
import { GastrointestinaltractFindingTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract';
import {
  ContrastEnhancementQuantitativeTypeEnum,
  FormTypeEnum,
  GastrointestinalDifferentialDiagnosisTypeEnum,
  GastrointestinalHomogeneityTypeEnum,
  MarginTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/common';
import { IntestinalMassExtensionTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/intestinal-mass';

export class GastrointestinalTractFindingBaseApiModel extends FindingBase {
  // Common

  findingType: GastrointestinaltractFindingTypeEnum;

  differentialDiagnosisType: GastrointestinalDifferentialDiagnosisTypeEnum;
  formType: FormTypeEnum;
  isInvasive: boolean;
  isDisplacing: boolean;
  isOcclusive: boolean;
  isTransmuralSpread: boolean;
  isLymphadenopathy: boolean;
  marginType: MarginTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  homogeneityType: GastrointestinalHomogeneityTypeEnum;
  t1WSignalType: string;
  t2WSignalType: string;

  // Gastric Mass

  isUlceratingFinding: boolean;
  isLocoregionalLymphadenopathy: boolean;

  // Intestinal Mass

  intestinalMassExtensionType: IntestinalMassExtensionTypeEnum;
  isAdjacentFatTissue: boolean;

  constructor() {
    super();

    // Common

    this.findingType = GastrointestinaltractFindingTypeEnum.None;

    this.differentialDiagnosisType = GastrointestinalDifferentialDiagnosisTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.isInvasive = false;
    this.isDisplacing = false;
    this.isOcclusive = false;
    this.isTransmuralSpread = false;
    this.isLymphadenopathy = false;
    this.marginType = MarginTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.homogeneityType = GastrointestinalHomogeneityTypeEnum.None;
    this.t1WSignalType = 'None';
    this.t2WSignalType = 'None';

    // Gastric Mass

    this.isUlceratingFinding = false;
    this.isLocoregionalLymphadenopathy = false;

    // Intestinal Mass

    this.intestinalMassExtensionType = IntestinalMassExtensionTypeEnum.None;
    this.isAdjacentFatTissue = false;
  }
}
