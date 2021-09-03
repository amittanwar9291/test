import { FindingBase } from '@models/shared/finding/finding.base';

import {
  DifferentialDiagnosisTypeEnum,
  LarynxFindingTypeEnum,
  CmQuantitativeTypeEnum,
  HomogeneityTypeEnum,
  MarginTypeEnum
} from '@enums/neckMRT/larynx/';

export class LarynxFindingBaseApiModel extends FindingBase {
  findingType: LarynxFindingTypeEnum;

  // Common
  differentialDiagnosis: DifferentialDiagnosisTypeEnum;

  // Mass
  isSupraglotticSpace: boolean;
  isGlottis: boolean;
  isSinusOfMorgagni: boolean;
  marginType: MarginTypeEnum;
  t1wSignal: string;
  t2wSignal: string;
  isInvasive: boolean;
  cmQuantitativeType: CmQuantitativeTypeEnum;
  cmHomogeneityType: HomogeneityTypeEnum;

  constructor() {
    super();
    this.findingType = LarynxFindingTypeEnum.None;

    // Common
    this.differentialDiagnosis = DifferentialDiagnosisTypeEnum.None;

    // Mass
    this.isSupraglotticSpace = false;
    this.isGlottis = false;
    this.isSinusOfMorgagni = false;
    this.marginType = MarginTypeEnum.None;
    this.t1wSignal = 'None';
    this.t2wSignal = 'None';
    this.isInvasive = false;
    this.cmQuantitativeType = CmQuantitativeTypeEnum.None;
    this.cmHomogeneityType = HomogeneityTypeEnum.None;
  }
}
