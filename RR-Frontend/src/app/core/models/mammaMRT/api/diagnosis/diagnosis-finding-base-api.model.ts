import { FindingBase } from '@models/shared/finding/finding.base';
import { DemarcationTypeEnum, FormTypeEnum, KmDynamicDelayedTypeEnum, KmDynamicInitialTypeEnum } from '@enums/mammaMRT';

export class DiagnosisFindingBaseApiModel extends FindingBase {
  formType: FormTypeEnum;
  demarcationType: DemarcationTypeEnum;
  signalT1w: string;
  signalT2w: string;
  enhancementType: string;
  kmDynamicInitialType: KmDynamicInitialTypeEnum;
  kmDynamicDelayedType: KmDynamicDelayedTypeEnum;

  constructor() {
    super();

    this.formType = FormTypeEnum.None;
    this.demarcationType = DemarcationTypeEnum.None;
    this.signalT1w = 'None';
    this.signalT2w = 'None';
    this.enhancementType = 'None';
    this.kmDynamicInitialType = KmDynamicInitialTypeEnum.None;
    this.kmDynamicDelayedType = KmDynamicDelayedTypeEnum.None;
  }
}
