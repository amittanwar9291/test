import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CerebrospinalFluidSpaceHelperService {
  isLargeLocalizerOpen = new BehaviorSubject<boolean>(null);
  isCMYes = new BehaviorSubject<boolean>(null);
  isWeightingTypeDWI = new BehaviorSubject<boolean>(null);
}
