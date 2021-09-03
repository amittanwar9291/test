import { FindingBase } from '@models/shared/finding/finding.base';
import { Guid } from '@models/shared/guid/guid';
import { LymphNodeDetailsApiModel } from '@models/mammaMX/api/lymph-nodes/lymph-node-details-api.model';

import { LymphNodesFindingTypeEnum } from '@enums/mammaMX/lymph-nodes';

export class LymphNodesFindingApiModel extends FindingBase {
  findingType: LymphNodesFindingTypeEnum;
  isRight: boolean;
  isLeft: boolean;
  leftLymphNodeDetails: LymphNodeDetailsApiModel;
  rightLymphNodeDetailsId: string;
  rightLymphNodeDetails: LymphNodeDetailsApiModel;

  constructor() {
    super();

    this.findingType = LymphNodesFindingTypeEnum.None;
    this.isRight = false;
    this.isLeft = false;
    this.leftLymphNodeDetails = new LymphNodeDetailsApiModel();
    this.rightLymphNodeDetailsId = Guid.createEmpty();
    this.rightLymphNodeDetails = new LymphNodeDetailsApiModel();
  }
}
