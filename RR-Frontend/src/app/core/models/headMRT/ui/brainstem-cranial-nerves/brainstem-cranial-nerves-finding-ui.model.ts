import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BrainstemCranialNervesFindingBaseUiModel } from './brainstem-cranial-nerves-finding-base-ui.model';

export class BrainstemCranialNervesFindingUiModel extends BrainstemCranialNervesFindingBaseUiModel {
  descriptionType: DescriptionTypeEnum;

  size: number;
  secondPlane: number;
  thirdPlane: number;

  constructor() {
    super();

    this.descriptionType = DescriptionTypeEnum.None;

    this.size = null;
    this.secondPlane = null;
    this.thirdPlane = null;
  }
}
