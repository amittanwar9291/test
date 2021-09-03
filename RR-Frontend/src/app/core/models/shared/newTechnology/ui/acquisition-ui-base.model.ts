import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';

import { FindingBase } from '@models/shared/finding/finding.base';

import { AcquisitionTypeEnum } from '@enums/shared/technology';
import { ReconstructionUiBaseModel } from '@models/shared/newTechnology/ui/reconstruction-ui-base.model';

export class AcquisitionUiBaseModel<TReconstructionUiModel extends ReconstructionUiBaseModel> extends FindingBase {
  acquisitionType: AcquisitionTypeEnum;
  reconstructions: TReconstructionUiModel[];

  constructor(private ctor: INoParamConstructor<TReconstructionUiModel>) {
    super();
    this.acquisitionType = AcquisitionTypeEnum.None;
    this.reconstructions = [new this.ctor()];
  }
}
