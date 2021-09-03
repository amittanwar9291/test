import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BasalNucleiFindingBaseUiModel } from './basal-nuclei-finding-base-ui.model';

export class BasalNucleiFindingUiModel extends BasalNucleiFindingBaseUiModel {
  // Pathology

  // Localization tab
  descriptionType: DescriptionTypeEnum;

  // Characterization I tab
  size: number;
  size2ndPlane: number;
  size3rdPlane: number;

  constructor() {
    super();
    // Pathology

    // Localization tab
    this.descriptionType = DescriptionTypeEnum.None;

    // Characterization I tab
    this.size = null;
    this.size2ndPlane = null;
    this.size3rdPlane = null;
  }
}
