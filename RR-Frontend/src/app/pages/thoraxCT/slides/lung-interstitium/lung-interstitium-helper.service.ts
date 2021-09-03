import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FindingBase } from '@models/shared/finding/finding.base';

export class LungInterstitiumLargeLocalizerConfig {
  type: 'segments' | 'flaps';
  isSingle: boolean;
  modelName: string;
  isFinding: boolean;

  constructor(type: 'segments' | 'flaps', isSingle: boolean, modelName: string, isFinding: boolean) {
    this.type = type;
    this.isSingle = isSingle;
    this.modelName = modelName;
    this.isFinding = isFinding;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LungInterstitiumHelperService {
  largeLocalizerOpen = new BehaviorSubject<LungInterstitiumLargeLocalizerConfig>(null);
  diagnosisPresetData = new BehaviorSubject<FindingBase | FindingBase[]>(null);
}
