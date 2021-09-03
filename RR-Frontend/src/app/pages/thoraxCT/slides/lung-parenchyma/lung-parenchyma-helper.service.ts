import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

export class LungParenchymaLargeLocalizerConfig {
  type: 'segments' | 'flaps';
  isSingle: boolean;
  modelName: string;

  constructor(type: 'segments' | 'flaps', isSingle: boolean, modelName: string) {
    this.type = type;
    this.isSingle = isSingle;
    this.modelName = modelName;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LungParenchymaHelperService {
  largeLocalizerOpen = new BehaviorSubject<LungParenchymaLargeLocalizerConfig>(null);
  isCM = new BehaviorSubject<SimpleAnswerEnum>(SimpleAnswerEnum.None);
  currentTabIndex = new BehaviorSubject<number>(0);
}
