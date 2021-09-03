import { FindingBase } from '@models/shared/finding/finding.base';
import { DemarcationTypeEnum, FormTypeEnum, KmDynamicDelayedTypeEnum, KmDynamicInitialTypeEnum } from '@enums/mammaMRT';

export class DiagnosisFindingBaseUiModel extends FindingBase {
  formType: FormTypeEnum;
  demarcationType: DemarcationTypeEnum;
  signalT1w: number;
  signalT2w: number;
  enhancementType: string;
  kmDynamicInitialType: KmDynamicInitialTypeEnum;
  kmDynamicDelayedType: KmDynamicDelayedTypeEnum;

  constructor() {
    super();

    this.formType = FormTypeEnum.None;
    this.demarcationType = DemarcationTypeEnum.None;
    this.signalT1w = 0;
    this.signalT2w = 0;
    this.enhancementType = 'None';
    this.kmDynamicInitialType = KmDynamicInitialTypeEnum.None;
    this.kmDynamicDelayedType = KmDynamicDelayedTypeEnum.None;
  }
}
