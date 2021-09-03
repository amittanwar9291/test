import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class InfoIconConfig {
  rrid = null;
  isHorizontal = false;
}

@Injectable({
  providedIn: 'root'
})
export class InfoIconService {
  infoIconConfig$ = new BehaviorSubject(new InfoIconConfig());

  constructor() {}

  resetInfoIconConfig() {
    this.infoIconConfig$.next(new InfoIconConfig());
  }
}
