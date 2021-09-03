// todo consider use such service in all pages (one for all) and showing/hiding header basing on subject value (instead of negative margin)
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum largeLocalizers {
  SPINE = 'SPINE',
  RIBS = 'RIBS'
}

@Injectable({
  providedIn: 'root'
})
export class BonesHelperService {
  isLargeLocalizerOpened = new BehaviorSubject<largeLocalizers>(null);
  previousRibsLocalizerSelection: string;
  previousSpineLocalizerSelection: string;
}
