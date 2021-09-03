import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';

export class SpineBonesLocalizerConfig {
  localizerModelPropName: string;
  logicType: SpineLocationLogicTypeEnum;
  localizationDescription: string;
  selectionAccessibilityMode: SpineSelectionAccessibilityModeEnum;

  constructor(
    localizerModelPropName: string,
    logicType: SpineLocationLogicTypeEnum,
    localizationDescription: string,
    selectionAccessibilityMode?: SpineSelectionAccessibilityModeEnum
  ) {
    this.localizerModelPropName = localizerModelPropName;
    this.logicType = logicType;
    this.localizationDescription = localizationDescription;
    this.selectionAccessibilityMode = selectionAccessibilityMode;
  }
}
