import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';

@Injectable({
  providedIn: 'root'
})
export class BonesHelperService {
  isCMYes = new BehaviorSubject<boolean>(null);
  spineLocalizerConfig = new BehaviorSubject<ThoraxMRTBonesSpineLocalizerConfig>(null);
  ribsLocalizerConfig = new BehaviorSubject<ThoraxMRTBonesRibsLocalizerConfig>(null);
}

export class ThoraxMRTBonesSpineLocalizerConfig {
  logicType: SpineLocationLogicTypeEnum;
  selectionAccessibilityMode: SpineSelectionAccessibilityModeEnum;
  localizationDescription: string;
  constructor(
    logicType: SpineLocationLogicTypeEnum,
    selectionAccessibilityMode: SpineSelectionAccessibilityModeEnum,
    localizationDescription: string
  ) {
    this.logicType = logicType;
    this.selectionAccessibilityMode = selectionAccessibilityMode;
    this.localizationDescription = localizationDescription;
  }
}

export class ThoraxMRTBonesRibsLocalizerConfig {
  isSingleSelect: boolean;
  descriptionRrid: string;
}
