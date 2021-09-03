import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';

export class SpineCTLargeLocalizerConfig {
  logicType: SpineLocationLogicTypeEnum;
  localizationDescription: string;

  constructor(logicType: SpineLocationLogicTypeEnum, localizationDescription: string) {
    this.logicType = logicType;
    this.localizationDescription = localizationDescription;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DiscHelperService {
  constructor() {}

  largeLocalizerOpenedConfig = new BehaviorSubject<SpineCTLargeLocalizerConfig>(null);
  isCMYes = new BehaviorSubject<boolean>(null);
  activeTabIndex = new BehaviorSubject<number>(0);
}
