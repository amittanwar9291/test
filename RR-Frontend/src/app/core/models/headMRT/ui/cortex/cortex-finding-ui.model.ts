import { CortexFindingBaseUiModel } from './cortex-finding-base-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export class CortexFindingUiModel extends CortexFindingBaseUiModel {
  descriptionType: DescriptionTypeEnum;
  size: number;
  size2ndPlane: number;
  size3rdPlane: number;

  constructor() {
    super();

    this.descriptionType = DescriptionTypeEnum.None;
    this.size = null;
    this.size2ndPlane = null;
    this.size3rdPlane = null;
  }
}
