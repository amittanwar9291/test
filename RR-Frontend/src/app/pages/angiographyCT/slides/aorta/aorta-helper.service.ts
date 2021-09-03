import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LargeLocalizerOpenedConfig {
  isLocalizationReentry: boolean;
  isSingleChoice?: boolean;
  isArcusAortaeDivided?: boolean;
  isAdjacentChoice?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AortaHelperService {
  isLargeLocalizerOpened = new BehaviorSubject<LargeLocalizerOpenedConfig>(null);
  isCMYes = new BehaviorSubject<boolean>(null);
}
