import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';

export class SpineCTMyelonLocalizerConfig {
  isDirectional?: boolean;
  model?: SpineLocation | SpineDirectionalLocation;
  logicType?: SpineLocationLogicTypeEnum;
  title?: string;
  localizationDescription?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpineCTMyelonHelperService {
  isCMYes = new BehaviorSubject<boolean>(null);
  largeLocalizerConfig = new BehaviorSubject<SpineCTMyelonLocalizerConfig>(null);
  activeTabIndex = new BehaviorSubject<number>(0);
}
