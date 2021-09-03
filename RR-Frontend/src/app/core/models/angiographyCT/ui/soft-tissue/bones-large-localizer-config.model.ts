import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';

export class BonesLargeLocalizerConfigModel {
  localizerModel: SpineLocation;
  localizerLogicType: SpineLocationLogicTypeEnum;
  selectionAccessibilityMode: SpineSelectionAccessibilityModeEnum;
  localizerTitle: string;
  localizerDescription: string;
  activeTabIndexOnClose?: number;
  constructor(
    localizerModel: SpineLocation,
    localizerLogicType: SpineLocationLogicTypeEnum,
    selectionAccessibilityMode: SpineSelectionAccessibilityModeEnum,
    localizerTitle: string,
    localizerDescription: string,
    activeTabIndexOnClose?: number
  ) {
    this.localizerModel = localizerModel;
    this.localizerLogicType = localizerLogicType;
    this.selectionAccessibilityMode = selectionAccessibilityMode;
    this.localizerTitle = localizerTitle;
    this.localizerDescription = localizerDescription;
    this.activeTabIndexOnClose = activeTabIndexOnClose;
  }
}
