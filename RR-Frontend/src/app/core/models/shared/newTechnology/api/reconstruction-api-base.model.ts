import { FindingBase } from '@models/shared/finding/finding.base';
import { ReconstructionTypeEnum } from '@enums/shared/technology/reconstruction-type.enum';

export class ReconstructionApiBaseModel extends FindingBase {
  reconstructionType: ReconstructionTypeEnum;

  constructor() {
    super();
    this.reconstructionType = ReconstructionTypeEnum.None;
  }
}
