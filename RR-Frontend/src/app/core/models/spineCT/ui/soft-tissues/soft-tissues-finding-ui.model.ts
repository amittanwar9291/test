import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissuesFindingBaseUiModel } from '@models/spineCT/ui/soft-tissues/soft-tissues-finding-base-ui.model';

export class SoftTissuesFindingUiModel extends SoftTissuesFindingBaseUiModel {
  // ParaspinalMass

  descriptionType: DescriptionTypeEnum;

  constructor() {
    super();

    // ParaspinalMass

    this.descriptionType = DescriptionTypeEnum.None;
  }
}
