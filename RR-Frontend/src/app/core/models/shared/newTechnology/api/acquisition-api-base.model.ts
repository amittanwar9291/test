import { FindingBase } from '@models/shared/finding/finding.base';

import { AcquisitionTypeEnum } from '@enums/shared/technology';
import { ReconstructionApiBaseModel } from '@models/shared/newTechnology/api/reconstruction-api-base.model';

export class AcquisitionApiBaseModel<TReconstructionApiModel extends ReconstructionApiBaseModel> extends FindingBase {
  acquisitionType: AcquisitionTypeEnum;
  reconstructions: TReconstructionApiModel[];

  constructor() {
    super();
    this.acquisitionType = AcquisitionTypeEnum.None;
    this.reconstructions = [];
  }
}
