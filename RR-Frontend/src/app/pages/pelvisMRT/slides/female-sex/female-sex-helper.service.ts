import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FemaleSexHelperService {
  isCM = new BehaviorSubject<boolean>(null);
  isDWI = new BehaviorSubject<boolean>(null);
  firstCorpusUteriMassFindingValidationId = new BehaviorSubject<string>(null);
  activeTabIndex = new BehaviorSubject<number>(null);

  isUterusLargeLocalizerOpen = new BehaviorSubject<boolean>(null);
  isUterusFIGOLocalizerOpen = new BehaviorSubject<string>(null);
}
