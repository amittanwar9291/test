import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrainstemCranialNervesHelperService {
  isLargeLocalizerOpen = new BehaviorSubject<boolean>(null);
  isCMYes = new BehaviorSubject<boolean>(null);
  isWeightingTypeDWI = new BehaviorSubject<boolean>(null);

  constructor() {}
}
