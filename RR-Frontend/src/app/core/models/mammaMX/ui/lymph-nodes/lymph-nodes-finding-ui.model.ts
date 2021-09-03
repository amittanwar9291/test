import { FindingBase } from '@models/shared/finding/finding.base';
import { Guid } from '@models/shared/guid/guid';
import { LymphNodeDetailsUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-node-details-ui.model';

import { LymphNodesFindingTypeEnum } from '@enums/mammaMX/lymph-nodes';

export class LymphNodesFindingUiModel extends FindingBase {
  findingType: LymphNodesFindingTypeEnum;
  isRight: boolean;
  isLeft: boolean;
  leftLymphNodeDetails: LymphNodeDetailsUiModel;
  rightLymphNodeDetailsId: string;
  rightLymphNodeDetails: LymphNodeDetailsUiModel;

  constructor() {
    super();

    this.findingType = LymphNodesFindingTypeEnum.None;
    this.isRight = false;
    this.isLeft = false;
    this.leftLymphNodeDetails = new LymphNodeDetailsUiModel();
    this.rightLymphNodeDetailsId = Guid.createEmpty();
    this.rightLymphNodeDetails = new LymphNodeDetailsUiModel();
  }
}
