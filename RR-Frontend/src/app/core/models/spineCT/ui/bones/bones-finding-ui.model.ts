import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DiscGeneralLocationModel } from '@models/shared/spine/localizers/disc-general-location.model';
import { BonesFindingBaseUiModel } from '@models/spineCT/ui/bones/bones-finding-base-ui.model';

export class BonesFindingUiModel extends BonesFindingBaseUiModel {
  // common

  spineLocation: SpineLocation;

  // MassSpine

  descriptionType: DescriptionTypeEnum;

  // Characterization I

  vertebralBodyLocalizations: DiscGeneralLocationModel;
  expansionMaxDiameterInMm: number;
  expansion2ndPlaneInMm: number;
  expansion3rdPlaneInMm: number;

  constructor() {
    super();
    // common

    this.spineLocation = new SpineLocation();

    // MassSpine

    this.descriptionType = DescriptionTypeEnum.None;

    // Characterization I

    this.vertebralBodyLocalizations = new DiscGeneralLocationModel();
    this.expansionMaxDiameterInMm = null;
    this.expansion2ndPlaneInMm = null;
    this.expansion3rdPlaneInMm = null;
  }
}
